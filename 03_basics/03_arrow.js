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