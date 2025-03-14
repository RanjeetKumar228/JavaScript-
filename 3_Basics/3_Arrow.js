//   Arrow function smjne ke liye hme this ko smjna pdega aur this ko smjne  
//   ke liye thora object ko bhi smjna pdega.

const user = {
    userName : "Ranjeet",
    price : 199,
    welcomeMsg : function (){
    console.log(`${this.userName} , Welcome to website`);
// current context ko access krne ke liye this ka use krte hai

       console.log(this)
    }  
} 

// user.welcomeMsg()
// user.userName = 'Jeet'
// user.welcomeMsg()

console.log(this)    // {} emty object ko reffer krta hai

//Browser ke ander globle object hai window  (Important)

// function jeet (){
//     let user = 'Ranjeet'
//     console.log(this.user)
// }
// jeet()

/*
  Jb humne object ke ander this ka use kiya tha to use ho rha tha pr function ke andr nhi ho sath jb hmne function ke ander this ko print krwaya to kafi kuchh dekhne ko miala
/*

/* sikhne ko kya mila this object ke ander hi kam krta hai. */

/*
  Ab dekhte hai function ko aur kitne trike se likh skte hai , pehla trika to uper dekh lia ab dusra dekhte hai
*/

// isko ek variable mein store krte hai

// const newSecFun = function (){
//     let user = 'Ranjeet'
//     console.log(this.user);
// }
// newSecFun()

// 3rd trika hai jaha function likha usko hta aur => (arrow ka use kro)

// const new3Fun = () => {
//     let user = 'Ranjeet'
//     console.log(this.user);
// }
// new3Fun()

/*     Ab discuss krte hai pure arrow function    */

/*    ******   Syntax   () => { }   ******   */

// const AddTwoNum = (num1,num2) => {
//      return num1+num2;
// }
// console.log((AddTwoNum(4,5)));

/*
  eska dusra trika hai implicit, usme hum {} ko hta ke ()parentheses lgate hai aur important baat usme hme return likhne jrurt nhi pdti.
*/

// const AddTwoNum = (num1,num2) => (num1+num2);

// const AddTwoNum = (num1,num2) => {username : 'K'}; 
// es trah se object ko run nhi kr skte , run krne ke liye parentheses lgana hi pdega

const AddTwoNum = (num1,num2) => ({username : 'R'}); // { username: 'R' }

console.log((AddTwoNum(4,5)));