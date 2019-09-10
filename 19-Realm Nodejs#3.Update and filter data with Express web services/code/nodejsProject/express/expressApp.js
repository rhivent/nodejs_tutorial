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
    filterUsersByName,
    updateAnUser,
    insertAddressToUser,
    deleteUser  
} = require('../databases/realmSchemas')

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send({
        status: "success",
        name: "Nguyen Duc Hoang",
        sms: "This is root path for Realm Nodejs project"
    })
})
//Filter users by name
app.get('/filter_users_by_name', (request, response) => {        
    const { searchedName } = request.query   
    filterUsersByName(searchedName).then(filteredUsers => {
        response.send({
            status: "success",
            message: `Filtered users with name: "${searchedName}" successfully`,
            data: filteredUsers,
            numberOfObjects: filteredUsers.length
        })            
    }).catch((error) => {
        response.send({
            status: "failed",
            message: `Filtered users with name: ${searchedName} error: ${error}`
        })            
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
app.post('/insert_address_to_user', (request, response) => {        
    console.log(`tokenkey = ${JSON.stringify(request.headers.tokenkey)}`)    
    const { tokenkey } = request.headers
    const { userId, street, city, state } = request.body        
    console.log(`request.body = ${JSON.stringify(request.body)}`)          
    response.setHeader('Content-Type', 'application/json');
    if (tokenkey != 'abc123456789') {
        response.send({
            status: "failed",
            message: "You sent wrong token's key"
        })    
        return
    }
    insertAddressToUser(Number(userId) == NaN ? 0: Number(userId), { street, city, state }).then(insertedAddress => {
        response.send({
            status: "success",
            message: `Insert new Address to user with Id=${userId} successfully`,
            data: insertedAddress
        })    
        return
    }).catch((error) => {
        response.send({
            status: "failed",
            message: `Insert Address error: ${error}`
        })    
        return
    })      
})
//PUT request to update an existing user
app.put('/update_user', (request, response) => {
    const { tokenkey } = request.headers
    const { userId, name, email } = request.body    
    response.setHeader('Content-Type', 'application/json')
    if (tokenkey != 'abc123456789') {
        response.send({
            status: "failed",
            message: "You sent wrong token's key"
        })    
        return
    }   
    updateAnUser(Number(userId) == NaN ? 0: Number(userId), { name, email }).then(updatedUser => {
        response.send({
            status: "success",
            message: `Update User successfully`,
            data: updatedUser
        }) 
    }).catch((error) => {
        response.send({
            status: "failed",
            message: `Insert User error: ${error}`
        })
    })    
})
//Delete user
app.delete('/delete_user', (request, response) => {                
    const { tokenkey } = request.headers
    const { userId } = request.body            
    response.setHeader('Content-Type', 'application/json');
    if (tokenkey != 'abc123456789') {
        response.send({
            status: "failed",
            message: "You sent wrong token's key"
        })    
        return
    }
    deleteUser(Number(userId) == NaN ? 0: Number(userId)).then(() => {
        response.send({
            status: "success",
            message: `Delete user with userId=${userId} successfully`,            
        })    
        return
    }).catch((error) => {
        response.send({
            status: "failed",
            message: `Delete user error: ${error}`
        })    
        return
    })    
})
module.exports =  {
    app
}

