$("#create").on("click", function () {
    let userId = $('#id').val();
    let userPass = $('#password').val();
    let userMail = $('#email').val();
    let userAddress = $('#address').val();
    
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
 })