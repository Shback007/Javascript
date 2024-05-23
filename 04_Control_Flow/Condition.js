// if 
const isUserloggedIn = true;
const temp = 51

if (temp<50){
    console.log("less then 50")
}
else{
    console.log("not less than 50");
}
// if (2 === "2"){
//     console.log("executed")
// }
//3 != 2
//<,>,<=,>=,==,!=,===

// const score = 200

// if(score >100){
//     const power ="fly"
//     console.log(`User power ${power}`)
// }

const balance =1000

// if (balance>500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy console");
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("User Logged in");
}

