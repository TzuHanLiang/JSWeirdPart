// ============= Section 4: Objects and Functions ============
// ===========================================================
// 30. Objects and the Dot
// let Person = new Object(); // this is not the best way to create a object

// Person["firstname"] = "Tzu-han";
// Person["lastname"] = "Liang";

// let firstNameProperty = "firstname";
// console.log(Person);
// console.log(Person[firstNameProperty]);

// console.log(Person.lastname);

// Person.address = new Object();
// Person.address.street = "Guangming 2nd. St.";
// Person.address.city = "Jhubei";
// Person.address.country = "Taiwan";
// console.log(Person.address.city);
// console.log(Person["address"]["country"]);
// console.log(Person)

// ===========================================================
// 31. Objects and Object Literals

// let Person = {} // shorthand for let Person = new Object(); this is the prefer to create a object
let Tzuhan = {
  // let Person = {
  firstname: "Tzu-Han",
  lastname: "Liang",
  address: {
    street: "Guangming 2nd. St.",
    city: "Jhubei",
    country: "Taiwan"
  }
};


// console.log(Person);

// const greet = person => {
//   console.log(`Hi ${person.firstname}`);
// };

// greet(Tzuhan);
// greet({ firstname: "Emily", lastname: "Doe" });

// Tzuhan.address2 = {
//     email: "crocodilestear@gmail.com"
// }
// console.log(Tzuhan)

// ===========================================================
// 32. Framework Aside: Faking Namespaces

// !! Big word Alert: Namespaces
// --> a container for variables and functions, typically to keep variables and functions with the same name seperate

let english = {};
let spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

// ===========================================================
// 34. Functions are Objects

// !! Big word Alert: first class functions
// --> first class functions: every thing you can do with other types you can do with functions
// Assign them to variables, pass them around, create them on the fly.

function greet() {
    console.log("hello");
}
greet.language = "English";
console.log(greet);
console.log(greet.prototype);
console.log(greet.language);
greet();

// ===========================================================
// 35. Function Statements and Function Expressions