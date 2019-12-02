// 1.
const person = {
    firstName: "John",
    sayHi(){
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};

// kdyz predavam funkci jako callback, casto ztratim receivera - priklad
// setTimeout(person.sayHi, 1000);

// 2.
// let handler = person.sayHi.bind(person);
// setTimeout(handler, 1000);
// handler.call({});

// 2. extract into variable and invoke variable as a function
// const greet = person.sayHi.bind(person);
//
// const otherPerson = {
//     firstName: "Jane"
// };
//
// greet.call(otherPerson);
