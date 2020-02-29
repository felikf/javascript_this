// https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36

function* generator() {
    yield '🤙🏻';
    console.log('1');
    yield '💪🏻';
    console.log('2');
    yield '🖕🏻';

    console.log('The end');
}

let genObj = generator();
let next = genObj.next();
console.log(`${next.value} ${next.done}`);
next = genObj.next();
console.log(`${next.value} ${next.done}`);
next = genObj.next();
console.log(`${next.value} ${next.done}`);
next = genObj.next();
console.log(`${next.value} ${genObj.next().done}`);

// 2 spread operator

// Whoohoo
console.log([...generator()]);

// 3 for-of
genObj = generator();
for (let i of genObj) {
    console.log(`${i}`);
}

// [1,2,3][Symbol.iterator]().next() //?

// 3 Symbol.iterator

const foo = {
    a: 'a',
    [Symbol.iterator]: generator
};

for (let i of foo) {
    console.log(`${i}`);
}

// 4 Iterators
console.log([][Symbol.iterator]);
console.log(''[Symbol.iterator]);
console.log(generator);

// undefined
console.log({}[Symbol.iterator]);
console.log(generator[Symbol.iterator]);
console.log(function(){}[Symbol.iterator]);

// 5 delegate generator
const bar = { a: 'a', b: 'b', c: 'c' };

// undefined
console.log(bar[Symbol.iterator]);

// Object.prototype = {
//     ...Object.prototype,
//     [Symbol.iterator]: function* () {
//         yield* Object.keys(this);
//     },
//     p: 'p'
// };
//
// console.log({}['p']);

bar[Symbol.iterator] = function* () {
    yield* Object.keys(this);
};

console.log([...bar]);


// 6
function* gen() {
    const value = yield 'First';
    console.log(`Second ${value}`);
    return `All Done ${value}`;
}

console.log([...gen()]);

let genObj1 = gen();
console.log(genObj1.next('111'));
console.log(genObj1.next('222'));
console.log(genObj1.next('333'));



