var http = require('http');

server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('{"message": "Hello world"}');
    res.end();
}).listen('8000');

console.log('Server running on port 8000');