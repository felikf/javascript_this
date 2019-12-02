// Dynamic binding
// https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a
// If you're ever in doubt about what this is, remember to use your debugger to verify the object is what you think it is.
// you can think of this as an implicit parameter with mutable state
(function () {
    'use strict';

    function check(_this) {
        return ((_this === undefined) && 'undefined') || ((_this === global) && 'global') || ((_this === a) && 'a') || ((_this === obj) && 'obj') ||  '?';
    }

    const a = {
        a: 'a'
    };

    const obj = {
        getThis: () => this,
        getThis2 () {
            return this;
        }
    };

    obj.getThis3 = obj.getThis.bind(obj);

    obj.getThis4 = obj.getThis2.bind(obj);

    const answers = [
        obj.getThis(),          // global
        obj.getThis.call(a),    // global
        obj.getThis2(),         // obj
        obj.getThis2.call(a),   // a
        obj.getThis3(),         // global
        obj.getThis3.call(a),   // global
        obj.getThis4(),         // obj
        obj.getThis4.call(a)    // obj
    ];

    answers.forEach(function (r) {
        return console.log(check(r));
    });

})(); // iife - immediately invoked function expression
