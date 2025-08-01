let fs = require("fs")

let message = "Hello from node!"

fs.writeFile("cool.txt", message, (error)=>{
    if (error) {
        console.log(error)
     }
     console.log("Write success");
     
})