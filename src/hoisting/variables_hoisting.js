// https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

// OK
'use strict';
console.log(`z: ${z}`);
var z = 7;
console.log(`z: ${z}`);


// Error
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);
let x = 5;
const y = 6;

// Error
let foo = new Foo();
class Foo {}


