$("#sendMessageButton").on("click", function() {
    let email = $('#email').val();
    let userMessage = $('#message').val();
    var regExp = /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) != null){
      $.ajax({
          url: "/contact",
          dataType: 'json',
          data: {
              'email': email,
              'message' : userMessage
          },
          type: "POST",
          error: function(jqXHR, textStatus, errorThrown){
                  console.log("jqXHR : " + jqXHR)
                  console.log("textStatus : " + textStatus)
                  console.log("errorThrown : " + errorThrown)
                  console.log("ajax 호출 실패")
          },
          success: function(result) {
              if (result.msg == "success") {
                $('#sendMessage1').modal('show');
              } 
              else if(result.msg == "false_1"){
                $('#sendMessage2').modal('show');
              }
              else if(result.msg == "false_2"){
                $('#sendMessage3').modal('show');
              }
          }
      })
    }
    else{
      $('#sendMessage2').modal('show');
    }
})