const name = "Shivam"
const count = 50
// console.log("hii " + name + count);
console.log(`Hello my name is ${name} and my count is ${count}.`);

const newName = new String("lth-27")
console.log(newName, typeof newName);

console.log(newName[0])
console.log(newName.__proto__)

console.log(newName.length)

console.log(newName.toUpperCase())

console.log(newName)

console.log(newName.charAt(2));

console.log(newName.indexOf('t'));

const newString = newName.substring(0, 3)
console.log(newString);
// not take negative index -> if given consider it from 0

const anotherString = newName.slice(-6, 6)
console.log(anotherString);
// take -ve index

const newString1 = "    Shivam    "
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimStart());
console.log(newString1.trimEnd());

const url = "https://shivam.com/shivam%20hii"
console.log(url.replace('%20', '-'))
console.log(url.replaceAll('%20', '-'))
console.log(url.includes('com'))

const hii = "hii-shivam-kaise-ho"
console.log(hii.split('-', 2));
console.log(hii.split('-'));

// Here is the all important methods of String

// let s = new String("Chhaya"); // here string s is an object


// console.log(s.toLowerCase());  // in lowecase
// console.log(s.toUpperCase());  // in uppercase
// console.log(s.indexOf('y'));  // return index from beginning
// console.log(s.lastIndexOf('a'));  // return index from ending position
// console.log(s.length);

// console.log(s.slice(0,4));  //print string from 0th index to 3rd index as ending index is excluded

// console.log(s.substring(0,4)) // Similar to slice but can't take negative value as an argument 


// console.log(s.charAt(1)); //print char present on given index value

// console.log(s.includes("Chha")); //If given input present then return true otherwise false
// console.log(s.includes("shaya")); // return false
// console.log(s.endsWith("aya")); //return true if string is found from last

// let url = "www.userid?20.com"
// console.log(url.replace('20', '-')); //replace 20 with underscore

// let word = "Chhaya is Shanaya and she is a baby girl";
// console.log(word.split(" ")); // return all the words from given string in the form of array


// let name = "Shanaya"
// console.log(name.concat(" Gupta")); //return String after appending given string

// let remSpace = "  good bye guys  "
// console.log(remSpace.trim()); // return string after removing unwanted space from beginning and ending but not from mid