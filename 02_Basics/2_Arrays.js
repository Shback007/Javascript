const marvel_heros = ["Thor","IronMan", "Captain America"]
const dc_heros = ["Superman","Batman", "Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][2])

// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // it merges all into single array

console.log(real_another_array)

console.log(Array.isArray("Sagnik"))
console.log(Array.from("Sagnik"))
console.log(Array.from({name: "sagnik"})) //interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))