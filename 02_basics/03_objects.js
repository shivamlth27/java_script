// Objects ko declare karne ka two ways hai....ek hai literal ki tarah and second constructer ki tarah
// Jab bhi app constructer se object ko banate hai to singleton banta hai...  singleton ek tarah ka object hi hai
// singleton
// Object.create()

// object literals

// symbol
const mySym = Symbol("hiii")



const Shivam = {
    name: 'Shivam',
    "full Name": "Shivam .",
    mySym: "kaise ho",
    [mySym]: "kaise ho", // Adding Symbol and Variable as key in Object and accessed with square bracket (for both)
    age: 21,
    address: 'Bhagalpur',
    hobbies: ['coding', 'reading', 'playing'],
    doneWithMe: true
}
console.log(Shivam);
console.log(Shivam.age);
console.log(Shivam.name);
console.log(Shivam["name"]);
console.log(typeof (Shivam));
console.log(Shivam["full Name"])
console.log(Shivam.mySym);
console.log(typeof (Shivam.mySym));
console.log(Shivam[mySym]);
console.log(typeof (Shivam[mySym]));
console.log(typeof mySym);


Shivam.age = 25
console.log(Shivam.age);
console.log(Shivam);

// Object.freeze(Shivam)

Shivam.name = "Shivam Shivam"
console.log(Shivam.name);
console.log(Shivam);

Shivam.greeting = function () {
    console.log("Hii Shivam Kaise ho");
}

Shivam.sayHii = function () {
    // return `Hii Kaise ho ${Shivam.name}`
    return `Hii Kaise ho, ${this.name}`
}

console.log(Shivam)
console.log(Shivam.greeting)
Shivam.greeting()
console.log(Shivam.greeting()) // undifined due to function not returning any value and its print console.log()

console.log(Shivam.sayHii())