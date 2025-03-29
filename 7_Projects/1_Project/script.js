const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
console.log(button);
buttons.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target);
    

    });  
});