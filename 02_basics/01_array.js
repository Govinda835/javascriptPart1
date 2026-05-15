//const myArr = [0,1,2,3,4,5, true, "govinda"]

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "ironman", "thor"]
const myArr2 = new Array(1,2,3,4)

console.log(myHeros[2]);

myHeros.push("halk")
myHeros.push("doctor strange") // add element in last
myHeros.pop() // Last element delete
myHeros.unshift("govinda") // add element in first
myHeros.shift() // first element is deleted

console.log (myHeros.includes("ironman")) // true or false
console.log(myHeros.indexOf("thor")) // inwhich index it belongs

console.log(myHeros)

const newArr = myArr.join() // changes into string
console.log(newArr)
console.log(typeof newArr);

// slice, splice
console.log("A", myArr)
const myN1 = myArr.slice(1,3) // it doesnot change the original array
console.log(myN1);
// console.log(myArr)

console.log("B", myArr)
console.log(myArr.splice(1,3)); // it delete the original elements in the array with given range

console.log("X", myArr)

console.log("Heros", myHeros);
const eleminate = myHeros.splice(1,2)
console.log(eleminate); // deleted heros

console.log("R", myHeros) // remainning heros




