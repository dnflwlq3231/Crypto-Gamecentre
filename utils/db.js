const mysql = require('mysql');
const dbOption = require('./db.json')

var db = mysql.createConnection(dbOption);

db.connect();

module.exports = db;