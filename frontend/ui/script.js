console.log("from external JS")

function doubleCheese(){
    console.log("double cheese")
}


async function pageLoaded(){
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

let response = await fetch("http://localhost:8888/sectors/all")
console.log(response)

if (!response.ok) {
    console.log("Unable to call the endpoint!");
    
}

let data = await response.json()

 console.log(data)
 let sectorListRef = document.getElementById("sectorlist")
 //data is array of json objects
 data.forEach((d)=>{
    console.log(d);
    let newLi = document.createElement("li")
    newLi.innerHTML = d.sector_name
    sectorListRef.appendChild(newLi) 
 })

  //display the same data in table format
  let tbodyRef = document.getElementById("sectortable")
  data.forEach((d)=>{
    let newTr = document.createElement("tr")
    let newTd1 = document.createElement("td")
    newTd1.innerHTML = d.sector_id
    let newTd2 = document.createElement("td")
    newTd2.innerHTML = d.sector_name
    newTr.appendChild(newTd1)
    newTr.appendChild(newTd2)
    tbodyRef.appendChild(newTr)
  })  
    

  /*
 <div class="col">
    <div class="card h-100">
    <img src="https://picsum.photos/200" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    </div>
</div>
  */
let cardGroupRef = document.getElementById("cardgroup")
data.forEach((d)=>{
    //parent div inside cardgroup
    let newDiv1 = document.createElement("div")
    newDiv1.className = "col"
    //child div inside div with class of col i.e. newDiv1
    let newDiv2 = document.createElement("div")
    newDiv2.className="card h-100"
    //append newDiv2 as a child inside newDiv1
    newDiv1.appendChild(newDiv2)
    //create img element
    let newImg = document.createElement("img")
    newImg.src = "https://picsum.photos/200"
    newImg.className = "card-img-top"
    newImg.alt = "..."
    //append newImg inside newDiv2
    newDiv2.appendChild(newImg)

    //create new div with class of card-body
    let newDiv3 = document.createElement("div")
    newDiv3.className = "card-body"
    //append newDiv3 inside newDiv2
    newDiv2.appendChild(newDiv3)

    //create h5 as a child of newDiv3
    let newH5 = document.createElement("h5")
    newH5.className ="card-title"
    newH5.innerHTML = d.sector_id
    newDiv3.appendChild(newH5)

    //cerate p with class of card-text
    let newP = document.createElement("p")
    newP.className = "card-text"
    newP.innerHTML = d.sector_name
    newDiv3.appendChild(newP)
    console.log(newDiv1)

    //append newDiv1 to cardGroupRef
    cardGroupRef.appendChild(newDiv1)




})
 
 
}