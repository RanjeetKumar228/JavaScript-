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

console.log(Math);

console.log(Math.abs(-4));      // abs hume absolute value deta hai
console.log(Math.abs(4));       
/*
 esa nhi hai ye negative ko positive mein krta hai positive ko negative mein krta hai

*/

console.log(Math.round(3.)); 
/*
 agr hme round figure value chahiye to .round ka use krenge , pr chate hai jese 4.9 hai to 4 hi ho ya 5 ho jaye to uske lie ceil or floor ka use krenge

*/
console.log(Math.SQRT_2);
