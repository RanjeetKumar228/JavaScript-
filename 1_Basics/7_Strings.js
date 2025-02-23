// console.log("Ranjeet" + " Kumar")

const name = "Ranjeet"
const rollNo = 21

// console.log(name + rollNo + "value") 

/*
Old tarika hai likhne ka , ab hum new tarike se likhege.Backticks ka use krenge, yaha aata hai String Inter position, modern traika hia likhne ka.
*/

// console.log(`My name is ${name} and my roll number is ${rollNo}`)

const value = new String('Jeet-JK')
// console.log(value)

//console.log(value[0])

//console.log(value.__proto__)

//console.log(value.length)

/*
agr value ki length pta krna ho to yahi ki usme kitne char ya digit hai to     
.length use kro
*/

//console.log(value.toUpperCase()) 

/*
agr value ko uper case mein likhan hai to .toUpperCase() use kro
*/

//console.log(value.toLowerCase()) 

/*
agr value ko lower case mein likhan hai to .toLowerCase() use kro
/*

//console.log(value.charAt(4))

/*
agr value mein aap kis number pr kon sa char hai pta krna chate hai to .charAt() ka use kro
*/

//console.log(value.indexOf('e'))

/*
agr value mein aap kon sa char kis number pr hai pta krna chate hai to .indexOf('') ka use kro
*/


// Ab use krte hai substring 

const newString = value.substring(0,7)
// console.log(newString)

/*
   Agr app kisi value ke bich ka part ya sirf vahi se shuru ho jaha se aap chahte ho ya pichhe se likhna shuru ho to uske liye aap .substring ka use kro

   ***** Dhyan rkhna jo aap digit daloge to usse ek km hi pic krke print krega *****
*/


// Ab slice ka use krte hai

/*
  slice ka mtlb tukda hota hai vese hi agr koi string hai ya array hai usko aap break krke likhna chate hai to .slice ka use kro,  niche hum dono trike se krke dekhenge array aur string dono se .
*/

// const newValue = ["Ranjeet","Jeet","Superman","Chacha","IronMan","Mama","Jk"]
newValue = "Ranjeet"
// console.log(newValue.slice(3))
// console.log(newValue.slice(3,6))
// console.log(newValue.slice(-3))
// console.log(newValue.slice(0,-4))
// console.log(newValue.slice(-4,0))  // ye empty hoga kuki hmesa ye start to end hoga yaad rkhna

 // console.log(newValue.slice(0,-4) == newValue.slice(-4,0))      // false
 // console.log(newValue.slice(0,-4) === newValue.slice(-4,0))     // false


// Ab use krte hai ** trim() ** ka 

const newString1 = "     Ranjeet "
// console.log(newString1)
// console.log(newString1.trim())
 console.log(newString1.trimStart())
 console.log(newString1.trimStart().length)
 console.log(newString1.trimLeft())
 console.log(newString1.trimLeft().length)
 console.log(newString1.trimStart() == newString1.trimLeft());
 console.log(newString1.trimStart() === newString1.trimLeft());
 
console.log(newString1.trimEnd())
console.log(newString1.trimEnd())
console.log(newString1.trimEnd().length)
console.log(newString1.trimEnd() == newString1.trimRight());
console.log(newString1.trimEnd() === newString1.trimRight());

/*
  trim() ka use extra space ko door krne ke liye krte hai , example ke liye agr user se  
  input mein Email-id lete hai to usme user extra space de deta hai to us vkkt muje extra ki  
  jrurt nhi hoti 
*/


// Ab use krte hai ** replace ** ka 

const url = "https://ranjeet.com/ranjeet%20kumar"
// console.log(url.replace('%20','-'))
/*
  aapne website ka link dekha hoga uske bich mein %20 dekha hoga esa kuch but kisi ne apne website ke link mein space de dia ho bich mein to usko correct krne ke liye replace ka use krenge 
*/

// console.log(url.includes('jeet')) 
// .includes check krte hai ki ye word usme hai ya nhi 