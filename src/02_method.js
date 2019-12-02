// 1. object literal
const person = {
    firstName: "John",
    sayHi() {
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};

person.sayHi();

// 2. function declaration
// function sayHi() {
//     console.log(`Hi, my name is ${this.firstName}!`);
// }
//
// const person = {
//     firstName: "John"
// };

// person.sayHi = sayHi;  // <------ nastaveni nove funkce
// person.sayHi();


// 3. zmateni - ztraceni receiver objektu
// const greet = person.sayHi; // function reference stored - functional programming
// greet();   // undefined - because plain function call; not in strict mode

// 4. - setTimeout vola funkci this nastavenym na globalni kontext
// const person = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hi, my name is ${this.firstName}!`);
//     }
// };

// predavame referenci na funkci person.sayHi podobne jako v 3.
// setTimeout(person.sayHi, 1000); // as a callback to another function; set to global object - not intended

// solution -wrapper function
// setTimeout(function () {
//     person.sayHi();
// }, 1000);

// solution 2
// setTimeout(person.sayHi.bind(person), 1000);

