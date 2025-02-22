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
//
//console.log(value.__proto__)
//
//console.log(value.length)
//
//console.log(value.toUpperCase()) // agr value ko uper case mein likhan hai to toUpperCase() use kro
//
//console.log(value.toLowerCase()) // agr value ko lower case mein likhan hai to toLowerCase() use kro

//console.log(value.charAt(4))
// agr value mein aap kis number pr kon sa char hai pta krna chate hai to charAt() ka use kro

//console.log(value.indexOf('e'))
// agr value mein aap kon sa char kis number pr hai pta krna chate hai to indexOf('') ka use kro

const newString = value.substring(0,4)
console.log(newString)