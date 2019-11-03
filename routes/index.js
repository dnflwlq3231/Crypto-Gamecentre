const express = require('express');
const router = express.Router();

const abi = require('../utils/abi.json')
const db = require('../utils/db.js');
const auth = require('../utils/auth.js');
const author = require('../config/author.json');

const nodemailer = require('nodemailer');
const ethereum = require('ethereumjs-tx');
const crypto = require('crypto');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
const contract = new web3.eth.Contract(abi, '0x7436f94e7FBafd0F8A63ad6748E0c7A35E08e958');
const Tx = ethereum.Transaction;


router.get('/', function (req, res) {
    let statusUI = auth.statusUI(req, res);
    if(req.session){
        msg = `${req.session.loginId}로 로그인`
    }
    /* 일단 동작안됨. window가 문제임
    window.addEventListener('load', () => {
        if (typeof web3 !== 'undefined') {
            web3js = new Web3(web3.currentProvider);
        } else {
            console.log('web3가 없는 경우 metamask로 시도하십시오.')
            web3js = web3;
        }
    })
    /*
    if(ethereum.isMetaMask){
        let accounts = ethereum.enable();
        let account = accounts[0];
    }
    */
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
    // req.session.destroy();
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
            console.log("login failed")
            res.json({"msg" : "failed"})
        }
        else if(userinfo[0].password == pbkdf2){
            console.log("login successed")
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

router.get('/tt', function(req,res){
    res.render('tt');
})

// router.get('/BlackJack', function (req, res) {
//     if (req.session.loginId == undefined) {
//         res.redirect('/login');
//     }
//     res.render('tt')
// })

// router.get('/OddEven', function (req, res) {
//     if (req.session.loginId == undefined) {
//         res.redirect('/login');
//     }
//     res.render('tt')
// })

// router.get('/Dice', function (req, res) {
//     if (req.session.loginId == undefined) {
//         res.redirect('/login');
//     }
//     res.render('gameDice')
// })

// router.get('/Rps', function (req, res) {
//     if (req.session.loginId == undefined) {
//         res.redirect('/login');
//     }
//     res.render('tt')
// })

// web3를 이용해 컨트랙트와 통신하는 부분

router.get('/test', function (req, res) {
    if (req.session.loginId == undefined) {
        res.redirect('/login');
    }
    else {
        let userId = req.session.loginId;
        db.query('select address from user where user.id=?', [userId], async function (err, result) {
            let userAddress = result[0].address;
            // await contract.methods.GetTokens(userAddress).send({
            //     from : '0x166bc5697f57f4381b0e48f02d50a694476bed12',
            //     gas : 470000
            // }).on("transactionHash", function (){
            //     console.log("Hash");
            // }).on("receipt", function () {
            //     console.log("Receipt");
            // }).on("confirmation", function () {
            //     console.log("Confirmed");
            // }).on("error", async function () {
            //     console.log("Error");
            // })
            
            let aa = await contract.methods.BalanceOf(userAddress).call();
            res.render('test', {
                userAddr: userAddress,
                userBal: aa,
                abi : abi
            })
        })
    }   
})


module.exports = router;