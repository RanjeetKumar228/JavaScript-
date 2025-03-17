// const number = [1,2,3,4,5,6,7,8,9,10]

// Mein chahta hu ki isme 10 add ho jaye sbhi mein to kese hoga 

// const result = number.map( (nums) => nums +10 )
// console.log(result);

// const result = number.map( (nums) => {
//     return nums +10
//  })
// console.log(result);

// const num = []
// number.forEach( (nums) => {
//     return num.push(nums + 10)
// })
// console.log(num);


// Ab dekhte hai chaining 

const number = [1,2,3,4,5,6,7,8,9,10]

const mynumber = number
                  .map( (nums) => nums * 10)
                  .map( (nums)=> nums+1)
                  .filter( (nums) => nums <= 30 )

console.log(mynumber);





