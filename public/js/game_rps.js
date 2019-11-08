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
var tx;
var flag = 0;
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
	
	$('#betbutton').click(function () {
		betAmount = $('#input-bet-amount').val()
	});
	$('#betclose').on('click', function() {
		$('#input-bet-amount').val(null)
	});
	
	$('#btn-get-token').click(async function () {
        ethereum.enable();
		let currentBalance = $('#ply-balance').val()

		if (currentBalance == "0") {
			await contract.methods.GetTokens(address).send({
				from : address
			}, function(error, result) {
				if (error){
					console.log(error)
				}
			});

			$('#img-com-result').attr('style','visibility:visible').attr('src', '/img/portfolio/coin.gif')

			let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance);

			$('#img-com-result').attr('style','visibility:hidden').attr('src', null)
		}
		else {
			$(function () {
				alert('토큰은 잔액을 모두 소진한 경우에만 드립니다.')
			})
		}
	});

	$('#rps_scissors').click(async function () {
	if(flag == 0) {	
		flag = 1
		ethereum.enable();
		$('#ply-balance').val();
		
		if (betAmount == null || betAmount == "" || betAmount == 0) {
			$(function () {
				alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
				flag = 0
			})
		}
		else {
			await contract.methods.Rps(address, '1', betAmount).send({
				from: address
			}, function(error, result) {
				if (error){
					console.log(error)
				}else {
					$('#img-ply-selected').attr('style','visibility:visible').attr('src', '/img/rps/scissors.png')
					$('#img-com-result').attr('style','visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')
					tx = result;
				}
			});
			
			let rpsReward = await contract.methods.RpsReward(address).call();
			
			if (rpsReward[1] == "1") { $('#img-com-result').attr('src', 'img/rps/scissors.png')}
			if (rpsReward[1] == "2") { $('#img-com-result').attr('src', 'img/rps/rock.png')}
			if (rpsReward[1] == "3") { $('#img-com-result').attr('src', 'img/rps/palm.png')}

			let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance);

			$.ajax({
				url: "/rpsdb",
				dataType: 'json',
				data: {
					'address' : address,
					'betting' : betAmount,
					'com' : rpsReward[1],
					'user' : rpsReward[2],
					'result' : rpsReward[0],
					'txhash' : tx
				},
				type: "POST",
				success : function (result) {
					if(result.msg == "success"){
						$('#rpsscore').load('/Rps #rpsscore');
					}
				}
				
			})
			flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("")
	});

	$('#rps_rock').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			$('#ply-balance').val();
			
			if (betAmount == null || betAmount == "" || betAmount == 0) {
				$(function () {
					alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				
				await contract.methods.Rps(address, '2', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-selected').attr('style','visibility:visible').attr('src', '/img/rps/rock.png')
						$('#img-com-result').attr('style','visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let rpsReward = await contract.methods.RpsReward(address).call();
				
				if (rpsReward[1] == "1") { $('#img-com-result').attr('src', 'img/rps/scissors.png')}
				if (rpsReward[1] == "2") { $('#img-com-result').attr('src', 'img/rps/rock.png')}
				if (rpsReward[1] == "3") { $('#img-com-result').attr('src', 'img/rps/palm.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/rpsdb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : rpsReward[1],
						'user' : rpsReward[2],
						'result' : rpsReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#rpsscore').load('/Rps #rpsscore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("")
    });
	
	$('#rps_paper').click(async function () {
		if(flag == 0){
			flag = 1;
			ethereum.enable();
			$('#ply-balance').val();
			
			if (betAmount == null || betAmount == "" || betAmount == 0) {
				$(function () {
					alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
					flag = 0;
				})
			}
			else {
				
				await contract.methods.Rps(address, '3', betAmount).send({
					from: address
				}, function(error, result) {
					if (error){
						console.log(error)
					}else {
						$('#img-ply-selected').attr('style','visibility:visible').attr('src', '/img/rps/palm.png')
						$('#img-com-result').attr('style','visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')
						tx = result;
					}
				});
				
				let rpsReward = await contract.methods.RpsReward(address).call();
				
				if (rpsReward[1] == "1") { $('#img-com-result').attr('src', 'img/rps/scissors.png')}
				if (rpsReward[1] == "2") { $('#img-com-result').attr('src', 'img/rps/rock.png')}
				if (rpsReward[1] == "3") { $('#img-com-result').attr('src', 'img/rps/palm.png')}
	
				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);
	
				$.ajax({
					url: "/rpsdb",
					dataType: 'json',
					data: {
						'address' : address,
						'betting' : betAmount,
						'com' : rpsReward[1],
						'user' : rpsReward[2],
						'result' : rpsReward[0],
						'txhash' : tx
					},
					type: "POST",
					success : function (result) {
						if(result.msg == "success"){
							$('#rpsscore').load('/Rps #rpsscore');
						}
					}
				})
				flag = 0;
			}
		}
		betAmount = 0;
		$('#input-bet-amount').val("")
	});

	$("#img-com-result").attr('style', 'visibility:hidden');
	$("#img-ply-selected").attr('style', 'visibility:hidden');

	// $("#modalBalance").keydown(function(e) {
	// 	let key = e.which;
	// 	if (key == 13) {
	// 		$("#balanceclose").click();
	// 		location.href='/Rps'
	// 	}
	// })
	// $("#modalRule").keydown(function(e) {
	// 	let key = e.which;
	// 	if (key == 13) {
	// 		$("#ruleclose").click();
	// 		location.href='/Rps'
	// 	}
	// })
}

else {
	$(function (){
		alert('Metamask 설치하세요');
		window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}
