// Let's now see, why it makes sense for the this value to be undefined in strict mode.

// 'use strict'; // uncomment in 2.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 1. zapomenu new keyword
const person = /*new*/ Person("Jane", "Doe");
console.log(person);

// 1. a - prepsne proprerty v globalnim kontextu
// console.log(global.firstName);
// console.log(global.lastName);

// 2. zapnout strict mod - vyse

// const person1 = new Person("Jane", "Doe");
// console.log(person1);

// 2. a pridat console log;
// 2. b zminit return this

// nema return statement
//  - implicitne se vraci this;
//  - invisible return statement return this
// objekt ma link na constructor function

// 3. self ref
// 'use strict';
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//
//     var self = this; // (self or that), self in closure scope
//
//     const tim = setTimeout(function () {
//         console.log(this.firstName); // this === tim in Node, this === window in Browser
//         console.log(self.firstName, self.lastName);
//     }, 100);
//
//     // ---
//     function test() {
//         console.log(this === global);
//     }
//     test();
//
//     // ---
//     this.test1 = function() {
//         console.log(this === self);
//     };
//     this.test1();
// }
//
//
// new Person('Felix', 'Fatka');
