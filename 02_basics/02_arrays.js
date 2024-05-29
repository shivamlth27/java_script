const shivam = ["ML", "DSAI", "SWE", "DEV"]
const hii = ["web3", "robo", "OS", "DBMS"]

console.log(shivam)
console.log(hii)

// take ARRAY as an element and update the existing array
// shivam.push(hii)

// console.log(shivam)
// console.log(shivam[4])
// console.log(shivam[4][2])

// concatenate arrays not changes existing arrays
// console.log(`shivam is ${shivam}`)
// newArr = shivam.concat(hii)
// console.log(newArr)

const kaiseHo = ["hii", "hello", "thanks"]

// spread operator -> same as concat()
const all_course = [...shivam, ...hii, ...kaiseHo]
console.log(all_course)

const readyHai = [1, 2, 3, [34, 12, [1, 4, 3], 34], 6, [2, 3, [456, 431, [9877, 34]]]]
console.log(readyHai)
console.log(readyHai[3])
console.log(readyHai[3][2])
console.log(readyHai[5][2][2])
// console.log(JSON.stringify(readyHai, null, 2));

// const chaloChalteHai = readyHai.flat(2)
const chaloChalteHai = readyHai.flat(Infinity)
console.log(chaloChalteHai)



console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
// *** Interesting ***
console.log(Array.from({ name: "Shivam" }))

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4))

const myObject = { a: 1, b: 2, c: 3 };

// Using Object.entries and Array.from
const myArray = Array.from(Object.entries(myObject), ([key, value]) => value);

console.log(myArray); // [1, 2, 3]