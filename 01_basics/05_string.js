const name = "govinda"
const repoCount = 16

//console.log(name + repoCount)

console.log(`${name} and the repoCount is ${repoCount}`)

const gameName = new String('chaudhary-govinda-rahul')
console.log(gameName[0])//c
console.log(gameName.length)
console.log(gameName)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.indexOf("r"))
console.log(gameName.split("-"))

const newString = gameName.substring(0, 5)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"
const newUrl = url.replace("%20", "-")
console.log(newUrl)

console.log(url.includes("hitesh"))
console.log(url.includes("chaudahry"))


