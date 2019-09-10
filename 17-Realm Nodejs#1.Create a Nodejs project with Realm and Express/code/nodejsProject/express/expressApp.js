/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Define Express's app to use in this project
*/
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//Databases
const { insertNewUser } = require('../databases/realmSchemas')

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send({
        status: "success",
        name: "Nguyen Duc Hoang",
        sms: "This is root path for Realm Nodejs project"
    })
})
module.exports =  {
    app
}

