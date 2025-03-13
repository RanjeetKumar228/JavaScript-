//Arrow function smjne ke liye hme this ko smjna pdega aur this ko smjne ke liye thora object ko bhi smjna pdega.

const user = {
    userName : "Ranjeet",
    price : 199,
 
    welcomeMsg : function (){
    console.log(`${this.userName} , Welcome to website`);
// current context ko access krne ke liye this ka use krte hai
    }
} 
