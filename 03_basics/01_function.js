


function sayMyName (){  // this is function definition
    console.log("G");
    console.log("o");
    console.log("v");
    console.log("i");
    console.log("n");
    console.log("d");
    console.log("a");
}

// sayMyName() // function call and execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3 , 5)
// console.log("result: ", result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3 , 5)
// console.log("result: ", result);


function logInMessage (username){
    if(username == undefined)
    {
        return `please enter the username..`
    }
    return `${username} logged in...`
}
console.log(logInMessage("govinda"))


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 600))

const user = {
    username : "govinda",
    price : 199
}

function handleObject(anyObject){
    return `username is ${anyObject.username} and the price is ${anyObject.price}`
}
console.log(handleObject(user))


function anotherObject (objects){
    return `${objects.username} and ${objects.price}`
}

console.log(anotherObject({
    username : "govinda chaudhary",
    price : 599
}))


const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 600]))


