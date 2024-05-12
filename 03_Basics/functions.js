function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("G")
    console.log("N")
    console.log("I")
    console.log("K")
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNumbers(num1,num2){
    return num1 + num2
}

const num3=addTwoNumbers(2,4)

// console.log(num3);

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

const a= loginUserMessage("Sagnik")
// console.log(a)

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,200,400))

const user = {
    username:"sagnik",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const MyNewArray = [200,400,100,600]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(MyNewArray))
console.log(returnSecondValue([200,400,300]))
