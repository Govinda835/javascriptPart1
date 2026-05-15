const marvelHeros = ["ironman", "thor", "spiderman", "halk"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros) // it add the new array to the existing array as an element
// console.log(marvelHeros);
// console.log(marvelHeros[4][2]);

const allHeros = marvelHeros.concat(dcHeros) // create a new array...
// console.log("All", allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros,] // same as concat but more than 2 array can be marge
console.log(allNewHeros);

const array = [1,2,3,[4,5,6],[3,5,[4,5,6,[65,78]]]]
const anotherArr = array.flat(Infinity) // return the array into single array
console.log(anotherArr)

console.log(Array.isArray("govinda"))
console.log(Array.from("govinda"));
console.log(Array.from({name: "govinda"})); // interesting


// const score1 = [100]
// const score2 = [200]
// const score3 = [300]
// const score = [...score1, ...score2, ...score3]
// console.log(score);

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));




