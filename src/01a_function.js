// 1.
// If we're not in strict mode, a plain function call sets the function's this value to the global object.
function func() {
    console.log(this === global);
}

func();

// 2.
// If we're in strict mode, a plain function call sets the function's this value to undefined.
// function func1() {
//     'use strict';
//     console.log(this === undefined);
// }
//
// func1();


// 3. https://medium.com/@benastontweet/this-in-javascript-28f077cfe852
// function bar() { console.log(this === global); }
// // sloppy mode
// (function() {                         // iife - immediately invoked function expression
// 'use strict';
//     function foo() {
//         console.log(this);
//         bar();
//     }
//     foo(); // What is printed to the console?
// }());

