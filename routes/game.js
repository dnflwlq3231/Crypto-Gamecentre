const express = require('express');
const router = express.Router();
const app = express();

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
const Tx = require('ethereumjs-tx').Transaction;

const chip = require('js/chip.json');
const contract = new web3.eth.Contract(chip, '0x6bFF99C3761669c2f1ce78466C21DcB7fb8DE6E0');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/getToken', function (req, res) {
    contract.methods.GetToken().call().then(console.log);
})

module.exports = router;