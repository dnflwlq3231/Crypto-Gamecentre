const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');
const auth = require('../utils/auth.js');
const author = require('../utils/author.js');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const salt = 'cryptoGamecentre';

router.get('/', function (req, res) {
    let statusUI = auth.statusUI(req, res);
    if(req.session){
        msg = `${req.session.loginId}로 로그인`
    }
    console.log(msg);
    res.render('index', {
        statusUI
    });
})

router.post('/contact', function (req,res){
    let ctr = req.body;
    console.log(ctr.email);
    if(ctr.email == ""){
        res.json({"msg" : "false_1"})
    }

    else if(ctr.message == ""){
        res.json({"msg" : "false_2"})
    }
        
    else{
        let mailerid = author.emailId(req,res);
        let mailerpass = author.emailPass(req,res);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mailerid,
                pass: mailerpass
            }
        });
        
        var mailOptions = {
            from: mailerid,
            to: mailerid,
            subject: 'claim <' + ctr.email + '>',
            html: '<p>claim Email:&nbsp;<b>' + ctr.email + '</b></p><p><b>claim message:</b><br>' + ctr.message + '</p>'
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(ctr.email + ' Claim Email sent!: ' + info.response);
            }
            transporter.close();
        });
        res.json({"msg" : "success"})
    }   
        
    
})

router.get('/login', function (req, res) {
    res.render('login');
})

router.post('/login_process', function(req, res){    
    let ctr = req.body;
    let pbkdf2 = crypto.pbkdf2Sync(ctr.password, salt, 1004, 64, 'sha512').toString('hex'); 

    db.query('select * from user where user.id=? ', [ctr.id], function(err, userinfo){
        if(err){
            throw err;
        }
         if(userinfo[0] == null || userinfo[0].password != pbkdf2){       
            res.json({"msg" : "failed"})
        }
        else if(userinfo[0].password == pbkdf2){
            req.session.loginId = ctr.id;
            res.json({"msg": "success"})
        }
    })
})

router.get('/logout', function(req,res){
    req.session.destroy(function(err){
        console.log("logout");
        res.redirect('/');   
    });
})

router.get('/profile', function (req, res) {
    
    if(req.session.loginId != undefined){
        let id = req.session.loginId;
        db.query('select * from user where user.id=?', [id], function(err, data){
            res.render('profile', {
                data
            })
        })
    }
    else if(req.session.loginId == undefined){
        res.redirect('/login');
    }
})

router.post('/profile_process', function(req,res){
    let userId = req.session.loginId;
    let ctr = req.body;
    let pbkdf2 = crypto.pbkdf2Sync(ctr.password, salt, 1004, 64, 'sha512').toString('hex');

    db.query('update user set user.email=?, user.address=?, user.password=? where user.id=?', [ctr.email, ctr.address, pbkdf2, userId], function(err, result){
        if(err){
            throw err;
        }
        else { 
            res.json({});
            console.log(userId + ' profile update')
        }
    })
})

router.get('/signup', function (req, res) {
    res.render('signup');
})

router.post('/signup_process', function(req, res){
    let ctr = req.body;
    let pbkdf2 = crypto.pbkdf2Sync(ctr.password, salt, 1004, 64, 'sha512').toString('hex'); 

    db.query(`insert into user (id, password, email, address) values (?, ?, ?, ?)`, [ctr.id, pbkdf2, ctr.email, ctr.address], function(err, result){
        if(err){
            res.json({"msg" : "error"});
        }
        else {
            res.json({"msg" : "success"});
            console.log(ctr.id + ' signup');
        }
    });
});

router.get('/forgot', function (req,res){
    res.render('forgot');
})

