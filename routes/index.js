const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const bodyParser = require('body-parser');
const sessionParser = require('express-session');
const auth = require('../utils/auth.js');
const FileStore = require('session-file-store')(sessionParser);
const ethereum = require('ethereumjs-tx');
const nodemailer = require('nodemailer');
const author = require('../utils/author');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(sessionParser({
    secret: 'abcdefghijklmnopqrstuvwxyz',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

router.get('/', function (req, res) {
    let statusUI = auth.statusUI(req, res);
    if(req.session){
        msg = `${req.session.loginId}로 로그인`
    }
    if(ethereum.isMetaMask){
        let accounts = ethereum.enable();
        let account = accounts[0];
    }
    console.log(msg);
    res.render('index', {
        statusUI
    });
})

router.get('/login', function (req, res) {
    req.session.destroy();
    res.render('login');
})

router.post('/login_process', function(req, res){    
    let userId = req.body['id'];
    let userPw = req.body['password'];
    console.log(userId, userPw)
    db.query('select * from user where user.id=? ', [userId], function(err, userinfo){
        if(err){
            throw err;
        }
         if(userinfo[0] == null || userinfo[0].password != userPw){       
            console.log("login failed")
            res.json({"msg" : "failed"})
        }
        else if(userinfo[0].password == userPw){
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
        console.log(id);
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
    db.query('update user set user.email=?, user.address=? where user.id=?', [userEmail, userAddress, userId], function(err, result){
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
    
    console.log(userId, userPw, userEmail, userAddress);
    db.query(`insert into user (id, password, email, address) values (?, ?, ?, ?)`, [userId, userPw, userEmail, userAddress], function(err, result){
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
    db.query('select * from user where user.id=?', [userId], function(err,data){
        if(err){
            throw err;
        }
        else if(data[0] == null || data[0].email != userEmail){
            res.json({"msg" : "error"});     
        }
        else if(data[0].email == userEmail){
            res.json({"msg" : "success"});
            
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
                text: 'Your Password :  ' + data[0].password
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
    })
})

router.get('/tt', function(req,res){
    res.render('tt');
})

module.exports = router;