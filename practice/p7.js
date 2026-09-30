// Write a JavaScript program using a switch statement to print the day of the week based on a given day abbreviation.
let day = 'tue';
switch(day){
    case "mon":
        console.log("monday");
        break;
    case "tue":
        console.log("Tuesday")
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thu":
        console.log("Thursday");
        break;
    case "fri":
        console.log("friday");
        break;
    case "sat":
        console.log('Saturday');
        break;
    case "sun":
        console.log("sunday");
        break;
    default:
        console.log("please give valid");
        break;
}
