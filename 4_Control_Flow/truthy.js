/*   truthy value mtb vo man leta hai ki aapki value shi hai    */

const username = []
if(username){
    console.log("Aap available ho");  
}else{
    console.log("Aap available nhi ho");
   
}

/*     *****  Falsy value  *****     */

/*  false , 0 , -0 , "" , BigInt 0n , null , undefined , NAN     */

/*       *****    truthy value    *****        */

/*    "False" , " " , "0" , {} , [] , function(){}    */

/* 
  Agr ye check krna pd jaye ki array ya object empty hai ya nhi to kese krenge.

  Array check krne ka trika
*/

if(username.length === 0){
    console.log("Array");        //Array
    
}

/*     *****  Object check krne ka trika  *****   */

const checkObject = {}
if(Object.keys(checkObject).length === 0){
   // console.log("Object is empty");           //Object is empty
    
}


/*        Nullish Coalecsing Operator (??) : null , undefind       */

let val ;
// val = 10;
// val = 5 ?? 10                 // 5
// val = null ?? 10             // 10
// val = undefined ?? 10       // 10
val = null ?? 10 ?? 20
//console.log(val)


/*   *****  Terniary operator  *****     */

// condition ? true : false

let age = 10
age>18 ? console.log("ADULT"): console.log("Child")
 
