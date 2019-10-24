const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const bodyParser = require('body-parser');
const sessionParser = require('express-session');
const auth = require('../utils/auth.js');
const FileStore = require('session-file-store')(sessionParser);
const nodemailer = require('nodemailer');

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
    console.log(msg);
    res.render(`index`, {
        statusUI
    });
})

router.get('/logout', function(req,res){
    req.session.destroy(function(err){
       if(err){
           throw err;
       } else {
            console.log(`로그아웃`);
            res.redirect('/');
       }
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

router.get('/login', function (req, res) {
    req.session.destroy();
    res.render(`login`);
})

router.post('/signup_process', function(req, res){
    let userId = req.body['id'];
    let userPw = req.body['password'];
    let userEmail = req.body['email'];
    let userAddress = req.body['address'];
    
    console.log(userId, userPw, userEmail, userAddress);
    db.query(`insert into user (id, password, email, address) values (?, ?, ?, ?)`, [userId, userPw, userEmail, userAddress], function(err, result){
        if(err){
            res.send('id & address 사용중');
        }
        else if(result){
            res.redirect('/login');
        }
    });
});

router.post('/login_process', function(req, res){    
    let userId = req.body['id'];
    let userPw = req.body['password'];
    console.log(userId,userPw);
    db.query(`select * from user where user.id=? `, [userId], function(err, userinfo){
        if(err){
            throw err;
        }
        else if(userinfo[0] == null){
            res.send('아이디가 없습니다.');
        }
        else if(userinfo[0].password != userPw){
            res.send('비밀번호 오류');
        }
        else if(userinfo[0].password === userPw){
            
            req.session.loginId = userId;
            req.session.isLogined = true;
            req.session.isAddress = userinfo[0].address;
            res.redirect('/');
        }
    })
})

router.post('/forgot_process', function(req,res){
    let userId = req.body['id'];
    let userEmail = req.body['email'];
    console.log(userEmail);
    db.query('select * from user where user.id=?', [userId], function(err,data){
        if(err){
            throw err;
        }
        else if(data[0] == null){
            res.send('아이디가 없습니다');            
        }
        else if(data[0].email != userEmail){
            res.send('Email이 틀립니다');
        }
        else if(data[0].email == userEmail){
            var transporter = nodemailer.createTransport({
                service: 'naver',
                auth: {
                    user: 'dnflwlq3231@naver.com',
                    pass: 'goaWltkfkd7!@'
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
            res.redirect('/');
        }
    })
})

router.get('/forgot', function (req,res){
    res.render('forgot');
})

router.get('/signup', function (req, res) {
    res.render(`signup`);
})

module.exports = router;