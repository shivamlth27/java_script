// array
const myArr = [0, 1, 2, 3, 4, 5, 6, true, "Shivam"]
// const hiiShivam = ["shivam", "shiva"]

// const arr2 = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArr)
// console.log(typeof myArr)
// console.log(myArr.length)
// console.log(hiiShivam);
// console.log(arr2)
// console.log(typeof arr2)

// Array Methods
myArr.push(8)
myArr.push(123)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(12) // add element at start by shifting take more time 
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(true));
console.log(myArr.indexOf(true));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);
console.log(myArr);

// slice, splice

// slice
console.log("A", myArr)
const myn1 = myArr.slice(1, 3) 
console.log(myn1);
console.log("B", myArr); // same array


// splice
console.log("A", myArr)
const myn2 = myArr.splice(4, 5) // remove "5"(second parameter) elements from original array srarting from "4" index (first parameter)
console.log(myn2);
console.log("B", myArr); // change original array remove elements

// Splice has second parameter which mentions delete count - number of elements to be deleted after start.
// eg :-
// A = [1,2,3,4,5]
// A.splice(2,3) will give output as [1,2]