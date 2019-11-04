$("#btnSubmit").on("click", function () {
    let userid = $('#id').val();
    let userpass = $('#password').val();
    
    $.ajax({
        url: "/login_process",
        dataType: 'json',
        data: {
            'id': userid,
            'password': userpass
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
                window.location.href = '/'
            } else if (result.msg == "failed") {
                $('#check_login').modal('show');
            }
        }
    })
})

$("#password").keypress(function(e) {
    let key = e.which
    if (key == 13) {
        $("#btnSubmit").click();
    }
})

$("#check_login").ready(function(e) {
    let key = e.which
    if (key == 13) {
        $("#login_close").click();
    }
})
        
    







