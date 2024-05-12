//Dates//

let d = new Date()
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toISOString())
// console.log(d.toJSON())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleString())
// console.log(typeof d);

let mydate = new Date(2023,0,23)
let mydate2= new Date(2023,0,23,5,3)
let mydate3 = new Date("2024-05-12")
let mydate4= new Date("05-12-2024")
// console.log(mydate.toLocaleString())
// console.log(mydate2.toLocaleString())
// console.log(mydate3.toLocaleString())
// console.log(mydate4.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(mydate4.getTime())
// while(myTimeStamp!=1715511142903){
    
//     myTimeStamp=Date.now()
// }
console.log(myTimeStamp-mydate4.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday:"long"
})