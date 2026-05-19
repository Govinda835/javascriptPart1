// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
   // console.log("Inner: ",a);
    
}

 //console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "govinda"
    function two(){
        const website = "youtube.."
        console.log(username)
        // console.log(website);
    }
    
    two()
}
one()

if(true){
    const username = "govinda"
    if(username === "govinda"){
        const website = " youtube"
        console.log(username + website);
        
    }  
}


// ************** interesting *************

function addOne(num){
    return num + 1
}
console.log(addOne(5));


const addTeo = function (num){
    return num +2
}
console.log(addTeo(5))
//console.log(addTeo);
