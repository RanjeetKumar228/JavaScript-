/*
  Object ko declear krne ke do trike hai :-
  
  1. Constructor   // jb kbhi iska use krte hai to object Singleton bn jata hia
  2. Litteral      // Jb iska use krte hai kbhi bhi Singleton nhi bnta 

  Dono trike se object create kr skte hai , bs frk singlrton pdta hia .performance pr koi frk nhi pdta.
*/

const Sym = Symbol("Key1") 

const myObject = {
    name: "Ranjeet",
    age: 20,
    email: "ranjeet@google.com",
    location: "Bihar",
    isLoggedIn : "false",
    isLoggedDays: ["Tuesday","Wednesday"],

    [Sym]:"mykey",

    "full name" : "Jeet",   // agr es trah se likha ho to , eska ek hi trika access krne ka vp bhi [] isi se , aur koi trika nhi hai
} 

// Object ko access krne ke do trike hai  1 dot' . ' ke trike se   2  [] se 

console.log(myObject.email);   
console.log(myObject["full name"]);   // isko [] esse hi access kia ja skta hai 
console.log(myObject["email"]);
console.log(myObject[Sym]);


// value change krne ke liye 

myObject.age = 21
myObject.age = 22
console.log(myObject);

Object.freeze(myObject)

/* 
  Agr hum chahte hai ki Object ki value change na ho to .freeze ka use krenge 
  
*/

myObject.greetingTwo = function () {
    console.log(`Hello my dear `);
    
}
console.log(myObject.greetingTwo());

myObject.greeting = function () {
    console.log(`Hello my dear ${this.name}`);
    
}
console.log(myObject.greeting());
