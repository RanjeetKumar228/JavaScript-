//     Que => Kis trah data ko memory mien rkha jata hai aur isko access  
//            kese kia ja skta hai ?
//     Ans =>  Data ko memory mien rkha jata hai aur isko access  
//            kese kia ja skta hai uske Basis pr do trike hai 


// ********** Primitive **********

//   7 types : String , Boolean , null , undefined, symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const Temp = null
let useEmail;

const id = Symbol("123")
const idNum = Symbol("123")
//console.log(id === idNum)

const BigInt = 12132135156156165165132132132
//console.log(BigInt)

// ********** Reference (Non primitive) **********

//    1. Array
//    2. Object         ( Object is most importen in java script)
//    3. functions


// Array

const jeet= ["Ranjeet","JK","RK"]
//console.log(jeet)

// Object

const myObj ={
    Name : "Ranjeet",
    age : 21
}
//console.log(myObj)

// Function

const myFunction = function(){
    console.log("Hello JeEt")
}

console.log(typeof idNum)