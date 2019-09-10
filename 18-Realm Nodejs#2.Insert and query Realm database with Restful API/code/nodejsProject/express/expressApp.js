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
const { 
    insertNewUser,
    filterUsersByName
} = require('../databases/realmSchemas')

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send({
        status: "success",
        name: "Nguyen Duc Hoang",
        sms: "This is root path for Realm Nodejs project"
    })
})

//POST request to insert new user
app.post('/insert_new_user', (request, response) => {
    const { tokenkey } = request.headers
    const { name, email } = request.body    
    response.setHeader('Content-Type', 'application/json')
    if (tokenkey != 'abc123456789') {
        response.send({
            status: "failed",
            message: "You sent wrong token's key"
        })    
        return
    }
    insertNewUser({ name, email }).then(insertedUser => {
        response.send({
            status: "success",
            message: `Insert new User successfully`,
            data: insertedUser
        })
    }).catch((error) => {
        response.send({
            status: "failed",
            message: `Insert User error: ${error}`
        })  
    })    
})
module.exports =  {
    app
}

