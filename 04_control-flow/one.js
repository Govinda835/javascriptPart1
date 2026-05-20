// if statement 

const isUserLogIn = true
if(3 != 2){
    //console.log("this is true")
}
 // 3!=2 true condition
// === this is strick equal

const temp = 41
if(temp === 41){
    console.log("less than 50")
}
else{
    console.log("temperature is greater than 50.")
}


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// const balance = 700
// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance < 750)
// {
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("allow to buy course");  
}
else{
    console.log("not allowed ");
    
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("Yes, user is allowed to login.")
}
else{
    console.log("not allowed to login.");
}


