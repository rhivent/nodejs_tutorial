/**
 * Created by hoangnd on 7/27/17.
 * How to use debugger in Node.js with ES6
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */

console.log('hello');
debugger;
var arithmeticMean = (numbers) => {
    var total = 0
    debugger;
    for (let number in numbers) {
        total = total + parseFloat(number);
        console.log(`total is : ${total}, number is : ${number}`)
    }
    console.log(`Result is : ${total / numbers.length} `)
}
arithmeticMean([1,2,3,4,5]);





        




