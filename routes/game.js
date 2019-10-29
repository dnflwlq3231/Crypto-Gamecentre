const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io'));
const Tx = require('ethereumjs-tx').Transaction;

const chip = require('../utils/chip.json')
const contract = new web3.eth.Contract(chip, '0x6bFF99C3761669c2f1ce78466C21DcB7fb8DE6E0');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/game/getToken', function (req, res) {
    contract.methods.GetToken().call().then(console.log);
})

router.get('/game/:gameId', function (req, res) {
    let gameTitle;
    let gamePage;
    if (req.params.gameId == 0){
        gameTitle = 'BlackJack';
        gamePage = ``;
    } else if (req.params.gameId == 1){
        gameTitle = 'Dice';
        gamePage = ``;
    } else if (req.params.gameId == 2){
        gameTitle = 'OddEven';
        gamePage = ``;
    } else if (req.params.gameId == 3){
        gameTitle = 'RockPaperScissors';
        gamePage = ``;
    } else {
        console.log('undefined game page request')
        res.redirect('/')
    }
    res.render(`game`, {
        title: gameTitle,
        body: gamePage
    });
})


module.exports = router;