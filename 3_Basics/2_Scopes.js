// Scope ki kahani basically shuru hoti hai in tino variable se 

// let a = 10;
// const b = 12;
// var c = 13;

// console.log(a);
// console.log(b);
// console.log(c);

// Agr teeno chij jb print ho hi rha hai to let const var banne ki kya jrurt thi 

// {} isi ko bolte hai scope ,jb se function if else ke sath aata hai to scope bn jata hai, object ke sath hota hai to vo uska dclaration hai.

// ab hum if condition lete hai,scope ko smjne ke liye , uske liye uper jo humne teeno variable liye the uska use krte hai.

// var c = 300           // jo bhi bahar likha jayega vo hoti hai global scope

let a = 150;

if(true){             // Jo bhi if ke ander likhoge vo hoti hai block scope
    let a = 10;
    const b = 12;
    console.log("INNER ",a);
}

// console.log(a);    // Error
// console.log(b);     // Error
// console.log(c);       // 13

// Ab hota hai kya ek project ko 5 developer bna rhe ho to ho skta hai same hi variable 5 ne rkh dia ho usse unko preshani hone lgti thi jese.

// Node ke ander scope kese kam krta hai window ke ander scope kese kam krta hai 

// Jb aap inspect krke console krte hai to vha scope alg hota hai , aur node environment mein scope alg hota hai , yad rkhna interview mein puchha ja skta hai.

// closer kya hota hai , yeh ek achhi technique hai js ke andr.Iske liye dom aana chahiye (Document object model) yani ke kese html ke page ko manuplate krte hai.

// Ab dekhte Nested if 

function one(){
    userName = "Ranjeet"

    function two() {
        const website = "Git"
        console.log(userName)
    }

    console.log(website);

    two()

}

one()