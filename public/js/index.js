$("#sendMessageButton").on("click", function() {
    let userId = $('#name').val();
    let userMessage = $('#message').val();
    
    $.ajax({
        url: "/contact",
        dataType: 'json',
        data: {
            'id': userId,
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
            else if (result.msg == "error") {
              $('#sendMessage2').modal('show');
            }
            else if (result.msg == "false"){
              $('#sendMessage3').modal('show');
            }
        }
    })
})