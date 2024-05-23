// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an instance of Person
  let john = new Person("John", 30);
  
  // Access the prototype of john
  console.log(Object.getPrototypeOf(john));