let score = "33asd"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber) // gives NaN (not a number)

// "33" = 33
// "33asd" = NaN not a number
// true => 1 ; false =0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//console.log(typeof booleanIsLoggedIn)

// 1 = true,  0 = false
// "" = false
// "govinda" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ****************** Operations ***************
 
let value = 3
let negValue = -value
console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 *2)
// console.log(2 ** 3) // 2 ko power 3
// console.log(2/3)
// console.log(2 % 3) 

let str1 = "govinda"
let str2 = "chaudhary"
let str3 = str1 + str2
console.log(str3) 

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
