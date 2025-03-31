const form = document.querySelector("form")
console.log(form);

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.getElementById("result")

    if(height==""||height<0||isNaN(height)){
        result.innerHTML = `Pls enter the valid height ${height}`

    }else if(weight==""||weight<0||isNaN(weight)){
        result.innerHTML = `Pls enter the valid height ${weight}`
    }

    else{
        const bmi = weight/(height*height)*10000;
        result.innerHTML = `Your BMI is ${bmi} kg/m<sup>2</sup>`;

        if(bmi<=18.6){
            result.innerHTML += `<br />(Underweight)`
        }else if (bmi>18.6 || bmi<24.9){
            result.innerHTML += `<br />(Normal weight)`
        }
        else{
            result.innerHTML += `<br /> (Overweight)`
        }
    }
    
})