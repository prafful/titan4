//import express
let express = require("express")
//import mysql
let mysql = require("mysql")
let cors = require("cors")

//create express app
let app = express()
app.use(express.json())
app.use(cors())


//create a connection object
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"n3u3da!",
    database:"tradingapp"
})

//connect to mysql
connection.connect((err)=>{
    if (err) {
        console.log("MySQL connection failed");
        console.log(err);
    }
    console.log("MySQL connection success:" + connection.threadId)

})


let friends = [
    {
        "id":8,
        "name":"oki",
    },
    {
        "id":2,
        "name":"obbo",
    },
    {
        "id":11,
        "name":"mic",
    },
    {
        "id":88,
        "name":"cho cho"
    },
    
]

//first end point
app.get("/",(request, response)=>{
    console.log("Request received for GET")
    console.log(request.url)
    response.send("Hello from Express API! GET!!!!")
    
})

//first end point
app.post("/",(request, response)=>{
    console.log("Request received for POSt")
    console.log(request.url)
    response.send("Hello from Express API POST!")
    
})

//first end point
app.delete("/delete",(request, response)=>{
    console.log("Request received for DEL")
    console.log(request.url)
    response.send("Hello from Express API DEL!")
    
})

//get list of friends
app.get("/friends/all", (request, response)=>{
    console.log("Request received to get all friends")
    response.json(friends)
    
})

//get friends with id
app.get("/friends/:pid", (request, response)=>{
    console.log(request.params)
    console.log(request.params.pid)
    let friendId = request.params.pid //search for friend whose id is pid
    let foundOne = friends.filter((f)=>{
       return f.id==friendId
       //"22"==22 return true
       //"22"===22 return false

        
    })
    console.log(foundOne)
    response.json(foundOne)
})

app.post("/friends/add/new", (request, response)=>{
    console.log("Receiving request body from client");
    console.log(request.body)
    friends.push(request.body)
    console.log("Inserted new friend in collection")
    response.json({
        "status":"success",
        "id":request.body.id
    })
    
    
})
//connect to database and get all sectors
app.get("/sectors/all",(request, response)=>{
    console.log("Execute query to get all sectors")
    //run query
     //setup query
     const myQuery = "select * from sectors"
     connection.query(myQuery, (err, results, fields)=>{
         if (err) {
             console.log("Query failed")
             console.log(err)
            }
           console.log(results)
           response.json(results)
    
})

})


app.listen(8081,'0.0.0.0', ()=>{
    console.log("Listening on port 8888!!!!!")
    

})









