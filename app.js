const express = require('express');
const app = express();
const db = require('./utils/db');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.post('/Login/Signup.html', function(req, res){
    let {id, password, email} = req.body;
    db.query(`insert into user (id, password, email) values (?, ?, ?)`, [id, password, email], function(err){
        if(err){
            console.log(err);
            throw err;
        }
        res.redirect('/Login/Login_popup.html');
    });
});

app.post('/Login_popup.html', function(req, res){
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

app.listen(3000, function(){
    console.log('server start');
});