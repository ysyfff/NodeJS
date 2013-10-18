var http = require('http');

function start(){
    function onRequest(request, response){
        console.log('Request received.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello nodejs');
        response.end();
    }

    var server = http.createServer(onRequest);

    server.listen(8888);    

    console.log('HTTP-server has started.');
}

exports.start = start;


