console.log("from external JS")

function doubleCheese(){
    console.log("double cheese")
}


function pageLoaded(){
 console.log("Page loaded")
   //create only one li element on the fly 
 let ulRef = document.getElementById("ulid")
 console.log(ulRef)
 let newLie = document.createElement("li")
 console.log(newLie)
 newLie.innerHTML = "GOD Particle"
 ulRef.appendChild(newLie)

let cities = ["Pune", "Chennai", "Kualalumpur", "Tokyo"]


 //multiple li elements on the fly
let cityOl = document.getElementById("citylist")

cities.forEach((c)=>{
    let newCityLi = document.createElement("li")
    newCityLi.innerHTML = c
    cityOl.appendChild(newCityLi)
})

 
 
}