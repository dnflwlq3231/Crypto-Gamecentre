var abi = [
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
	}
]

var address = $('#address').val();

if (typeof web3 !== 'undefined') {

    console.log("MetaMask가 감지되엇습니다.");
    var web3 = new Web3(web3.currentProvider);
    let contract = new web3.eth.Contract(abi, '0x08550f36557f395071976240e32ba93c8e707cdc');
    ethereum.enable();
    
    // 페이지 로드시 잔액 조회
    $(document).ready(async function () {
        ethereum.enable();
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    });

    $('#btn-get-token').click(async function () {
        ethereum.enable();
        let getToken = await contract.methods.GetTokens(address).send({
            from : address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('토큰 얻기 hash : ' + result);	
			}
        });
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    });

    $('#btn-play-dice-1').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_1.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '1', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
        
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

    $('#btn-play-dice-2').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_2.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '2', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
        
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

    $('#btn-play-dice-3').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_3.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '3', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
        
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

    $('#btn-play-dice-4').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_4.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '4', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
        
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

    $('#btn-play-dice-5').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_5.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '5', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
        
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

    $('#btn-play-dice-6').click(async function () {
        ethereum.enable();
        let betAmount = $("#input-bet-amount").val();

        $('#img-ply-dice').attr('src', '/img/dice/dice_6.png')
        $('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')

        let plyDice = await contract.methods.Dice(address, '6', betAmount).send({
			from: address
		}, function(error, result) {
			if (error){
				console.log(error)
			}else {
				console.dir('주사위 hash : ' + result);	
			}
        });
        
        let diceReward = await contract.methods.DiceReward(address).call();
        console.log('주사위 결과 : ' + diceReward[0] + '   컴퓨터 주사위 : ' + diceReward[1] + '   유저 주사위 : ' + diceReward[2] + '   베팅금액 : ' + diceReward[3]);
            
        if (diceReward[1] == "1") { $('#img-com-dice').attr('src', 'img/dice/dice_1.png')}
        if (diceReward[1] == "2") { $('#img-com-dice').attr('src', 'img/dice/dice_2.png')}
        if (diceReward[1] == "3") { $('#img-com-dice').attr('src', 'img/dice/dice_3.png')}
        if (diceReward[1] == "4") { $('#img-com-dice').attr('src', 'img/dice/dice_4.png')}
        if (diceReward[1] == "5") { $('#img-com-dice').attr('src', 'img/dice/dice_5.png')}
        if (diceReward[1] == "6") { $('#img-com-dice').attr('src', 'img/dice/dice_6.png')}
        // 잔액 변경
        let Balance = await contract.methods.BalanceOf(address).call();
        console.log('현재 잔액 : ' + Balance);
        $('#ply-balance').attr('value', Balance);
    })

}