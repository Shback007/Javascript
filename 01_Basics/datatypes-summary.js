//  Primitive (It is done call by value)

// 7 Types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100 //dynamically typed
const scoreValue=100.3

const isLoggedIn=false
const outSideTemp = null
let userEmail;

const id =Symbol('123')
const anotherID =Symbol('123')

// console.log(id === anotherID);

const bigNumber = 45788455686156868n



//Reference (Non Primitive)

//Array , Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj= {
    name:"sagnik",
    age: 21
}

const MyFunction =function(){
    console.log("Hello World")
}

console.log(typeof(bigNumber))

console.log(typeof(heros))