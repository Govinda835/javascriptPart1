// *************** Numbers ********************
const score = 400
const balance = new Number(35000)

console.log(score)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = new Number(123.8966)
console.log(otherNumber.toPrecision(3)) // roundup value

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")) // 10,00,000

// ******************** Maths *******************
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6))

console.log(Math.min(3,5,1,8,9))
console.log(Math.max(3,5,1,8,9))

console.log((Math.floor(Math.random()*10) + 1))
const min = 10
const max = 20
const random = Math.floor(Math.random()*(max - min + 1) + min)
console.log(random)
