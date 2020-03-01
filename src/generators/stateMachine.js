function* stateMachine(state) {
    let transition;

    while (true) {
        if (transition === 'INC') {
            state++;
        }
        if (transition === 'DEC') {
            state--;
        }

        transition = yield state;
    }
}

let iterator = stateMachine(0);

console.log(iterator.next());
console.log(iterator.next('INC'));
console.log(iterator.next('INC'));
console.log(iterator.next('DEC'));
