// Object ke uper for in loop lgta hai

const newObj = {
    js : 'JavaScript',
    cpp : 'C++',
    py : 'Python',
    DSA : 'Data structure and algorithim'
}

for (const key in newObj) {
   //  console.log(`${key} :- ${newObj[key]}`);
     
}

// Ab dekhte hai ki kya hum array ke uper for in loop lga skte hai ki nhi

const myNewArr = ['js','py','cpp','dsa']
for (const key in myNewArr) {
  //   console.log(`${myNewArr[key]} `)
}


//Ab dekhte hai ki Map pr lgta hai ki nhi 

const map = new Map()
map.set('IN', "India")
map.set('USA',"United state of america")
map.set('FR', "France")

for (const key in map) {
   //  console.log(key);
     
}