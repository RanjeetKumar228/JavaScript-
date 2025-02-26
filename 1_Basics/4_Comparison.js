console.log(2>1);
console.log(2==1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2!=1);
//console.log(2=!1);    // Ese nhi likhna

/* Ye sb comparison to simple but problem tb aati hai jb hum koi same data type ki comparison nhi krte */

console.log("2">3)
console.log(typeof("2">3))  // boolean
console.log("02">1)
console.log(typeof("02">1))  // boolean

console.log(null>0);     // false 
console.log(null<0);     // false      
console.log(null==0);    // false 
console.log(null===0);   // false 
console.log(null>=0);    // true
console.log(null<=0);    // true

// console.log(0 > 0);

/* es trah ke comparison se door rhe */

/*
  == , === ye dono operator java script mein null ko number mein convert nhi  krte hai esiliye jb null>=0 kia to true output aaya

  > , < , >= , <= in sb ka jb java script mein  use hota hai to , null ko number mein converts kia jata hai aur , 0 ki treat krte hai null ko.
   
  Same hi jb undefined ke sath comparison krte hai to aata hai 
*/

// console.log(undefined>0);    
// console.log(undefined<0);      
// console.log(undefined==0);
// console.log(undefined>=0);
/* es trah ke comparison se door rhe */

//  ===   (Strict Check)

 console.log("2"===2)  // (Strict Check)  false

 console.log("2"==2)   // value check , so this is true 