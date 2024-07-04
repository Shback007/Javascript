// let myName = "Sagnik     "

// function truelength(str){
//     this.str=str.trim().length
// }
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.sagnik = function(){
    console.log(`Sagnik is present in all objects`);
}

Array.prototype.HeySagnik = function(){
    console.log(`Sagnik says hello`);
}

heroPower.sagnik()
myHeros.sagnik()
myHeros.HeySagnik()
// heroPower.HeySagnik()

//inheritance

const User = {
    name:'chai',
    email:'chai@google.com'
}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable :false
}

const TASupoort = {
    makeAssignment : 'js assignment',
    fulltime :true,
    __proto__ :TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode       "
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sagnik".trueLength()