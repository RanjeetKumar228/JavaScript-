// Function ka basic meaning "Collection of code" yani ki jo bhi aapne 10-12 line ka code likha hai usko ek package mein bnd kr dia hai.

// Hota hai kya jb aapko multiple time print krwana hota hai to hum ek hi cheej ko bar bar kikhte hai jisse line of code bdta hai aur code readablity khrab hoti hai 

// Isiliye hum function likhte hai jisse hmara line of code km ho aur code readability achha ho.

// Ab hum dekhtne hai 

// console.log("R");
// console.log("A");
// console.log("N");
// console.log("J");
// console.log("E");
// console.log("E");
// console.log("T");

// Agr isi ko 10 times print krna ho to hme kitna sara code likhna pdega.

// Ab hum function ka use krte hai 

/*   Function Syntax */

//   function function_name (){
//         statement;
//      }

function sayMyname () {
console.log("R");
console.log("A");
console.log("N");
console.log("J");
console.log("E");
console.log("E");
console.log("T");
}

// sayMyname      // Refrence
// sayMyname()   // Execute


// Ab dekhte hai 2 num ko add krke 

function addTwoNum (num1,num2) {
   console.log( num1+num2);
   
}
// addTwoNum(3,6)   // 9
// addTwoNum(3,"4")    // 34
// addTwoNum(3,null)     // 3


function addTwoNum (num1,num2) {
    // let result = num1+num2;
    // return result;
    return num1+num2;
    
 }
const result = addTwoNum(3,6)   
// console.log("Result " , result);

/*
 yaha pe result mein undefined likha aa rha hai kuki esa nhi ki jo console print kr rha hai vahi return krega , return apne aap mei hi ek concept hai

*/

function userLoggedIn(username = "Jeet") {
    if (!username) {
        console.log("Please enter user name");
        return;
    }
    return `${username} just logged in `
}

// console.log(userLoggedIn())  

/* undefined just logged in , undifined aata hai jb koi argument pass na ho */

//console.log(userLoggedIn("Ranjeet"))  // Ranjeet just logged in 

// console.log(userLoggedIn(""))   // just logged in 