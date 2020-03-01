function* range(from, to) {
    while (from < to) yield from++;
}

const iterator = range(0, 5);

for (const value of iterator) {
    console.log(value);
}

const arr = [...range(0, 100)]; //?
