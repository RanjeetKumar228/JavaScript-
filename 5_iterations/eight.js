// reduse ka use 

const number = [1,2,3,4,5]

// const Totalnumber = number.reduce(function (acc,currval) {
//     return acc+currval
// },0)
// console.log(Totalnumber);

const Total = number.reduce((acc,currval)=>acc+currval,0)
// console.log(Total);


const shopingCart = [

     {  itemName:'Js course',
       price: 333
     },
     {  itemName:'ds course',
        price: 999
     },
     {  itemName:'mobile development',
        price: 850
     },
     {  itemName:'Python course',
        price: 500
     } 

]

const Topay = shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(Topay);

