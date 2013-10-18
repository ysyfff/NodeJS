var http = require('http');
var url = require('url');

function start(){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello nodejs');
        response.end();
    }

    var server = http.createServer(onRequest);

    server.listen(8888);    

    console.log('HTTP-server has started.');
}

exports.start = start;


