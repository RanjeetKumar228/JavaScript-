let randomNumber = Math.round(Math.random()*100+1)
console.log(randomNumber);

const userInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let  prevGuess = []
let  number = 1

let  playGame = true
if(playGame){
    submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const guesses = parseInt(userInput.value)
    console.log(guesses);
    validateGuess(guesses) 
    });
};

function validateGuess(guesses){
    if(isNaN(guesses)){
        alert(`Pls enter valid number  `)
    }else if(guesses>100){
        alert(`Pls enter less then 100 `)
    }else if(guesses<1){
        alert(`Pls enter more then 1`)
    }else{ 
        prevGuess.push(guesses)
        if(number===10){
            displayGuess(guesses);
            displayMessage(`Game Over ,Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guesses)
           checkNumber(guesses)
        }
    }
};

function checkNumber(guesses){
    if(guesses<randomNumber){
        displayMessage(`Your guess is too low`);
    }else if(guesses>randomNumber){
        displayMessage(`Your guess is too high`);
    }else if(guesses===randomNumber){
        displayMessage(`Your guess it right `);
        endGame()
    }
};

function displayGuess(guesses){
    userInput.value = " "
    guessSlot.innerHTML += `${guesses}, `
    number++;
    remaining.innerHTML = `${11-number}`
};

function displayMessage(msg){
    lowOrHi.innerHTML=`<h2>${msg}</h2>`
};

function endGame(eG){
    userInput.value = " "
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML = `<h2 id="button">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    startGame()
};

function startGame(nG){
    const newGamebutton = document.querySelector("#button")
    newGamebutton.addEventListener("click",(e)=>{
        randomNumber = Math.round(Math.random()*100+1);
        prevGuess = []
        number = 1
        guessSlot.innerHTML = " "
        remaining.innerHTML = `${11-number}`
        userInput.removeAttribute("disabled","") 
        startOver.removeChild(p)
        playGame = true
    });
};



