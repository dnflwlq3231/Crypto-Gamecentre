var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "OddEvenRule",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
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
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "DiceReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
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
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "OddEvenReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "number",
				"type": "uint256"
			},
			{
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminSendUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "publisher",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminSendContract",
		"outputs": [
			{
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "number",
				"type": "uint256"
			},
			{
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
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "RPS",
				"type": "uint256"
			}
		],
		"name": "RpsRule",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
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
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminReceiveContract",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gameContract",
		"outputs": [
			{
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
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "BalanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminReceiveUser",
		"outputs": [
			{
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
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "RpsReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "select",
				"type": "uint256"
			}
		],
		"name": "DiceRule",
		"outputs": [
			{
				"name": "result",
				"type": "uint256"
			},
			{
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
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "number",
				"type": "uint256"
			},
			{
				"name": "betAmount",
				"type": "uint256"
			}
		],
		"name": "Rps",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var address = $('#address').val();
var flag = 0;
var tx;
if (typeof web3 !== 'undefined') {
    console.log("MetaMask가 감지되었습니다.");
    var web3 = new Web3(web3.currentProvider);
    let contract = new web3.eth.Contract(abi, '0x571ad83fae8c50df99a5ca0ba649e954b17d4b8a');
    ethereum.enable();
    
    $(document).ready(async function () {
        ethereum.enable();
        let Balance = await contract.methods.BalanceOf(address).call();
        $('#ply-balance').attr('value', Balance);
    });

	let betAmount;

    $('#btn-get-token').click(async function () {
		ethereum.enable();
		let currentBalance = $('#ply-balance').val()

		if (currentBalance == "0") {
			await contract.methods.GetTokens(address).send({
				from : address
			}, function(error, result) {
				$('#img-ply-dice').attr('src', '/img/portfolio/coin.gif');
				if (error){
					console.log(error)
				}
			});


			let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance);

			$('#img-ply-dice').attr('src', '/img/dice/box.png');
		}
		else {
			$(function () {
				alert('토큰은 잔액을 모두 소진한 경우에만 드립니다.')
			})
		}
    });

    $('#btn-play-dice-1').click(async function () {
		if(flag == 0){
			ethereum.enable();
			$('#ply-balance').val();
			betAmount = $("#input-bet-amount").val();
			flag = 1;

			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}

			else {
				
				await contract.methods.Dice(address, '1', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-dice').attr('src', '/img/dice/dice_1.png')
						$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
				
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
				
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
				
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
    })

    $('#btn-play-dice-2').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			betAmount = $("#input-bet-amount").val();
			$('#ply-balance').val();
	
			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				
				await contract.methods.Dice(address, '2', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-dice').attr('src', '/img/dice/dice_2.png')
						$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
				
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
    })

    $('#btn-play-dice-3').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			betAmount = $("#input-bet-amount").val();
			$('#ply-balance').val();
	
			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				
				await contract.methods.Dice(address, '3', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-dice').attr('src', '/img/dice/dice_3.png')
						$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
				
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
    })

    $('#btn-play-dice-4').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			betAmount = $("#input-bet-amount").val();
			$('#ply-balance').val();
	
			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				
				await contract.methods.Dice(address, '4', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-dice').attr('src', '/img/dice/dice_4.png')
						$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
				
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
    })

    $('#btn-play-dice-5').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			betAmount = $("#input-bet-amount").val();
			$('#ply-balance').val();
	
			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				$('#img-ply-dice').attr('src', '/img/dice/dice_5.png')
				$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
		
				await contract.methods.Dice(address, '5', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
				
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
    })

    $('#btn-play-dice-6').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			betAmount = $("#input-bet-amount").val();
			$('#ply-balance').val();
	
			if (betAmount == "" || betAmount == 0 || betAmount == null) {
				$(function () {
					alert('배팅할 금액을 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				$('#img-ply-dice').attr('src', '/img/dice/dice_6.png')
				$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
		
				await contract.methods.Dice(address, '6', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						tx = result;
					}
				});
				
				let diceReward = await contract.methods.DiceReward(address).call();
					
				if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
				if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
				if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
				if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
				if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
				if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/dicedb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : diceReward[1],
						'user' : diceReward[2],
						'result' : diceReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#dicescore').load('/Dice #dicescore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("");
	})
}

else {
	$(function (){
		alert('Metamask 설치하세요');
		window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}
