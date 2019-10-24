var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
        user: 'dnflwlq3231@naver.com',
        pass: 'goaWltkfkd7!@'
    }
});

var mailOptions = {
    from: 'Game_Centre <dnflwlq3231@naver.com>',
    to: 'khy3231@gmail.com',
    subject: 'Your Password',
    text: '1234'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent!: ' + info.response);
    }
    transporter.close();

});