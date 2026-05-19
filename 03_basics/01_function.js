


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


function logInUserMessage (username = "shyam"){ // shyam is default value
    if(username === undefined){ //!username
       return console.log("please enter the username");
    }
    else{
        return `${username} just loggedin`
    }
    

}
console.log(logInUserMessage("govinda"));
