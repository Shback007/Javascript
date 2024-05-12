// signleton  object

//object literals
// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Sagnik",
    "full name": "Sagnik Hore",
    [mySym] : "mykey1",//symbol allocation
    age:21,
    location: "Kolkata",
    email: "Sagnik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email="Sagnik@gpt.com"

// console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email="sagnik.ai@gpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greetingTwo());