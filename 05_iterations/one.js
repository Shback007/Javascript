// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==7){
        // console.log("7 is best number");
    }
    // console.log(element);
}
   
// console.log(element);

for (let i = 1; i <=10; i++) {
    // console.log(`Outer Loop value:${i}`);
    for(let j = 1;j <=10;j++){
        // console.log(`Inner loop value:${j} and inner loop:${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArr = ["flash","batman","superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i == 7){
//         console.log("Detected 7");
//         break;
//     }
//     console.log(`Value of I is ${i}`);
// }
for (let i = 0; i <= 20; i++) {
    if(i == 7){
        console.log("Detected 7");
        continue
    }
    console.log(`Value of I is ${i}`);
}