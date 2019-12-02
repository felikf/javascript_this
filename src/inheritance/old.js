function Foo(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Foo.prototype.identify = function() {
    return `I am  ${this.firstName} ${this.lastName}`;
};

function Bar(who) {
    Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype); //ES 5 - novy objekt, jehoz prototype bude Foo.prototype
// NOTE: .constructor is borked here, need to fix

Bar.prototype.speak = function() {
    console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak(); // alerts: "Hello, I am b1."
b2.speak(); // alerts: "Hello, I am b2."
