/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Programming tutorial channel: Nodejs, React Native, React, Swift, Python
*/

/*
npm install firebase-admin
npm install babel-cli
npm install babel-preset-env


var config = {
    apiKey: "AIzaSyCmLMZovOSpA6q08SGIhx3YMRYUofkfdXc",
    authDomain: "nodejstutorials-60a7c.firebaseapp.com",
    databaseURL: "https://nodejstutorials-60a7c.firebaseio.com",
    projectId: "nodejstutorials-60a7c",
    storageBucket: "nodejstutorials-60a7c.appspot.com",
    messagingSenderId: "846558452680"
  };
firebase.initializeApp(config);
*/
import admin from "firebase-admin";
let serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejstutorials-60a7c.firebaseio.com"
});
var db = admin.database();
var ref = db.ref("/nodejstutorials");
ref.once("value", (snapshot) => {
  console.log(`snapshot = ${JSON.stringify(snapshot.val())}`);
});
let usersRef = ref.child("users");
//set = override
usersRef.set({
    hoangnd: {
        full_name: "Nguyễn Đức Hoàng",
        date_of_birth: "October 25, 1979"
    },
    alanturing: {
        full_name: "Alan Turing",
        date_of_birth: "June 23, 1912"
    }
});
//update
const hoangRef = usersRef.child("hoangnd");
hoangRef.update({
    field_of_study: "Machine Learning"
});

//update multiple 
usersRef.update({
    "hoangnd/field_of_study": "Machine Learning",
    "alanturing/field_of_study": "Computer Science",    
});
//async / await
const updateOneUser = async (userName, fieldOfStudy) => {
    const userRef = await usersRef.child(userName);
    const error = await userRef.update({
        field_of_study: fieldOfStudy
    }); 
    console.log(`error = ${error}`);
}
updateOneUser("hoangnd", "Artificial Intelligence");
//Push = insert
const postsRef = ref.child("posts");
let newPost = postsRef.push({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
});
console.log(`newPost = ${newPost}`);
