const auhotr = require('../config/author.json');

module.exports = {
    emailId:function(req,res){
        let id = auhotr.id
        return id;
    },
    emailPass:function(req,res){
        let pass = auhotr.password
        return pass;
    }
}