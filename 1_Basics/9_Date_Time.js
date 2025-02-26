const myDate = new Date()
// console.log(myDate.toString()); 
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate)

// let createDate = new Date(2024 , 0 , 28)
// let createDate = new Date(2024-1-28)
let createDate = new Date("1-28-2024")
//console.log(createDate.toLocaleString())

let myTimestamp = Date.now()

console.log(myTimestamp);
//console.log(typeof myTimestamp)   // number

console.log(createDate.getTime());   
// hour mein ans aaya hai agr isko second mein convert krna hai to 1000 se divide kr dijiye 

console.log(Math.round((Date.now()/1000)))   // second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// console.log(`${newDate.getFullYear()} Month is ${newDate.getMonth()}`);

newDate.toLocaleString('default',{
   weekday: "long",
})
