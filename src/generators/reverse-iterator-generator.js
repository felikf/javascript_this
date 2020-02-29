const arr = ['A', 'B', 'C'];

const createReverseIterator = array => (
    {
        [Symbol.iterator]() {
            let i = array.length;

            return {
                next: () => ({
                    value: array[--i],
                    done: i < 0
                })
            }
        }
    }
);


for (let value of createReverseIterator(arr)) {
    console.log(value);
}

// ---------------------------------------------------------

const reverseGenerator = function* (array) {
    let i = array.length;
    while (i > 0) {
        yield array[--i];
    }
};

for (const value of reverseGenerator(arr)) {
    console.log(value);
}

let reverseGenerator1 = reverseGenerator(arr);

reverseGenerator1.next() //?
// reverseGenerator1.return() //?
reverseGenerator1.next() //?
reverseGenerator1.next() //?
reverseGenerator1.next() //?

// ----------------------------------------------------------

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
};

const aa = {
    ...createReverseIterator(Object.keys(obj))
};

for (let key of aa) {
    console.log(key);
}
