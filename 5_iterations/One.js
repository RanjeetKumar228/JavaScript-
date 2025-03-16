/*                    for loop

    For loop is a control statement used to execute a block of code repeatedly for a specific number of times. It consists of an initialization, condition, and increment/decrement. The loop runs until the condition becomes false.
*/

for (let i = 0; i < 10; i++) {
    let element = i
    if(element == 5){
     //   console.log("5 is best number")
    }
   //  console.log(element);
}
// console.log(element);


// Ab hum loop ke ander loop dekhte hai

for (let i = 1; i < 10; i++) {
   // console.log(`Outer Loop ${i}`)
    for (let j = 1; j <= 10; j++) {
      //  console.log(`Inner Loop ${j} and inner loop ${i}`)
    }
    
}

// Table print krte hai 

for (let i = 1; i <= 20; i++) {
   // console.log(" ");
   // console.log(`Table of ${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Array mein bhi dekh hi lete hai

const myarr = ['Ranjeet','Jeet','RK','Jk','Hero']

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
   // console.log(element)
    
}



//Ab dekhte hai break and continue

for (let i = 0; i <20; i++){
    if (i == 10) {
       // console.log(`Detected 5`);
        break  
// break ka use isiliye krte hai , jese hi vo chij mile yani ki detect ho uske baad loop khtm , yani ki code se bahr aa jao
    }
  //  console.log(`Value of i is ${i}`);

    
}

for (let i = 0; i <20; i++){

    if (i == 10) {
    console.log(`Detected 5`);
    continue 
// continue ka use isiliye krte hai , jese hi vo chij mile yani ki detect ho to ek baar maf kr do yani ek bar detect ho gya to bhi code chlega
    }
   console.log(`Value of i is ${i}`);
}