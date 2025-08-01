let fs = require("fs").promises

var message = ""


async function readFileInAsyncWay(){

    message = await fs.readFile("file.txt")
    await fs.writeFile("cool.txt", message)


}

readFileInAsyncWay()