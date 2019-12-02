// 1. store outerThis and compare vs normal function declaration
const outerThis = this;

const func = () => {
    console.log(this === outerThis);
};

func();

// ignored - this is always bound to lexical context that was captured when function was created
// func.call(null);
// func.apply(null);
// func.bind({})();
//
// new func() // can not be used as constructor

// 2.
// const counter = {
//     count: 0,
//     incrementPeriodically() {
//         setInterval(function() {
//             console.log(++this.count); // zde je this === global; global.count === undefined => NaN; increment counter on global object - person.count() vs this.count()
//         }, 1000);
//     }
// };
//
// counter.incrementPeriodically();

// 3.
// const counter = {
//     count: 0,
//     incrementPeriodically() {
//         setInterval(() => {
//             console.log(++this.count);
//         }, 1000);
//     }
// };
//
// counter.incrementPeriodically();
