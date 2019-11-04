$("#subbutton").on("click", function() {
    let userId = $('#id').val();
    let userMail = $('#email').val();
    
    $.ajax({
        url: "/forgot_process",
        dataType: 'json',
        data: {
            'id': userId,
            'email' : userMail,
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
                $('#indexemail').modal('show');
            } else if (result.msg == "error") {
                $('#check_typing').modal('show');
                }
        }
    })
})