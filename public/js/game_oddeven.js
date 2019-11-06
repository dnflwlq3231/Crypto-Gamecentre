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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminSend",
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

if (typeof web3 !== 'undefined') {

    console.log("MetaMask가 감지되었습니다.");
    var web3 = new Web3(web3.currentProvider);
    let contract = new web3.eth.Contract(abi, '0x08550f36557f395071976240e32ba93c8e707cdc');
    ethereum.enable();
    
    $(document).ready(async function () {
        ethereum.enable();
        let Balance = await contract.methods.BalanceOf(address).call();
        $('#ply-balance').attr('value', Balance);
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
				}else {
					tx = result;
				}
			});

			let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance);
		}
		else {
			$(function () {
				alert('토큰은 잔액을 모두 소진한 경우에만 드립니다.')
			})
		}
    });

    $('#oddEven_odd').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();
        $('#ply-balance').val();

        if (betAmount == "") {
            $(function () {
                alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
            })
        }
        else {
            $('#img-ply-selected').attr('style', 'visibility:visible').attr('src', '/img/oddeven/odd_result.png')
            $('#img-com-result').attr('style', 'visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')

            await contract.methods.OddEven(address, '1', betAmount).send({
                from: address
            }, function (err, result) {
                if(err) { console.log(err) }
                else { tx = result }
            });

            let OddEvenReward = await contract.methods.OddEvenReward(address).call();

            if (OddEvenReward[1] == 0) { $('#img-com-result').attr('src', '/img/oddeven/even_result.png')}
            if (OddEvenReward[1] == 1) { $('#img-com-result').attr('src', '/img/oddeven/odd_result.png')}
            
            let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance)
			
			$.ajax({
				url: "/oddevendb",
				dataType: 'json',
				data: {
					'address' : address,
					'betting' : betAmount,
					'com' : OddEvenReward[1],
					'user' : OddEvenReward[2],
					'result' : OddEvenReward[0],
					'txhash' : tx
				},
				type: "POST"
			})
        }
    })
    
    $('#oddEven_even').click(async function () {
		ethereum.enable();
        let betAmount = $("#input-bet-amount").val();
        $('#ply-balance').val();

        if (betAmount == "") {
            $(function () {
                alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
            })
        }
        else {
            $('#img-ply-selected').attr('style','visibility:visible').attr('src', '/img/oddeven/even_result.png')
            $('#img-com-result').attr('style','visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')

            await contract.methods.OddEven(address, '0', betAmount).send({
                from: address
            }, function (err, result) {
                if(err) { console.log(err) }
                else { tx = result }
            });

            let OddEvenReward = await contract.methods.OddEvenReward(address).call();

            if (OddEvenReward[1] == 0) { $('#img-com-result').attr('src', '/img/oddeven/even_result.png')}
            if (OddEvenReward[1] == 1) { $('#img-com-result').attr('src', '/img/oddeven/odd_result.png')}
            
            let Balance = await contract.methods.BalanceOf(address).call();
			$('#ply-balance').attr('value', Balance)
			
			$.ajax({
				url: "/oddevendb",
				dataType: 'json',
				data: {
					'address' : address,
					'betting' : betAmount,
					'com' : OddEvenReward[1],
					'user' : OddEvenReward[2],
					'result' : OddEvenReward[0],
					'txhash' : tx
				},
				type: "POST"
			})
        }
    })
}