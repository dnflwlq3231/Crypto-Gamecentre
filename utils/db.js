var mysql = require('mysql');

var db = mysql.createConnection({

    host    :'203.236.220.47',

    port : 3306,

    user : 'root',

    password : 'class3',

    database:'testserver'

});

db.connect();

module.exports = db;