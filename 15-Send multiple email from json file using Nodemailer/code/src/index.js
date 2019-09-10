/**
 * Created by hoangnd on 8/20/17.
 * Using Promise to read json File in Node.js, then send email
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
console.log("Using Promise to read json File in Node.js");
let fileManager = require('./fileManager');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodejst9@gmail.com',
        pass: 'Type your password here'
    }
});


/*
fileManager.buyAnIphone("iphone 7 plus").then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(`${error}`);
});
*/
fileManager.readJsonFile('./src/jsonfile.json').then((jsonObject) => {
    console.log(`email list = ${jsonObject["emails"]}`);
    let mailOptions = {
        from: 'nodejst9@gmail.com',
        to: jsonObject["emails"],
        subject: 'Sending Email using Node.js',
        // text: 'This email is sent using Node js with nodemailer. Sender: Nguyen Duc Hoang',
        html: '<h1>Welcome !</h1><p>This email is sent using Node js with nodemailer. Sender: Nguyen Duc Hoang</p>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});




