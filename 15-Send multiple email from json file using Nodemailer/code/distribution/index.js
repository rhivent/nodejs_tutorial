'use strict';

/**
 * Created by hoangnd on 7/27/17.
 * Node Server with Babel
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
var http = require('http');
var port = 3001;
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('Request\'s url : ' + request.url);
    response.end();
}).listen(port);
console.log('AA.Server is running on port: ' + port + '.');