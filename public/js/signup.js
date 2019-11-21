if (typeof web3 !== 'undefined') {

   $("#create").on("click", async function () {
      let userId = $('#id').val();
      let userPass = $('#password').val();
      let accounts = await ethereum.enable();
      let userAddress = accounts[0];
      userAddress = userAddress.toLowerCase();

      let userMail = $('#email').val();
      var regExp = /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (userMail.match(regExp) != null) {
         $.ajax({
            url: "/signup_process",
            dataType: 'json',
            data: {
               'id': userId,
               'password': userPass,
               'email': userMail,
               'address': userAddress
            },
            type: "POST",
            error: function (jqXHR, textStatus, errorThrown) {
               console.log("jqXHR : " + jqXHR)
               console.log("textStatus : " + textStatus)
               console.log("errorThrown : " + errorThrown)
               console.log("ajax 호출 실패")
            },
            success: function (result) {
               if (result.msg == "success") {
                  $('#signup1').modal('show');
                  window.location.href = '/login'
               } else if (result.msg == "error") {
                  $('#signup2').modal('show');
               }
            }
         })
      }
      else{
         $('#signup3').modal('show');
      }
   })
}

else {
	$(function (){
		alert('Metamask 설치하세요');
		window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko'
	})
}