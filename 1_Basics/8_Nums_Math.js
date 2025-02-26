const score = 100

// console.log(score)
// console.log(typeof score)

const myNumber = new Number(1000.2515)

// console.log(myNumber.toFixed(2));       // toFixed() decimal ke baad set krta hai 
//console.log(myNumber.toPrecision(3));   // toPrecision sets total significant digits


const myNumber2 = 1000000
// console.log(myNumber2.toLocaleString('en-IN'));


// *******************************************************************************

// ***************   Math  ********************

//console.log(Math);

//console.log(Math.abs(-4));      // abs hume absolute value deta hai
//console.log(Math.abs(4));       
/*
 esa nhi hai ye negative ko positive mein krta hai positive ko negative mein krta hai

*/

//console.log(Math.round(3.8)); 
/*
 agr hme round figure value chahiye to .round ka use krenge , pr chate hai jese 4.9 hai to 4 hi ho ya 5 ho jaye to uske lie ceil or floor ka use krenge

*/

//console.log(Math.ceil(3.2));     // 3
// ceil ka use krne se 3.2 hai to 3 hi dega mtlb ki uper ki value hi dega 

//console.log(Math.floor(3.9));   // 4
// ceil ka use krne se 3.2 hai to 4 hi dega mtlb ki niche ki value hi dega 

//console.log(Math.sqrt(154685));              // Squre root nikalne ke liye
//console.log(Math.sqrt(154685).toFixed(2));

//console.log(Math.min(4, 5 , 6 , 3 ,7));  // minimum value
//console.log(Math.max(4, 5 , 6 , 3 ,7));   // maximum value

//console.log(Math.random());     // random hme 0 to 1 ke bich ki value deti hai 

//console.log((Math.random()*10)+1);  // + 1 kre se kbhi value 0 nhi aayegi

//console.log(Math.round((Math.random()*10)+1));  
// round meine isiliye use kia taki round figure vaue mile 

// ***** Important formula *****

// jb kbhi bhi hme fix range ke andrer value chahiye to formula yaad rkhna ye evala

const min = 20
const max = 30

console.log(Math.round(Math.random() *(max - min + 1))+min)

