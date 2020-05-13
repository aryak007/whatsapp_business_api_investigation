// http://nodejs.org/docs/latest/api/http.html
var http = require('http');

var localIP = "127.0.0.1"; 
var port = 8080;

function sayHello(req, res) {
    
    console.log(req)
    console.log("We've got a request for " + req.url);
    
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('<html><body>' +
    '<h1>Aryak Sengupta Webhook<h1>'+
    '</body></html>');
    res.end();
    
}

/************************/
/*  START THE SERVER    */
/************************/

// Create the HTTP server
var server = http.createServer(sayHello);

// Turn server on - now listening for requests on localIP and port
server.listen(port, localIP);

// print message to terminal that server is running
console.log('Server running at http://'+ localIP +':'+ port +'/');