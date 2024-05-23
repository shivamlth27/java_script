"use strict"; // treat all JS code as newer version
// whole code in file will be treated as
// new standard(version) of JavaScript
// by default run in strict mode

// alert("3+4"); // run in browser, here we are using nodejs

console.log(3 + 3)
console.log("Shivam")

// code readability sould be high

let name = "Shivam"
let age = 21
let isloggedIN = false
let ishappened = true
let state;
let a = null


// number => 2^53
// bigint => to increase range 
// string => ""
// boolean => true / false

// null => standalone value 
// undefined => no value assigned 
// symbol => uniqueness

// object

console.log(typeof "Shivam")
console.log(typeof age);
console.log(typeof null); // object 
console.log(typeof undefined); // undefined - it is type in js


console.table([name, age, isloggedIN, ishappened, state, a])