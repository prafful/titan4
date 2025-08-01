
//get current time


//get current day


//get current month



const getCurrentDate=()=>{
    return new Date().toLocaleDateString()
}


//export all above functions
module.exports = { 
    getCurrentDate
}