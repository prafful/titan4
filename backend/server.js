var http = require("http")

function myCallBackFunction(request, response){

    response.write("Hello from the server again")
    response.end()
}

var myserver = http.createServer(myCallBackFunction)

myserver.listen(1000)