const myNums= [1,2,3,4,5,6]

// const myTotal = myNums.reduce(function(acc,curvall){
//     console.log(`acc : ${acc}`);
//     console.log(`curvall: ${curvall}`);
//     return acc +curvall
// },0)

const myTotal =myNums.reduce ( (acc,curvall) => acc+curvall ,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName :"Js Course",
        Price:2999
    },
    {
        itemName :"C Course",
        Price:999
    },
    {
        itemName :"Android Course",
        Price:5999
    },
    {
        itemName :"Data Science Course",
        Price:12999
    },
]

let myPrice= shoppingCart.reduce( (acc,item) => acc +item.Price ,0)

console.log(myPrice);