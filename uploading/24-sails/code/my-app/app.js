/**
npm install -g sails
sails lift
sails generate api products
sails generate api categories

GET /categories
GET /categories/:id
POST /categories
PUT /categories/:id
DELETE /categories/:id
I would recommend to use Postman to test the API

Insert
http://localhost:1337/categories/Create?categoryname=Beverages&description=Soft%20drinks,%20coffees,%20teas,%20beers,%20and%20ales
http://localhost:1337/categories
Install sails-mongo:
npm install sails-mongo
Open datastore.js
Open Categories.js
Install mongodb and Robo3T
brew install mongodb
mongo --port 27017 --host localhost
Config DB in datastore.js
npm install node-query

Search bootstrap cdn, paste to layout.ejs
https://getbootstrap.com/docs/4.1/getting-started/introduction/

Connect DB:
mongo mongodb://localhost:27017/nodejstutorial

db.products.drop();
db.products.find();

db.products.insert({
productName: "Chef Anton's Cajun Seasoning", 
imageURL:"https://www.bluefrogtoys.co.uk/images/stories/virtuemart/product/minion-10-inch-soft-toys.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "48 - 6 oz jars", 
price: 22});

db.products.insert({
productName: "Thüringer Rostbratwurst", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "50 bags x 30 sausgs", 
price: 123.79});

db.products.insert({
productName: "Nord-Ost Matjeshering", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "10 - 200 g glasses", 
price: 25.89});

db.products.insert({
productName: "Gorgonzola Telino", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "12 - 100 g pkgs", 
price: 12.5});

db.products.insert({
productName: "Mascarpone Fabioli", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 200 g pkgs", 
price: 32});

db.products.insert({
productName: "Geitost", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "500 g", 
price: 2.5});

db.products.insert({
productName: "Sasquatch Ale", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 12 oz bottles", 
price: 14});

db.products.insert({
productName: "Steeleye Stout", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 12 oz bottles", 
price: 18});

db.products.insert({
productName: "Inlagd Sill", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 250 g jars", 
price: 19});

db.products.insert({
productName: "Gravad lax", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "12 - 500 g pkgs", 
price: 26});

db.products.insert({
productName: "Côte de Blaye", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "12 - 75 cl bottles", 
price: 263.5});

db.products.insert({
productName: "Chartreuse verte", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "750 cc per bottle", 
price: 18});

db.products.insert({
productName: "Boston Crab Meat", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 4 oz tins", 
price: 18.4});

db.products.insert({
productName: "Jack's New England Clam Chowder", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "12 - 12 oz cans", 
price: 19});

db.products.insert({
productName: "Singaporean Hokkien Fried Mee", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "32 - 1 kg pkgs", 
price: 20});

db.products.insert({
productName: "Ipoh Coffee", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "16 - 500 g tins", 
price: 19.45});

db.products.insert({
productName: "Chartreuse verte", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 50 g pkgs", 
price: 9.5});

db.products.insert({
productName: "Boston Crab Meat", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "12 - 100 g bars", 
price: 12});

db.products.insert({
productName: "Jack's New England Clam Chowder", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "50 - 300 g pkgs", 
price: 9.5});

db.products.insert({
productName: "Singaporean Hokkien Fried Mee", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "16 - 2 kg boxes", 
price: 12.75});

db.products.insert({
productName: "Ipoh Coffee ", 
imageURL:"https://img00.deviantart.net/258f/i/2011/114/a/a/magic_mushroom_by_tul_152-d3b8qw7.jpg",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "48 piece", 
price: 20});

db.products.insert({
productName: "Gula Malacca", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 boxes x 2 pies", 
price: 32.8});

db.products.insert({
productName: "Røgede sild", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 250 g pkgs", 
price: 7.45);

db.products.insert({
productName: "Spegesild", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 - 250 g pkgs", 
price: 24});

db.products.insert({
productName: "Zaanse koeken", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "24 pieces", 
price: 38});

db.products.insert({
productName: "Chocolade", 
imageURL:"https://s7d2.scene7.com/is/image/academy/20024690?wid=500&hei=500",
categoryID: "5b8d08696c12c55f1c8302a3",
unit: "5 kg pkg", 
price: 19.5});

db.products.count();
*/



// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
} catch (err) {
  console.error('Encountered an error when attempting to require(\'sails\'):');
  console.error(err.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error('locally (`./node_modules/sails`).  To do that, just make sure you\'re');
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error('(It even uses your app directory\'s local Sails install, if possible.)');
  return;
}//-•


// Start server
sails.lift(rc('sails'));
