//Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named iife
    console.log(`DB connected`);
})();

( (name)=>{
    //simple iife
    console.log(`DB connected Two ${name}`)
})("Sagnik")

