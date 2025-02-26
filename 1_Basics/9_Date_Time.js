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
console.log(createDate.getTime());

