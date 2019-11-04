
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
		"outputs": [
			{
				"name": "Result",
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
	}
];
let address = $('#address').val();

if (typeof web3 !== 'undefined') {
    
    console.log("Using web3 detected from external source like Metamask");
    var web3 = new Web3(web3.currentProvider);
    let contract = new web3.eth.Contract(abi, '0xfb3ff402044e79f85d59a456205bed24cc818eb0');
    
    async function func(){

        let urBalance = await contract.methods.BalanceOf(address).call();
        console.log(urBalance);
    }
    func();

    $('#btn-get-token').click(async function () {
        let getToken = await contract.methods.GetTokens(address).send({
            from : address
        });
    });

    $('#btn-bet').click(async function () {
		var userAccounts = await ethereum.enable();
		userAccount = userAccounts[0];
        let bet = await contract.methods.Betting('10', address).send({
            from: address
        });
	});
	
	$('#btn-dice').click(async function () {
		let mydiceTuple = await contract.methods.Dice(address, '3', '100').send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.log("OK result")
				console.dir(result);	
			}
			
		});
		console.log("OK after await")
		console.dir(mydiceTuple);
		
//		console.dir(mydiceTuple.outputs.Result + "  ,  " + mydiceTuple.outputs.DiceComNum);
		console.dir(mydiceTuple.outputs);


	})
	
	$('#btn-play-ward').click(async function (){
		let aaa = await contract.methods.DiceReward(address).call();
		console.log(aaa);
		
	})

    // $('#btn-play-dice').click(async function () {
    //     let userDiceNum = $('#select-user-dice option').index($('#select-user-dice optionselected'));

    //     var userAccounts = await ethereum.enable();
    //     userAccount = userAccounts[0];

    //     let plyDice = await contract.methods.DiceGameStart(userDiceNum).send({
    //         from : userAccount
    //     })
    // })

    // $('#btn-reward').click(async function () {

    //     let ee = await contract.methods.DiceReward(address).send({
    //         from : address
    //     })
    // })

}