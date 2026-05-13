console.log("Govinda")
console.log("hello world")

// memory allocation in javascript 
// stack(primitive = const, let, boolean, string, number, etc ) change in copy
// //and heap(non-primitive = function, array, etc) // change in original


// ********** Memory ****************

let myYoutubeName = "govindachaudhary"
let anotherName = myYoutubeName
anotherName = "rahulrijal"

console.log(myYoutubeName)
console.log(anotherName)

let userOne ={
     eamil : "chaudharygovinda",
     esewaId : 9864869949
}

let userTwo = userOne
 userTwo.eamil = "tharugovinda835@gmail.com"

 console.log(userOne.eamil)
 console.log(userTwo.eamil)