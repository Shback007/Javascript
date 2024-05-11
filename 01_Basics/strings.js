const name="sagnik"
const repocount = 17

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName= new String('sagnik')
const demo= new String('sagnik-hc')

// console.log(gameName[[0]])
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('i'))

const newdemo=demo.substring(0,4)
// console.log(newdemo)

const anotherString = demo.slice(-8,4)
// console.log(anotherString)

const newString1 = "      sagnik       "
console.log(newString1)
console.log(newString1.trim())

const url="https://sagnik.com/sagnik%20hore"

console.log(url.replace('%20', '-'))

console.log(url.includes('sagnik'))

console.log(demo.split('-'));
