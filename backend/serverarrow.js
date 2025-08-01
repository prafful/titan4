var http = require("http")



var myserver = http.createServer((request, response)=>{
    response.writeHead(200,{'content-type':'text/html'} )
    response.write("Hello from the server \n")
    response.write("<h1>Hello from arrow function</h1>")
    response.end()
})

myserver.listen(2000)

