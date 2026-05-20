// Immediately Invoked Function Expressions (IIFE)

(function chai() // named iife
{
    console.log("DB, connected...")
})();
// () ()

( ()=> {
    console.log("db connected two..")
})();

((username)=> { // un-named  iife and always close the function call using ;
    console.log(`welcome: ${username}`)
})("govinda")