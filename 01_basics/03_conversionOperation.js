let score = "33abs"
let s = 33

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// to know the type of variables
console.log(typeof score);
console.log(typeof (score));

console.log(typeof s);
console.log(typeof (s));
console.log('\n');

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber); // NaN => Not a Number

let score1 = null
console.log(typeof score1)

let value = Number(score1)
console.log(typeof value)
console.log(value)

let score2 = undefined
console.log(typeof score2)

let value2 = Number(score2)
console.log(typeof value2)
console.log(value2)

let score3 = false
console.log(typeof score2)

let value3 = Number(score3)
console.log(typeof value3)
console.log(value3)

// "35" => 35
// "35abvdd" => NaN
// true => 1; false => 0;

let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "shivam" => true; "1" => true ; "0" => true

let someNumber = 189
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);


// ****************** Operations **********************

let val = 34
let negValue = -val
console.log(negValue)

console.log(20 % 3);

let str1 = " Shivam"
let str2 = "HII"

let str3 = str2 + str1
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log(1 + "2" + 3 + 4)
console.log("5" + 1 + 3 + "2" + 4 + 5)
console.log("1" + "2")

console.log(true)
console.log(+true)
console.log(-true)

console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 3

console.log(num1, num2, num3)

let gameCounter = 100
++gameCounter
gameCounter++
console.log(gameCounter)

// Postfix Increment
let x = 30
const y = x++
console.log(`x : ${x}, y : ${y} `)


// Prefix Increment
let m = 30
const n = ++m
console.log(`x : ${m}, y : ${n} `)