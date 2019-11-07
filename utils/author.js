const author = require('../config/author.json');

module.exports = {
    emailId:function(req,res){
        let id = author.id
        return id;
    },
    emailPass:function(req,res){
        let pass = author.password
        return pass;
    }
}