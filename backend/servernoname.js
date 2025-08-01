var http = require("http")

var fs =require("fs")

var myserver = http.createServer(function(request, response){
    response.write("Hello from the server \n")
    response.write("Hello from ghost function")
    response.end()
})


fs.writeFile("one.txt", "Hello1", (e)=>{
    if (e) {
        console.log(e);
        
    }
    console.log("write success");
})

myserver.listen(1000)

