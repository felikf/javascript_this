function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    var self = this; // self in closure scope
    const tim = setTimeout(function () {
        console.log('1', this.firstName, this === tim, this === window);
        console.log('2', self.firstName, self.lastName);
    }, 100);

    // ---
    function test() {
        console.log(this === window);
    }
    test();

    // ---
    this.test1 = function test() {
        console.log(this === window, this === self);
    };
    this.test1();
}

onLoad = function () {
    new Person('Felix', 'Fatka');
};

