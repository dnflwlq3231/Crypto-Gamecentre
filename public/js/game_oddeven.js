var address = $('#address').val();
var tx;
var flag = 0;

if (typeof web3 !== 'undefined') {
    console.log("MetaMask가 감지되었습니다.");
    var web3 = new Web3(web3.currentProvider);
	let contract = new web3.eth.Contract(abi, '0x571ad83fae8c50df99a5ca0ba649e954b17d4b8a');

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
					$('#img-ply-selected').attr('style', 'visibility:visible').attr('src', '/img/portfolio/coin.gif');
					if (error){
						console.log(error)
					}else {
						tx = result;
					}
				});

				let Balance = await contract.methods.BalanceOf(address).call();
				$('#ply-balance').attr('value', Balance);

				$('#img-ply-selected').attr('style', 'visibility:hidden').attr('src', null);
			}
			else {
				$(function () {
					alert('토큰은 잔액을 모두 소진한 경우에만 드립니다.')
				})
			}
		}
    });

	$('.oddEven_img').click(async function (data) {
		let oddId = data.target.id.slice(-1);
		if(flag == 0){
			flag = 1;
			let accounts = await ethereum.enable();
			let account = accounts[0];

			if(address !== account) {
				$(function () {
					alert('MetaMask에 선택된 계정과 플레이어의 계정정보가 일치하지 않습니다.')
				})
				flag = 0;
			}

			else{
				ethereum.enable();
				betAmount = $("#input-bet-amount").val();
				$('#ply-balance').val();
				
				if (betAmount == "" || betAmount == 0 || betAmount == null) {
					$(function () {
						alert('배팅할 금액이 잔고보다 부족하거나, 입력하지 않았습니다.');
					})
				}
				else {
					await contract.methods.OddEven(address, oddId, betAmount).send({
						from: address
					}, function (err, result) {
						if(err) { console.log(err) }
						else { 
							$('#img-ply-selected').attr('style', 'visibility:visible').attr('src', `/img/oddeven/result_${oddId}.png`)
							$('#img-com-result').attr('style', 'visibility:visible').attr('src', '/img/portfolio/pending_hamster.gif')
							tx = result
						}
					});
					
					let OddEvenReward = await contract.methods.OddEvenReward(address).call();
					
					$('#img-com-result').attr('src', `/img/oddeven/result_${OddEvenReward[1]}.png`)
					
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
						type: "POST",
						success : function (result) {
							if(result.msg == "success"){
								$('#oddevenScore').load('/OddEven #oddevenScore');
							}
						}
					})
				}
				betAmount = 0;
				$('#input-bet-amount').val("")
				flag = 0;
			}
		}
    })

	$("#img-com-result").attr('style', 'visibility:hidden');
	$("#img-ply-selected").attr('style', 'visibility:hidden');

	
	$("#modalBalance").keydown(function(e) {
		let key = e.which;
		if (key == 13) {
			$("#balanceclose").click();
			$(".modal-backdrop").remove();
						
		}
	})
	$("#modalRule").keydown(function(e) {
		let key = e.which;
		if (key == 13) {
			$("#ruleclose").click();
			$(".modal-backdrop").remove();
		}
	})
}

else {
	$(function (){
		alert('Metamask 설치하세요');
		window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}

