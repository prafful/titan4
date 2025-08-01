//import mysql
let mysql = require("mysql")

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

    //setup query
    const myQuery = "select * from sectors"
    connection.query(myQuery, (err, results, fields)=>{
        if (err) {
            console.log("Query failed")
            console.log(err)
           }
          console.log(results)
          let friends =["obb", "oki", "mie", "lie"]
          friends.forEach((m)=>{
            console.log(m)  
          })
          //render the results in the console


          //end the connection to release resources
          connection.end((err)=>{
            if (err) {
                console.log("Query failed")
                console.log(err)
               }
               console.log("Connection closed")
               
          })
           
    })
    
})