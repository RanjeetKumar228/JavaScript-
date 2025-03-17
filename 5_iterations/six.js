const newArr = ["js","py","cpp","java","dsa"]

// const value = newArr.forEach( (item) => {
//     //console.log(item)
//     return item
// })
// console.log(value);      // forEach return nhi krta hai koi value

// filter

const nums = [1,2,3,4,5,6,7,8,9,10]

// const numsval = nums.filter( (val) => val<=8 )
// console.log(numsval);

const numsval = nums.filter( (item) => {
   return item<8;
} )
// console.log(numsval);

// ye hmne dekha filter ke trike se , yahi agr hme forEach ke method se dekhna pdta to kese krte 

// uske liye ek new arary bnayenge

const mynums = []

nums.forEach( (num) => {
    if(num<8)
       mynums.push(num)
} )
// console.log(mynums);


// Example , data base se value bhi kuchh es trah se hi nikala jata hai

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004 },

    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007 },

    { title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },

    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014 },

    { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010 },

    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996 },

    { title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016 },

    { title: 'Book nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const BooksName = books.filter( (bk) => bk.genre === 'History' )


// By return kuki { } lge hai

// const BooksName = books.filter( (bk) => {
//     return bk.genre === 'History'
// } )
// console.log(BooksName);


// By forEach

// const myBooksName = []
//  books.forEach( (bk) => {
//     if(bk.genre === 'History'){
//         myBooksName.push(bk)
//     } 
    
// } )
//  console.log(myBooksName);
 

// AUR BHI OPERATION LGA KE CHECK KRTE HAI 

const booksName = books.filter( (bk) => bk.publish >=1990 )
console.log(booksName);
