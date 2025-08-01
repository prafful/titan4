function add(n1, n2) {
    return n1 + n2
    
}

let result = add(5, 3); // This will return 8
console.log("Result of addition: ", result)

const add1=(n1, n2)=> n1 + n2


let result1 = add1(7, 4); // This will return 8
console.log("Result of addition using arrow function: ", result1)


const welcome=(name="Alice")=>{
 console.log(`Welcome, ${name}`);
 
}

welcome("OMG")