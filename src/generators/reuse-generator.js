const arr = ['a', 'b', 'c'];

const gen = function* (array) {
    yield* array;
    yield* array.map(v => v.toUpperCase());
    yield 1;
    yield 'finish';
};


for (const value of gen(arr)) {
    console.log(value);
}
