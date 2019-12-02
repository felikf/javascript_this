// 1.
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`Hi, my name is ${this.firstName}`)
    }

    // class field - arrow 3.
    // sayHi = () => {
    //     console.log(`Hi, my name is ${this.firstName}`)
    // }
}

const person = new Person("John", "Doe");
// person.sayHi();

// 2.
// const greet = person.sayHi;
// greet(); // Cannot read property 'firstName' of undefined - class bodies implicitly in strict mode

// 3. odkomentovat arrow
