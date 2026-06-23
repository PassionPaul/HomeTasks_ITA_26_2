const name = "Pavel"
let age = 33
const isStudent = true
let city = "Minsk"
let salary = null

console.log("Name:", name)
console.log("Age:", age)
console.log("Is Student:", isStudent)
console.log("City:", city)
console.log("Salary:", salary)

console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof city)
console.log(typeof salary)


console.log('-'.repeat(30))


let var1  
let var2 = null

console.log("Var1:", var1)
console.log("Var2:", var2)
console.log(typeof var1)
console.log(typeof var2)


console.log('-'.repeat(30))

let estring = ''
let num1 = 0
let nuvar = null
let unvar
let string1 = 'kyky'
let pnum = 12

console.log("Boolean(estring):", Boolean(estring))
console.log("Boolean(num1):", Boolean(num1))
console.log("Boolean(nuvar):", Boolean(nuvar))
console.log("Boolean(unvar):", Boolean(unvar))
console.log("Boolean(string1):", Boolean(string1))
console.log("Boolean(pnum):", Boolean(pnum))


console.log('-'.repeat(30))


let num2 = 6
let num3 = Number(2.7)
let numstr = '25'
let string2 = 'this is text not number'

console.log(typeof num2)
console.log(typeof num3)
console.log(typeof numstr)
console.log(typeof string2)

console.log(+numstr)
console.log(+(string2))


console.log('-'.repeat(30))


console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)


console.log('-'.repeat(30))


let string3 = ' QA Automation on JavaScript is my purpose '

console.log(string3.length)
console.log(string3.trim())
console.log(string3.toUpperCase())
console.log(string3.toLowerCase())
console.log(string3.includes('JavaScript'))
console.log(string3.indexOf('on'))

console.log(`My name is ${name}, I am ${age} years old, I live in ${city}.`)