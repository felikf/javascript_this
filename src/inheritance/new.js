class Foo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    identify() {
        return `I am  ${this.firstName} ${this.lastName}`;
    }
}

class Bar extends Foo {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    speak() {
        console.log("Hello, " + this.identify() + ".");
    }
}

var b1 = new Bar("b1");
var b2 = new Bar("b2");

// neni private
// b1.firstName = 'other';
// konvence private property maji _ : _prop1

b1.speak(); // log: "Hello, I am b1."
// b2.speak(); // log: "Hello, I am b2."

