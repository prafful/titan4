var http = require("http")
var url = require("url")



var myserver = http.createServer(function(request, response){
    //console.log(request)
    if (request.url==="/favicon.ico") {
        response.writeHead(204)
        response.end()
        return
        
    }
    console.log(request.url);
    
    let requestP =  url.parse(request.url, true)

    console.log(requestP)
    let myParam = requestP.query
    console.log(myParam)
    let topicV = myParam.topic
    let foodV = myParam.food
    response.write(`I am learning ${topicV}. I will make ${foodV}`)
    
    response.write("\nHello from the server \n")
    response.write("Hello from ghost function")
    response.end()
})

myserver.listen(1000, ()=>{
    console.log("Listening on port")
    
})

