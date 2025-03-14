/*  Immediately Invoked Function Expression */


// Jese ki koi application hai aur hum chahte hai ki open hote hi vo DB ke connect ho jaye, to uske liye hum IIFE ka use krte hai

// Kai bar hota Global scope ke ander kuchh variable declear hoti hai aur sath function ke andr bhi , to hum nhi chahenge ki vo global scope se hmari function ki value polute ho ,kuki hme ye previous example mein dekha tha ki chhoti sis bade bhai se ice-cream le skti hai.

/*
   2 main reason hai

1. Hum nhi chahenge global scope se koi polution ho
2. Immediatelu execute ho jaye

*/

// function jeet () {
//     console.log(`DB connect`); 
// }
// jeet()

// ye smple hai , ab IIFE se dekhte hai

// (function jeet () {
//     console.log(`DB connect`); 
// })()

/*   
    iskko smte hai thora  

jo first () hai usme hum function likhenge 

jo second () hai usme hum execute krwayenge

*/ 


/*  
    Most important baat 

    IIFE Global scope polution se problem hoti hai koi baar ,to jo us global scope ke variable hai ya uske declaretion hai uske polution ko htane ke liye use hota hia.

*/

// Ab dekhte hai ki isko hum arrow fuction ki trah likh sktae hai ki nhi

// ( () => {
//     console.log(`DB connect`);
    
// })()

// Ab dekhte hai do ya usse jyda IIFE ya function ko chla kr 

(function jeet () {                           // Named IIFE
    console.log(`DB connect`); 
})();

( (name) => {                                 // simple IIFE
    console.log(`DB connect ${name}`);
    
})('Ranjeet')

/*
   Dhyan rkhna ki Jb do ya use jyda IIFE function chlate hai to jese ji ek iife khtm hota hai to semi-colon ; lgana jruri hota hai
*/