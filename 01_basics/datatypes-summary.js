// Data Types
//          on the basis of how data stored in memory


// 1. Primitive Data Types
//                  call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt







// JavaScript is a dynamically typed language.
// This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.
// For example, in JavaScript, you can do the following:
// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean


const score = 100
const val = 1004.78
let a = "shivam"

const LoggedIn = false
const outsideTemp = null
let userEmail;
// let userEmail = undefined

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);

// use "n" in last to make bigInt
const bigNumber = 920400470707043004343430n
console.log(bigNumber);

console.table([typeof (score), typeof val, typeof a, typeof LoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof bigNumber])

// 2. Non-Primitive(Reference) Data Types
//                  call by reference

// Array, Objects, Functions => ALL THREE DATA TYPE is "object"

// Array
const marks = ["24", "english", "45", "math"]
console.log(marks, typeof marks);

// object
let Shivam = {
    name: "shivam",
    age: 21,
}
console.log(Shivam, typeof Shivam);

// function
const myFunction = function () {
    console.log("HIII")
    console.log(5 + 23)
}

myFunction()
console.log(myFunction, typeof myFunction)

// ===== IMPORTANT =========
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// https://262.ecma-international.org/5.1/#sec-11.4.3


// -----------------------------------------------

// Memory two type :-

// 1. Stack Memory - used in Primitive data type
//          get only copy of variable in Stack

// 2. Heap Memory - used in Non-Primitive data type
//          get the same reference in Heap

let myName = "Shivam"

let anotherName = myName
anotherName = "HiiShivam"

console.log(anotherName, myName);

let userRam = {
    email: "abc@gmail.com",
    upi: "abc@pay",
}

let userSita = userRam
console.log(userRam);
console.log(userSita);

userSita.email = "sita@lth.com"
console.log(userSita.email);
console.log(userRam.email);
console.log(userSita);
console.log(userRam);

// datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.