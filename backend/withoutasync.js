let fs = require("fs")

var message = ""

fs.readFile("file.txt", (error, data) => {
    if (error) {
        console.log(error)

    }
    message = data
    console.log("inside file read");
    
    console.log(message)
    


})

fs.writeFile("cool.txt", message, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("message")
    console.log(message)
    console.log("File write complete!")




})