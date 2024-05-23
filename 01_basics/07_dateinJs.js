// Date : Object -> Single moment

// let newdate = new Date()
// console.log(newdate) // 2024-05-20T03:55:59.232Z
// console.log(typeof newdate); // object

// console.log(newdate.toString()) // Mon May 20 2024 09:25:59 GMT+0530 (India Standard Time)
// console.log(newdate.toDateString()) // Mon May 20 2024
// console.log(newdate.toTimeString()); // 09:25:59 GMT+0530 (India Standard Time)
// console.log(newdate.toLocaleDateString()) // 5/20/2024
// console.log(newdate.toLocaleTimeString()) // 9:25:59 AM
// console.log(newdate.toLocaleString()) // 5/20/2024, 9:25:59 AM
// console.log(newdate.toUTCString()) // Mon, 20 May 2024 03:55:59 GMT
// console.log(newdate.toISOString()) // 2024-05-20T03:55:59.232Z
// console.log(newdate.toJSON()) // 2024-05-20T03:55:59.232Z
// console.log(newdate.getTimezoneOffset()) // -330



// let myDate = new Date(2025, 0, 16)
// let myDate = new Date(2025, 0, 16,8,7)
// let myDate = new Date("2024-10-16")
let myDate = new Date("10-16-2026")

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(typeof myTimeStamp)
// console.log(myDate.getTime())
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000))
// console.log(Math.round(Date.now()/1000))

let hiiDate = new Date()
console.log(hiiDate)
console.log(typeof hiiDate)
console.log(hiiDate.getDate())
console.log(hiiDate.getMonth() + 1)
console.log(hiiDate.getDay())

console.log(`${hiiDate.getDay()} and time is`)

console.log(hiiDate.toLocaleString('default', {
    weekday: "long",

}));