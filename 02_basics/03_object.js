// singleton
//object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name: "govinda",
    "full name": "govinda chaudhary",
    [mySym] :"myKey1",
    age: 21,
    college : "MMC, Nepalgunj", 
    location: "bardiya",
    email: "chaudharygovinda835@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["monday","thursday", "friday"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);

user.email = "tharugovinda835@gmail.com" // change the value of email
// Object.freeze(user) // didnot change the value of the original value
user.email = "govindachaudahry824@gmail.com" // it will not be updated..

console.log(user);

user.greeting = function(){
    console.log("Hello JS users...")
}

user.greetingTwo = function(){
    console.log(`Hello JS users..., ${user["full name"]}`)
    // or `hello JS user, ${this.name}`
}

console.log(user.greeting());
console.log(user.greetingTwo());







