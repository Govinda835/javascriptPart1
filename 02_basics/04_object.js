// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name = "govinda chaudhary"
tinderUser.isLoffedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "govinda",
            lastName : " chaudhary "
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
const obj4 = {
    5 : "a",
    6 : "b"
}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // combining multiple objects
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));


// *********** Object Destructuring ************
const course ={
    courseName : "JS hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor: instructor, price: price, courseName: name} = course
console.log(instructor);
console.log(name);






