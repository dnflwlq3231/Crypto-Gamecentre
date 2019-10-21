var mysql = require('mysql');

var db = mysql.createConnection({

    host    :'localhost',

    port : 3306,

    user : 'root',

    password : 'class3',

    database:'testserver'

});

db.connect();

module.exports = db;