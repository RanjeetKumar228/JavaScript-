const friends_Name = ["Ranjeet","Jeet","Superman","Ironman"]

const another_friends_name = ["Mohan","Sohan","Shamu","Kulwinder"]

 friends_Name.push(another_friends_name);
 //console.log([friends_Name]);

/*
   Jb hum do array ko combine krna chahte hai to .push() ka use krte the , jese hi hmne .push() ka use kia to array ke last mein add ho gya , lekin hme to alg alg elements chahiye tha , uske liye hum concat ka use krenge 
*/

let combine_freinds = friends_Name.concat(another_friends_name)
//console.table([combine_freinds])

// concat ka use krte vkkat dhyan rkhna hai ki hmesa ye new variable mein initialize hoga

const nArr = [1,2,3,4,5,[11,12,13,14,15,[111,121,131,141,151,[1111,1211,1311,1411,1511]]]]
let combine_nArr = nArr.flat(Infinity)
//console.log(combine_nArr);

/*
   jb kbi bhi hmare pass array ke ander aaray ho yani ki aaray ke depth mein array ho ya uske bhi depth mein araya ho , aur hum chahte hai ki jitne bhi depth mein aaray hai vo ek hi array mein aa jaye uske liye hum .flat() ka use krte hai
*/

// Array hai ya nhi check krne ke liye 

//console.log(Array.isArray("Jeet"))

//console.log(Array.from("Jeet"))   // array bnane ke liye Array.from() ka use krenge 

//console.log(Array.from({name : "Ranjeet"}))

/*
 Jb hum object ko array bnate hai to hme defind kkrna pdta hai ki hum kisko array bnana chahte hai keys ko ya value , agr hum ye defind krenge to khali array return kr dega , jese uper humne kia 
*/

const Score1 = 100
const Score2 = 200
const Score3 = 300
const Score4 = 400

const total_Score = Array.of(Score1,Score2,Score3,Score4) 
/*
  from ki jegh hum of ka bhi use kr skte hai 
*/
//console.table([total_Score]); 
// ye jo table likha hai console ke sath vo just table ki form mein output de uske liye hai.




