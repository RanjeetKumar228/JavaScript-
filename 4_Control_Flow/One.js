//Hmara basic compelet ho gya hai

//Ab hum dekhte hai ki jese hmne bahut sara code likha aur hum chahte hai ki hmara sirf vhi code execute ho jo hum chahte hai.

//Yani ki conditional base ho , esi ko control flow kehte hai

//one by one dekhte hai sare

// 1. if

// if (condition){        // Syntax

// }

// const userLoggedIn = true
// if(2 === "2"){
//     console.log('Yes');
    
// }

// < , > , == , != , <= , >= , ===  

// const temperature = 20
// if(2 != 3){
//     console.log("Yes");  
// }
// else{
//     console.log('No')
// }


const score = 500
if(score>400){
    let power = 'Flay'
    //console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);
//Jb var ka use kia to acces ho rha tha isiliye var ka use nhi kia jata

//Hum ek line mein bhi condition code likh skte hai (Implicit)

// if(2<3) console.log(true) // Es trah se code bilkul nhi likhenge ,readability bahut km hai

// multiple condition 

// const money = 2000
// if(money>500){
//     console.log("Gumne jaunga");
// }else if(money>700){
//     console.log("Shoping");
// }else if (money>300){
//     console.log("Jma krunga");
// }else{
//     console.log("Bhai balance nhi hai");
   
// }

// Real life example lete , agr hum koi online shoping krte hai

// const userLogged = true
// const debitcard = true
// if(userLogged && debitcard && 2==2){
//     console.log('Allow');    
// }

const userLogged = true
const debitcard = true
const userLoggedByGoogle = false
if(userLogged || userLoggedByGoogle || guset){
   console.log('Allow');    
}
