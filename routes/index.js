const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const bodyParser = require('body-parser');
const sessionParser = require('express-session');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(sessionParser({
    secret: 'abcdefghijklmnop',
    resave: true,
    saveUninitialized: true
}));

router.get('/', function (req, res) {
    let msg = `로그인 안하고 접속`
    if(req.session.user){
        msg = `${req.session.user.loginId}로 로그인`
    }
    console.log(msg);
    res.render(`index`);
})

router.get('/logout', function(req,res){
    req.session.destroy();
    console.log(`로그아웃`);
    res.redirect('/');
})

router.get('/profile', function (req, res) {
    if(req.session.user.loginId != undefined){
        let id = req.session.user.loginId;
        console.log(id);
        db.query('select * from user where user.id = ?'), [id], function(err, data){
            res.render('profile', {
                data
            })
        }
    }
    if(req.session.user.loginId == undefined){
        
    }
})

router.get('/login', function (req, res) {
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
        if(result){
            res.redirect('/login');
        }
    });
});

router.route('/login_process').post(function(req, res){    
    let userId = req.body['id'];
    let userPw = req.body['password'];
    console.log(userId,userPw);
    db.query(`select * from user where user.id=? `, [userId], function(err, userinfo){
        if(err){
         throw err;    
        }
        if(userinfo[0] == undefined){
            res.send('아이디가 없습니다.');
        }
        if(userinfo[0].password != userPw){
            res.send('비밀번호 오류');
        }
        if(userinfo[0].password === userPw){
            req.session.user = {
                "loginId" : userId,
                "loginPassword" : userPw
            }
            res.redirect('/');
        }
    })
})

router.get('/signup', function (req, res) {
    res.render(`signup`);
})


module.exports = router;