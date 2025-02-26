const myArray = [0 , 1 , 2 , 3 , 4 , 5]   

/* 
Array number aur string dono ho skta , yani ki alg-alg bhi ho skta hai sath mix bhi ho skta hai 
*/

const nameArray = ["Ranjeet" , "Jeet" , "RK"]

// const anotherMyArray = new Array(6 , 7 , 8 , 9 , 10)

/*  ye bhi ek trika hai Array bnane ka */

// console.log(anotherMyArray);

// console.log(myArray[1]);
// console.log(nameArray[2]);


// Array method

myArray.push(6)

/* 
last mein add krne ke liye isko krenge to arrgument pass krna pdega, jb ki pop mein arrgument pass nhi krte vo autometic last element ko delete kr dete hai
*/

myArray.push(7)    // same last add krne ke liye

myArray.pop()      // last element ko htane ke liye

myArray.unshift(9)  // unshift starting mein add krne ke liye use hota hai 

myArray.shift()     // strating element ko htane ke liye use hota hai

//console.log(myArray);

const newArray = myArray.join()
// jese hi hmne .join function ka use kia to output array ki format se ht gya .

//console.log(newArray);
//console.log(typeof newArray);  // string
//console.log(typeof typeof newArray);  // string

//console.log((typeof newArray) == (typeof typeof newArray));  // true
//console.log((typeof newArray) === (typeof typeof newArray) ); // true


// Important 

// slice and splice
const myN1 = [0,1,2,3,4]

console.log("A ",myN1)
console.log("B ",myN1)
console.log(myN1.slice(1,3))
const myN2 = myN1.splice(1,3)
console.log("C ",myN1)
console.log(myN2)




