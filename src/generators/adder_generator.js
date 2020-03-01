function* adderGenerator(x) {
    let y = yield x;

    while (true) {
        y = yield x + y;
    }
}


let add2Iterator = adderGenerator(2);


console.log(add2Iterator.next());
console.log(add2Iterator.next(1));
console.log(add2Iterator.next(1));
console.log(add2Iterator.next(2));
