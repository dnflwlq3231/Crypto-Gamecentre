const express = require('express');
const router = express.Router();
const app = express();
const db = require('../utils/db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
    res.render(`index`);
})

router.get('/login', function (req, res) {
    res.render(`login`);
})

router.post('/login_process', function(req, res){    
    let {id, password} = req.body;
    console.log(id,password);
    db.query(`select * from user where user.id=? `, [id], function(err, userinfo){
        // if(err){
            
        // }
        // if (!userinfo.length){
        // }
        // if(userinfo[0].password != password){
        //         alert("비밀번호가 틀립니다.");
        //     }
        if(userinfo[0].password === password){
            
            res.redirect('/');
        }
    })
    
})

router.get('/signup', function (req, res) {
    res.render(`signup`);
})

router.post('/signup_process', function(req, res){
    let {id, password, email} = req.body;
    db.query(`insert into user (id, password, email) values (?, ?, ?)`, [id, password, email], function(err){
        if(err){
            console.log(err);
            throw err;
        }
        res.redirect('../public/Login/Login_popup.html');
    });
});

module.exports = router;