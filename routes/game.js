const express = require('express');
const router = express.Router();
const app = express();

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
const Tx = require('ethereumjs-tx').Transaction;


module.exports = router;