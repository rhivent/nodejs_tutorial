/**
 * Created by hoangnd on 7/27/17.
 * Events in Node js(ES6)
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
const EventEmitter = require('events');
class Customer extends EventEmitter {
    constructor(name, gender) {
        super();
        this.name = name;
        this.gender = gender;
    }
};
const mrJohn = new Customer("John", "male");
const msMary = new Customer("Mary", "female");
const callbackFunction = (foods, customer) => {
    for (let index in foods) {
        console.log(`${customer.name} call ${foods[index]}`);
    }
};
mrJohn.on('eventCallFoods', callbackFunction);
msMary.on('eventCallFoods', callbackFunction);
console.log("Do something...");
console.log("Do task 1");
mrJohn.emit("eventCallFoods", ["Pizza", "Salad"], mrJohn);
console.log("Do task 2");
console.log("Do something else...");
msMary.emit('eventCallFoods', ["Coke", "Sushi"], msMary);