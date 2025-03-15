// Syntax
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 7
switch(month){
    case 1 :
        console.log("Jan")
        break;
    case 2 :
        console.log("Feb");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
         break;
    //Agr hum break nhi lgate hai to uske baad ke sare code execute ho jayenge
    case 5 :
        console.log("May");
        break;

    default : 
    console.log("Not match");
    break;       
}

// kai bar hota kya hai ki agr hum number ki jegh string likhte hai to confuse ho jate hai

const Weekday = "Sat"
switch (Weekday) {
    case "Sunday":
        console.log("Sota rahunga");
        break;
    case "Tuesday":
        console.log("Gumne junga");
        break;
    case "Wednesday":
        console.log("Office work");
        break;

    default:
        console.log("Kuchh nhi");
        
        break;
}