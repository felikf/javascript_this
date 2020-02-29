// https://dev.to/lydiahallie/javascript-visualized-hoisting-478h

// OK
console.log(`sum: ${sum(1, 2)}`);

console.log(`sumExpr: ${sumExpr}`);
// err sumExpr is not function
// console.log(`sumExpr: ${sumExpr(1, 2)}`);

console.log(`sumArr: ${sumArr}`);
// err sumArr is not function
// console.log(`sumArr: ${sumArr(1, 2)}`);

// -------------------------------------

function sum(a, b) {
    return a + b;
}

// function expression
var sumExpr = function (a, b) {
    return a + b;
};

// arrow function
var sumArr = (a, b) =>  a + b;
