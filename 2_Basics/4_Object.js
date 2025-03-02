// const tinder_user = new Object()    // ye sigleton hai 

const tinder_user  = {}                // ye singleton nhi hai 

tinder_user.id = '123abc'
tinder_user.email = 'ranjeet@gmail.com'
tinder_user.isLoggedIn = false;

// console.log(tinder_user);

const regularUser = {
    id : '123',
    email : 'jeet123@gmail.com',
    full_nmae :{                       // Object ke ander object ho skta 
        user_name:{
            first_name : 'JEET',
            last_name : 'KUMAR',
        }
    }
}

// console.log(regularUser.full_nmae.user_name)


// Ab hum dekhte hai ki object ko combine kese kre 

const obj1 = {1: 'R', 2: 'A', 3: 'N', 4: 'J'}
const obj2 = {5: 'E', 6: 'E', 7: 'T'}
const obj4 = {6: 'K', 7: 'U', 8: 'M', 9: 'A', 10: 'R'}
// const obj3 = {obj1,obj2} 
 /*
   humne array bhi ese si combine kia tha to ek hi array mein do array aa gye the ese hi yahha ek hi object mein do object aa gye hai .Array mein mein isko thik krne ke liye 
   concat or spread ka use kia tha same yaha krenge but iska name alg hai.
*/

// const combine_obj = Object.assign({},obj1,obj2)  // ye ho gya hmara .assign ke trike se

const combine_obj = {...obj1 , ...obj2 , ...obj4}  // spread ke trike se
console.log(combine_obj)
