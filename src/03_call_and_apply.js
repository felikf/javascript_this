// jak zavolat sayHi bez pridani funkce na objekt

function sayHi(param, param2) {
    console.log(`Hi, my name is ${this.firstName}! ${param} ${param2}`);
}

const person = {
    firstName: "Jane",
    lastName: "Doe"
};

// call definovano na function prototype - a thus available for every function
// sayHi.call(person, 'bla', 'foo');
// vs
// sayHi();

//2.
// sayHi.apply(person, ['bla', 'foo']);
