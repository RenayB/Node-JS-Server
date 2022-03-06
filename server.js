
/*
    Create a server that responds
    to requests coming from a specfic port.

*/
var http = require ('http');

function onRequest(request , response){

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Renay first project ');
	response.end();
}

http.createServer(onRequest).listen(8000); //listen port 8000