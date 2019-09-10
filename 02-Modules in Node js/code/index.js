/**
 * Created by hoangnd on 7/27/17.
 * Each file is 1 module
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
const rect = require('./Shape/rectangle');
console.log(`The area of the rectangle(width = 10, height = 20) is ${rect.area(10, 20)}`);
console.log(`The circumference of the rectangle(width = 10, height = 20) is ${rect.circumference(10, 20)}`);
console.log(`current time is: ${rect.currentDateTime}`);
console.log(`directory name: ${rect.directoryName}`);
// console.log(`directory name: ${rect.__dirname}`);//cannot call like this !
console.log(`file name: ${rect.fileName}`);
let aCircle = require('./Shape/circle');
console.log(`aCircle's area: ${aCircle.area(5)}`);



        




