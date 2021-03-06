const static = require('node-static');
 
//
// Create a node-static server instance to serve the './dist' folder
//
const file = new static.Server('./dist');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(3030);