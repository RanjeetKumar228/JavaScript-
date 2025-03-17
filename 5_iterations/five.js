const newArr = ["js","py","cpp","java","dsa"]

newArr.forEach(function (item) {
  //  console.log(item);
    
})

// dusre trike se bhi dekh lete hai arrow va;e trike se

newArr.forEach((val) => {
 //   console.log(val);
    
})

// function printme (item){
//     console.log(item);
    
// }
// newArr.forEach(printme)

newArr.forEach( (item , index , Array)=>{
  //  console.log(item , index , Array);
    
})


const coding = [
      {
        languageName : "Java",
        languageFilename : "java"
      },
      {
        languageName : "Java",
        languageFilename : "java"
      },
      {
        languageName : "C++",
        languageFilename : "cpp"
      },
      {
        languageName : "JavaScript",
        languageFilename : "js"
      },
      {
        languageName : "python",
        languageFilename : "py"
      }
]

coding.forEach( (item) => {
    console.log(item.languageName)
} )