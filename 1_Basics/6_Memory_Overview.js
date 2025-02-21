//   *****  Tow types of memory  *****

/*

1. Stack (Primitive mein jitne bhi data type hai uske liye stack memory use hoga)

2. Heap (Non-Primitive mein jitne bhi data type hai uske liye Heap memory use hoga ) 

*/

let myName = "JeEt"

let anotherName = myName

anotherName = "Ranjeet"

console.log(myName)
console.log(anotherName)


let user1={
    email : "jk@gmail.com",
    upi : "jk@oksbi",
    payerName : " ",

}
// console.log(user1)

user2 = user1;
user1.email = "ranjeet@gmail.com"

console.log(user1)
console.log(user2)
