/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Database schemas of Realm
*/
const Realm = require('realm')
const USER_SCHEMA = "User"
const ADDRESS_SCHEMA = "Address"
const Promise = require('promise')

const AddressSchema = {
    name: ADDRESS_SCHEMA,    
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        street: 'string',        
        city: 'string',        
        state: 'string?',//optional property        
    }
}

const UserSchema = {
    name: USER_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        name: { type: 'string', indexed: true },
        email: 'string',  
        addresses: { type: 'list', objectType:  ADDRESS_SCHEMA},              
    }
}
const databaseOptions = {
    path: 'RealmInNodeJS.realm',
    schema: [UserSchema, AddressSchema],
    schemaVersion: 0, //optional    
}
//functions for UserSchema
const insertNewUser = newUser => new Promise((resolve, reject) => {        
    Realm.open(databaseOptions).then(realm => {
        //Check if existing user    
        let filteredUsers = realm.objects(USER_SCHEMA)
                                .filtered(`name='${newUser.name.trim()}' AND email='${newUser.email.trim()}'`)
        if (filteredUsers.length > 0) {
            reject("User with the same name and email exists !")   
            return         
        }
        realm.write(() => {
            newUser.id = Math.floor(Date.now())
            realm.create(USER_SCHEMA, newUser)
            resolve(newUser)
        })
    }).catch((error) => reject(error))
})

const findAllUsers = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allUsers = realm.objects(USER_SCHEMA)
        resolve(allUsers)
    }).catch((error) => {
        reject(error)
    })
})
const filterUsersByName = (searchedName) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let filteredUsers = realm.objects(USER_SCHEMA).filtered(`name CONTAINS[c] '${searchedName}'`)
        resolve(filteredUsers)
    }).catch((error) => {
        reject(error)
    })
})
//Update an existing user
const updateAnUser = (userId, updatingUser) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let user = realm.objectForPrimaryKey(USER_SCHEMA, userId)
            if (!user) {
                reject(`Cannot find user with ID=${userId} to update`)   
                return         
            }  
            user.name = updatingUser.name
            user.email = updatingUser.email
            resolve()
        });
    }).catch((error) => reject(error))
})
//functions for AddressSchema
const insertAddressToUser = (userId, addressObject) => new Promise((resolve, reject) => {                
    Realm.open(databaseOptions).then(realm => {        
        const { street, city, state } = addressObject
        let userObject = realm.objectForPrimaryKey(USER_SCHEMA, userId);
        let filteredAddresses = userObject.addresses
                                .filtered(`street='${street.trim()}' AND city='${city.trim()}'`)        
        if (filteredAddresses.length > 0) {
            reject("Address with the street and city exists !")            
        }
        realm.write(() => {
            let newAddress = {
                id: Math.floor(Date.now()),
                street, city, state
            }
            userObject.addresses.push(newAddress)
            resolve()
        })
    }).catch((error) => reject(error))
})
const deleteUser = (userId) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let userObject = realm.objectForPrimaryKey(USER_SCHEMA, userId);                
        if (!userObject) {
            reject(`Cannot find user with ID=${userId} to delete`)            
        }      
        realm.write(() => {
            realm.delete(userObject.addresses);
            realm.delete(userObject);
            resolve();
        });                  
    }).catch((error) => reject(error));;
});

const deleteAllUsers = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allUsers = realm.objects(USER_SCHEMA);
            for (var index in allUsers) {
                let eachUser = allUsers[index]
                realm.delete(eachUser.addresses);
            }
            realm.delete(allUsers)
            resolve()
        });
    }).catch((error) => reject(error))
})

//For testing purpose 
/*
deleteAllUsers().then(()=> {
    console.log(`All users has been deleted`)
}).catch((error) => {
    console.log(`Cannot delete all users. Error: ${error}`)
})
*/
findAllUsers().then((allUsers)=> {
    console.log(`allUsers = ${JSON.stringify(allUsers)}`)
}).catch((error) => {
    console.log(`Cannot get all users. Error: ${error}`)
})

module.exports =  {    
    insertNewUser,  
    filterUsersByName, 
    updateAnUser,
    insertAddressToUser,
    deleteUser
}