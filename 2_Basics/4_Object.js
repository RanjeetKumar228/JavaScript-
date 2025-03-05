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
//console.log(combine_obj)


// Jb bhi database value aati hai  to Array of object aata hai 

const user = [
    {
        id1 : 12,
        email : 'jeet@gmail.com',
    },
    {
        id1 : 12,
        email : 'jeet@gmail.com',
    },
    {
        id2 : 122,
        email : 'jit@gmail.com',
    },
    {
        id3 : 121,
        email : 't@gmail.com',
    },

]

user[2].email

// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));
// console.log(Object.entries(tinder_user));

console.log(tinder_user)

// jb hum loop chlate hai to ek value aati hai to kya vo valid hai ya nhi kese pta lgega

// console.log(tinder_user.hasOwnProperty('emai'))

// Ab hum Object ki d-structuring dekhte hai , Array ka baad mein dekhte hai 

const course = {
    course_name :"P.D",
    price : 11,
    course_instructor : 'Jeet',
}

console.log(course.course_name);
// es trah dot tkike se hum access kr skte hai 
console.log(course["course_name"]); 
//dusra sq bracket bhi trika hai , pr jb hme 2-3 baar krna print ho to ese achha nhi lgega , to hum d-structur krenge. 

const {course_instructor} = course
console.log(course_instructor);
// Agr course_instructor name bda hai to mein isko modified bhi kr skta hu , jese niche kia hua hai.

const {course_instructor : instructor} = course
console.log(instructor);

/*
   ye D-structure hai object ka , hota kya hai jb React krte hai to kuchh method hote ,jisko hme d-structure krna hota hai
*/

const navbar = ({company}) => {             // React ka method 

}

navbar(company = "Ranjeet")

/* 
   ab nevbar mein es company ke value ko add krne ke liye by default props. hota hai , to bar bar props. props. to nhi likh skte , eske lie hum {} use krte hai isi ko d-structure kehte hai
*/



// Ab aate hai API ke concept pe 

// API ka mtbl hota ki jese , apna kam kisi aur ke sr pr dal dena

// Example :- jese hum Restaurant mein jate hai to hai to menu card mein dekh kr order dete hai ,uske baad aap ki thore chinta kese bnega , sman kaha se aayega , hai na. To jo menu card hai vo API hai.

// API = back-end se jo value aati hai usko api kehte hai , pehle ke time XML ke form aata tha jo bahut hi comlplicated hota tha ,Ab value aati hai json. Ab json hota kya hai , dikhta kese hai.

// {                      // Object hi json hai , bs iska name hota 
//   "name ": 'Ranjeet',
//   "course" : 'P.D',
//   "price" : 'Free',
// }

/* 
isme dhyan rkhna hai ki json mein keys and value dono string mein likhna hai
*/

// koi baar hme Api arry ke form mein bhi aa skta hai 

[

  {

  },
  {

  }

]

