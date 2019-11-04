$("#change").on("click", function () {
    let userId = $('#id').val();
    let userMail = $('#email').val();
    let userAddress = $('#address').val();
    let userPassword = $('#password').val();

    if (userPassword != "") {
        $.ajax({
            url: "/profile_process",
            dataType: 'json',
            data: {
                'id': userId,
                'email': userMail,
                'address': userAddress,
                'password': userPassword
            },
            type: "POST",
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("jqXHR : " + jqXHR)
                console.log("textStatus : " + textStatus)
                console.log("errorThrown : " + errorThrown)
                console.log("ajax 호출 실패")
            },
            success: function (result) {
                $('#check_profile').modal('show');

            }
        })
    }
    else {
        $('#check_profile2').modal('show');
    }
})

$("#password").keypress(function (e) {
    let key = e.which;
    if (key == 13) {
        $("#change").click();
    }
})

$("#check_profile").keydown(function (e) {
    let key = e.which;
    if (key == 13) {
        $(".close").click();
    }
})

$("#check_profile2").keydown(function (e) {
    let key = e.which;
    if (key == 13) {
        $(".close").click();
    }
})