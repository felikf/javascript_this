function* fib() {
    let [prev, curr] = [0, 1];
    yield prev;

    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield prev;
    }
}

for (const n of fib()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 10) {
        break;
    }
}