router.post('/forgot_process', function(req,res){
    let ctr = req.body;
    let arr = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,!,@,#,$,%,^,&,*,?".split(",");
    let randomPw = createCode(arr, 10);
    let pbkdf2 = crypto.pbkdf2Sync(randomPw, salt, 1004, 64, 'sha512').toString('hex');

    function createCode(objArr, iLength) {
        var arr = objArr;
        var ranpw = "";
        for (var j=0; j<iLength; j++) {
        ranpw += arr[Math.floor(Math.random()*arr.length)];
        }
        return ranpw;
    }

    db.query('select * from user where user.id=?', [ctr.id], function(err,data){
        
        if(err){
            throw err;
        }
        else if(data[0] == null || data[0].email != ctr.email){
            res.json({"msg" : "error"});     
        }
        else if(data[0].email == ctr.email){
            let mailerid = author.emailId(req,res);
            let mailerpass = author.emailPass(req,res);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: mailerid,
                    pass: mailerpass
                }
            });
            
            var mailOptions = {
                from: mailerid,
                to: ctr.email,
                subject: 'Your Temporary Password',
                html: '<p>Temporary password : <b>' + randomPw + '</b></p><p><a href="http://222.122.203.222:3000/profile">Please change your password!</a></p>'
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(ctr.id + ' forgot password Email sent!: ' + info.response);
                }
                transporter.close();
            
            });

            db.query('update user set user.password=? where user.id=?', [pbkdf2, ctr.id], function(err2, data2){
                res.json({"msg" : "success"});
            });
        }
    })
})

router.get('/Blackjack', function(req, res) {
    if(req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else {
        res.render('blackjack');
    }
})
router.get('/OddEven', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else {
        let userId = req.session.loginId;
        db.query('select * from user where user.id=?', [userId], async function (err, result) {
            if (err) {
                throw err;
            }
            else {
                let Address = result[0].address;
                db.query('select * from gameoddeven where gameoddeven.address=? order by oddeven_no DESC limit 5', [Address], function (err, result2) {
                    res.render('oddeven', {
                        address : Address,
                        list : result2
                    });
                })
            }
    })}
})

router.get('/Rps', function(req,res){
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else {
        let userId = req.session.loginId;
        db.query('select * from user where user.id=?', [userId], async function (err, result) {
            if (err) {
                throw err;
            }
            else {
                let Address = result[0].address;
                db.query('select * from gamerps where gamerps.address=? order by rps_no DESC limit 5', [Address], function (err, result2) {
                    res.render('rps', {
                        address : Address,
                        list : result2
                    });
                })
            }
    })}
})

router.get('/Dice', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else {
        let userId = req.session.loginId;
        db.query('select * from user where user.id=?', [userId], function (err, result) {
            if (err) {
                throw err;
            }
            else {
                let Address = result[0].address;
                db.query('select * from gamedice where gamedice.address=? order by dice_no DESC limit 5', [Address], function (err, result2) {
                    res.render('dice', {
                        address : Address,
                        list : result2
                    });
                })
            }
    })}   
})

router.post('/dicedb', function(req, res){
    let dice = req.body;
    if(dice.result == 0){
        dice.result = '패'
    }
    else {
        dice.result = '승'
    }
    
    db.query('insert into gamedice (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [dice.address, dice.betting, dice.com, dice.user, dice.result, dice.txhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
            console.log(req.session.loginId + ' game play Dice')
        }
    })
})

router.post('/rpsdb', function(req, res){
    let rps = req.body;

    if(rps.result == 0){
        rps.result = '패'
    }
    else {
        rps.result = '승'
    }

    if (rps.com){
        if(rps.com == 1){
            rps.com = '가위'
        }
        else if(rps.com == 2){
            rps.com = '바위'
        }
        else if(rps.com == 3){
            rps.com = '보'
        }
    }

    if (rps.user){
        if(rps.user == 1){
            rps.user = '가위'
        }
        else if(rps.user == 2){
            rps.user = '바위'
        }
        else if(rps.user == 3){
            rps.user = '보'
        }
    }

    db.query('insert into gamerps (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [rps.address, rps.betting, rps.com, rps.user, rps.result, rps.txhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
            console.log(req.session.loginId + ' game play Rps')
        }
    })
})

router.post('/oddevendb', function(req, res){
    let odd = req.body;

    if(odd.result == 0){
        odd.result = '패'
    }
    else {
        odd.result = '승'
    }

    if(odd.com){
        if(odd.com == 0){
            odd.com = '짝'  
        }
        else {
            odd.com = '홀'
        }
    }

    if(odd.user){
        if(odd.user == 0){
            odd.user = '짝'
        }
        else {
            odd.user = '홀'
        }
    }
    
    
    db.query('insert into gameoddeven (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [odd.address, odd.betting, odd.com, odd.user, odd.result, odd.txhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
            console.log(req.session.loginId + ' game play oddeven')
        }
    })
})

module.exports = router;