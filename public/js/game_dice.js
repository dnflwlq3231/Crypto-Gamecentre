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
		let accounts = await ethereum.enable();
		let account = accounts[0];

		if(address != account) {
			$(function () {
				alert('MetaMask에 선택된 계정과 플레이어의 계정정보가 일치하지 않습니다.')
			})
		}

		else {
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
		}
	});

	$('.dice').click(async function (data) {
		let diceId = data.target.id.slice(-1)

		if(flag == 0){
			flag = 1;
			let accounts = await ethereum.enable();
			let account = accounts[0];
	
			if(address != account) {
				$(function () {
					alert('MetaMask에 선택된 계정과 플레이어의 계정정보가 일치하지 않습니다.')
				})
				flag = 0;
			}
			else {
				betAmount = $("#input-bet-amount").val();
				$('#ply-balance').val();
		
				if (betAmount == "" || betAmount == 0 || betAmount == null) {
					$(function () {
						alert('배팅할 금액을 입력하지 않았습니다.');
					})
				}
				else {
					
					await contract.methods.Dice(address, diceId, betAmount).send({
						from: address
					}, function(error, result) {
						if (error){
							console.log(error)
						}else {
							$('#img-ply-dice').attr('src', `/img/dice/dice_${diceId}.png`)
							$('#img-com-dice').attr('src', '/img/portfolio/pending_hamster.gif')
							tx = result;
						}
					});
					
					let diceReward = await contract.methods.DiceReward(address).call();
						
					$('#img-com-dice').attr('src', `img/dice/dice_${diceReward[1]}.png`)

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
				}
				flag = 0;
			}
			betAmount = 0;
			$('#input-bet-amount').val("");
		}
	})
}


else {
	$(function (){
		alert('Metamask 설치하세요');
		window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}
