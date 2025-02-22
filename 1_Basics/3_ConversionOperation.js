let score = "JeEt"

//console.log(typeof score);
//console.log(typeof (score));  // As a method

let valueInNumber = Number (score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);          // NaN => Not A Number 


//             **** NOTE ****  
          
//      "33"  => 33
//      "465df" => Nan
//      true = 1;  false = 0;


let isLoggedin = "JeEt"
let booleanNumber = Boolean(isLoggedin)
//console.log(booleanNumber);


//             **** NOTE ****  
          
//       1 => true;
//       0 => false;
//       "" => false
//       "JeEt" => true


let sum = 99 
let stringNumber = String(sum)
//console.log(stringNumber);
//console.log(typeof stringNumber);

// ********************  OPERATIONS   ***********************

let value = 228
//let negValue = -value
//console.log(negValue);

//console.log(3+3);
//console.log(3-3);
//console.log(3*3);
//console.log(3/3);
//console.log(3%3);

let Num1 = 8
let Num2 = 10
let Sum = Num1 + Num2
//console.log(Sum);

let Str1 = "Hello"
let Str2 = " JeEt"
let Str3 = Str1 + Str2
//console.log(Str3);

const newvalue = ("R" + 2)
console.log(newvalue)             // R2
console.log(typeof(newvalue))     // String

const newvalue2 = (1 + "R")
console.log(newvalue2);            // 1R
console.log(typeof(newvalue2));    // string

const newvalue3 = ("R" + 1 + "K")   
console.log(newvalue3);             // R1K
console.log(typeof(newvalue3));     // string
     
const newvalue4 = ("R" + 2 + 3)
console.log(newvalue4);              // R23
console.log(typeof(newvalue4));      // string

const newvalue5 = (1 + 2 + "R")
console.log(newvalue5);              // 3R
console.log(typeof(newvalue5));      // string
      

/*
NOTE ==> Agr first String hai to sare string mein Add hoga , agr last mein
string  hai to pehle sare add ho jayenge phir string hoga 
*/


// console.log(3 + 4 - 2 * 7 / 3); 

/*

 Es trah ke complicated trike se na likhe , isko parentheses mein likhiye kuchh es kdr

 console.log( (3 + 4) - 2 * 7 / 3);

*/ 

//console.log(+true);
//console.log(+"");

let gameCounter = 100
gameCounter++
//console.log(gameCounter);    // pehle print hoga fir add hoga 
++gameCounter
//console.log(gameCounter);    // pehle add hoga fir print hoga