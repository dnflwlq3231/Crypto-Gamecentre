const express = require('express');
const router = express.Router();
const app = express();
const db = require('../utils/db');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.sendFile('../public/index.html');
})

router.post('/Login/Signup.html', function(req, res){
    let userId = req.body['id'];
    let userPw = req.body['password'];
    let userEmail = req.body['email'];
    let userAddress = req.body['address'];
    console.log(userId, userPw, userEmail, userAddress);
    db.query(`insert into user (id, password, email, address) values (?, ?, ?, ?)`, [userId, userPw, userEmail, userAddress], function(err){
        
        res.redirect('/Login/Login_popup.html');
    });
});

router.post('/Login_popup.html', function(req, res){
    let userId = req.body['id'];
    let userPw = req.body['password'];
    console.log(userId,userPw);
    db.query(`select * from user where user.id=? `, [userId], function(err, userinfo){
        if(err){
         throw err;    
        }
        if(userinfo[0] == undefined){
            res.send('아이디가 없습니다.')
        }
        if(userinfo[0].password != userPw){
            res.send('비밀번호 오류');
        }
        if(userinfo[0].password === userPw){
            
            res.redirect('/');
        }
    })
})

module.exports = router;