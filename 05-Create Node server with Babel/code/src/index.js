/**
 * Created by hoangnd on 7/27/17.
 * Node Server with Babel
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
let http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`Request's url : ${request.url}`);
    response.end();
}).listen(port);
console.log(`AA.Server is running on port: ${port}.`);
        




