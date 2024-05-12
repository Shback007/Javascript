// var c= 300
let a=300
if(true){
    let a =10
    const b = 20
    // console.log("Inner:",a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Sagnik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username ="sagnik"
    if (username==="sagnik") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username)


//+++++++++++++++++++++++++++ interesting +++++++++++++++

console.log(addone(5))
console.log(addTwo(5))

function addone(num){
    return num +1
}



const addTwo = function(num){//This is hoisting
    return num +2
}

addTwo(5)