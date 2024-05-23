const accountId = 1453; // declare constant
let accountEmail = "shivam@iitbhilai.ac.in"; // use to declare variable "no scope problem"
var accountPassword = "24355"; // scope problem "not used now" accessed in whole code
accountCity = "Bhagalpur"; // not good way to declare variable without using keywords
let accountState; // gives "undefined" as output
/*
if variable no value assigned then
by default it takes "undefined"
*/

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/

// accountId = 4; // const variable reassignment not allowed
accountEmail = "shivam16103@gmail.com";
accountPassword = "123";
accountCity = "Bhilai";

console.log(accountId, accountEmail, accountPassword, accountState);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
console.log(accountEmail);
console.log(accountPassword);

// use "const" and "let" to declare variables
