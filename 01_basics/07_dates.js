let myDate  = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2004 , 11, 9) // starts from 0 for month
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())

let DOB = new Date("2004-12-09") // start from 1
console.log(DOB.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log( Math.floor(Date.now()/1000));  // in seconds




