const express = require('express');
const router = express.Router();
const db = require('../utils/db.js');
const auth = require('../utils/auth.js');
const author = require('../utils/author.js');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

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
    let userId = req.body['id'];
    let userMessage = req.body['message'];
    let loginId = req.session.loginId;
    
    if(userId == loginId){
        
        res.json({"msg" : "success"})
        
        let mailerid = author.emailId(req,res);
        let mailerpass = author.emailPass(req,res);
        var transporter = nodemailer.createTransport({
            service: 'naver',
            auth: {
                user: mailerid,
                pass: mailerpass
            }
        });
        
        var mailOptions = {
            from: 'Game_Centre contact <dnflwlq3231@naver.com>',
            to: mailerid,
            subject: 'claim',
            text: 'claim ID :   ' + userId +  '\nclaim message :  \n       ' + userMessage 
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent!: ' + info.response);
            }
            transporter.close();
        
        });
    }
    else if(userId != loginId){
        if(loginId == undefined){
            res.json({"msg" : "error"})
        }
        else{
            res.json({"msg" : "false"})
        }
    }   
})

router.get('/login', function (req, res) {
    res.render('login');
})

router.post('/login_process', function(req, res){    
    let userId = req.body['id'];
    let userPw = req.body['password'];

    let salt = 'cryptoGamecentre';
    let pbkdf2 = crypto.pbkdf2Sync(userPw, salt, 1004, 64, 'sha512').toString('hex');
    
    db.query('select * from user where user.id=? ', [userId], function(err, userinfo){
        if(err){
            throw err;
        }
         if(userinfo[0] == null || userinfo[0].password != pbkdf2){       
            res.json({"msg" : "failed"})
        }
        else if(userinfo[0].password == pbkdf2){
            req.session.loginId = userId;
            req.session.isLogined = true;
            req.session.isAddress = userinfo[0].address;
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
    let userAddress = req.body['address'];
    let userEmail = req.body['email'];
    let userPw = req.body['password'];
    let salt = 'cryptoGamecentre';
    let pbkdf2 = crypto.pbkdf2Sync(userPw, salt, 1004, 64, 'sha512').toString('hex');

    db.query('update user set user.email=?, user.address=?, user.password=? where user.id=?', [userEmail, userAddress, pbkdf2, userId], function(err, result){
        if(err){
            throw err;
        }
        else { 
            res.json({});
        }
    })
})

router.get('/signup', function (req, res) {
    res.render('signup');
})

router.post('/signup_process', function(req, res){
    let userId = req.body['id'];
    let userPw = req.body['password'];
    let userEmail = req.body['email'];
    let userAddress = req.body['address'];
    let salt = 'cryptoGamecentre';
    let pbkdf2 = crypto.pbkdf2Sync(userPw, salt, 1004, 64, 'sha512').toString('hex'); 

    db.query(`insert into user (id, password, email, address) values (?, ?, ?, ?)`, [userId, pbkdf2, userEmail, userAddress], function(err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
        }
    });
});

router.get('/forgot', function (req,res){
    res.render('forgot');
})

router.post('/forgot_process', function(req,res){
    let userId = req.body['id'];
    let userEmail = req.body['email'];
    let arr = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,!,@,#,$,%,^,&,*,?".split(",");
    let randomPw = createCode(arr, 10);
    let salt = 'cryptoGamecentre';
    let pbkdf2 = crypto.pbkdf2Sync(randomPw, salt, 1004, 64, 'sha512').toString('hex');

    function createCode(objArr, iLength) {
        var arr = objArr;
        var ranpw = "";
        for (var j=0; j<iLength; j++) {
        ranpw += arr[Math.floor(Math.random()*arr.length)];
        }
        return ranpw;
    }

    db.query('select * from user where user.id=?', [userId], function(err,data){
        
        if(err){
            throw err;
        }
        else if(data[0] == null || data[0].email != userEmail){
            res.json({"msg" : "error"});     
        }
        else if(data[0].email == userEmail){
            let mailerid = author.emailId(req,res);
            let mailerpass = author.emailPass(req,res);
            var transporter = nodemailer.createTransport({
                service: 'naver',
                auth: {
                    user: mailerid,
                    pass: mailerpass
                }
            });
            
            var mailOptions = {
                from: 'Game_Centre <dnflwlq3231@naver.com>',
                to: userEmail,
                subject: 'Your Password',
                text: 'Temporary password :\n\n       ' + randomPw + '\n   Please change your password! '
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent!: ' + info.response);
                }
                transporter.close();
            
            });

            db.query('update user set user.password=? where user.id=?', [pbkdf2, userId], function(err2, data2){
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
        res.render('blackjack')
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
    let diceaddress = req.body['address'];
    let dicebetting = req.body['betting'];
    let dicecom = req.body['com'];
    let diceuser = req.body['user'];
    let diceresult = req.body['result'];
    let dicetxhash = req.body['txhash'];
    if(diceresult == 0){
        diceresult = '패'
    }
    else {
        diceresult = '승'
    }
    
    db.query('insert into gamedice (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [diceaddress, dicebetting, dicecom, diceuser, diceresult, dicetxhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
        }
    })
})

router.post('/rpsdb', function(req, res){
    let rpsaddress = req.body['address'];
    let rpsbetting = req.body['betting'];
    let rpscom = req.body['com'];
    let rpsuser = req.body['user'];
    let rpsresult = req.body['result'];
    let rpstxhash = req.body['txhash'];
    if(rpsresult == 0){
        rpsresult = '패'
    }
    else {
        rpsresult = '승'
    }

    if (rpscom){
        if(rpscom == 1){
            rpscom = '가위'
        }
        else if(rpscom == 2){
            rpscom = '바위'
        }
        else if(rpscom == 3){
            rpscom = '보'
        }
    }

    if (rpsuser){
        if(rpsuser == 1){
            rpsuser = '가위'
        }
        else if(rpsuser == 2){
            rpsuser = '바위'
        }
        else if(rpsuser == 3){
            rpsuser = '보'
        }
    }

    db.query('insert into gamerps (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [rpsaddress, rpsbetting, rpscom, rpsuser, rpsresult, rpstxhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
        }
    })
})

router.post('/oddevendb', function(req, res){
    let oddevenaddress = req.body['address'];
    let oddevenbetting = req.body['betting'];
    let oddevencom = req.body['com'];
    let oddevenuser = req.body['user'];
    let oddevenresult = req.body['result'];
    let oddeventxhash = req.body['txhash'];
    if(oddevenresult == 0){
        oddevenresult = '패'
    }
    else {
        oddevenresult = '승'
    }

    if(oddevencom){
        if(oddevencom == 0){
            oddevencom = '짝'  
        }
        else {
            oddevencom = '홀'
        }
    }

    if(oddevenuser){
        if(oddevenuser == 0){
            oddevenuser = '짝'
        }
        else {
            oddevenuser = '홀'
        }
    }
    
    
    db.query('insert into gameoddeven (address, betting, com, user, result, tx) values (?, ?, ?, ?, ?, ?)', [oddevenaddress, oddevenbetting, oddevencom, oddevenuser, oddevenresult, oddeventxhash], function (err, result){
        if(err){
            res.json({"msg" : "error"})
        }
        else {
            res.json({"msg" : "success"})
        }
    })
})

module.exports = router;