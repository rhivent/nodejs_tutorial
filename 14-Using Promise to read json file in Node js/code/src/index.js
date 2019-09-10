/**
 * Created by hoangnd on 8/20/17.
 * Using Promise to read json File in Node.js
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
console.log("Using Promise to read json File in Node.js");
let fileManager = require('./fileManager');
fileManager.buyAnIphone("iphone 7 plus").then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(`${error}`);
});
fileManager.readJsonFile('./src/jsonfile.json').then((jsonObject) => {
    console.log(`email list = ${jsonObject["emails"]}`);
});




