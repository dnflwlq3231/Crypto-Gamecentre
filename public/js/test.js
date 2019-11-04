var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminSend",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			}
		],
		"name": "Dice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "select",
				"type": "uint256"
			}
		],
		"name": "DiceRule",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "result",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "DiceComNum",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "GetTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			}
		],
		"name": "OddEven",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "OddEvenRule",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "betAmount",
				"type": "uint256"
			}
		],
		"name": "RPS",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "RPS",
				"type": "uint256"
			}
		],
		"name": "RpsRule",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_gameContract",
				"type": "address"
			}
		],
		"name": "SetContAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Token",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "BalanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "DiceReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gameContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "OddEvenReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "RPSReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

let address = $('#address').val();

if (typeof web3 !== 'undefined') {
    
    console.log("Using web3 detected from external source like Metamask");
    var web3 = new Web3(web3.currentProvider);
    let contract = new web3.eth.Contract(abi, '0x63ef3fc5ac265e74e206c5b2b812ec8603bdc347');
	ethereum.enable();
	
	$('#btn-balance').click(async function () {
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
    });

    $('#btn-get-token').click(async function () {
        let getToken = await contract.methods.GetTokens(address).send({
            from : address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('토큰 얻기 hash : ' + result);	
			}
		});
		console.log(getToken);
    });
	
	$('#btn-play-dice').click(async function () {
		let dice = await contract.methods.Dice(address, '3', '100').send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
		});
		console.log(dice);
	})
	
	$('#btn-play-diceward').click(async function (){
		let diceward = await contract.methods.DiceReward(address).call();
		console.log('컴퓨터 주사위 : ' + diceward[0] + '   주사위 결과 : ' + diceward[1]);
	})

	$('#btn-play-rps').click(async function () {
		let rps = await contract.methods.RPS(address, '1', '100').send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('가위바위보 hash : ' + result);	
			}
		});
		console.log(rps);
	})
	
	$('#btn-play-rpsward').click(async function (){
		let rpsward = await contract.methods.RPSReward(address).call();
		console.log('컴퓨터 : ' + rpsward[0] + '   가위바위보 결과 : ' + rpsward[1]);
	})

	$('#btn-play-oddeven').click(async function () {
		let oddeven = await contract.methods.OddEven(address, '0', '100').send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('홀짝 : ' + result);	
			}
		});
		console.log(oddeven);
	})
	
	$('#btn-play-oddevenward').click(async function (){
		let oddevenward = await contract.methods.OddEvenReward(address).call();
		console.log('컴퓨터 : ' + oddevenward[0] + '   홀짝 결과 : ' + oddevenward[1]);
	})

}