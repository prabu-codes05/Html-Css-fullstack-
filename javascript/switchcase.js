//switch Case (Best Possible Case)
day = "Wednesday"
switch(day){
    case "sunday":
        console.log("xutti")
     case "Monday":
        console.log("study day")
     case "tuesday":
        console.log("Coding Day")
     case "wdnesday":
        console.log("Chana anda")
     case "Thursday":
        console.log("gym time")
     case "Friday":
        console.log("Chillax")
    
}

let cartValue = 0
let action = "add"
switch(action){
    case "add":
         cartValue += 1
    case "remove":
         cartValue -= 1 
    default:
        console.log( "invalid Output" )
}

console.log(cartValue);