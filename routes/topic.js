const express = require('express');
const Web3 = require('web3');
const app = express();
const router = express.Router();
const Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
const db = require('../public/js/db');
const bodyParser = require('body-parser');
const session = require('express-session');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/creat', function (req, res) {
    let title = 'Create Account'
    return res.render('create', { title })
});

