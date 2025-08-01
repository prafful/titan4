let fs = require("fs")

fs.readFile("file.txt", (err, data)=>{
    if (err) {
        console.log(err)
        
    }
    let myData = data
    console.log(myData.toString());
    
    fs.writeFile("write.txt", myData, (e)=>{
        if (e) {
           console.log(e) 
        }
    })
    console.log("Write success OK");
    
    
})

