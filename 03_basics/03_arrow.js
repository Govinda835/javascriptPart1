const user = {
    username : "govinda",
    price : 399,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website...`);
        
    }
}
// console.log(user.welcomeMessage())
user.welcomeMessage()
user.username = "hitesh"
user.welcomeMessage()

//console.log(this);

// function chai ()
// {
//     let username = "govinda"
//     console.log(this.username);
    
// }
// chai()

// const chai  =  () => {

//     let username = "govinda"
//     console.log(this.username);   
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,4))

const addTwo = (num1, num2) => (num1 + num2) // monstly used in react
console.log(addTwo(2,4))

const returnObject = () => ({username : "govinda"}) // to return object 
console.log(returnObject())