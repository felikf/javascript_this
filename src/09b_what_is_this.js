function check(_this) {
    return ((_this === undefined) && 'undefined') || ((_this === module.exports) && 'global') || ((_this === a) && 'a') || ((_this === obj2) && 'obj') ||  '?';
}

const a = {
    a: 'a'
};

class Obj {
    getThis = () => this;
    getThis2 () {
        return this;
    }
}
const obj2 = new Obj();
obj2.getThis3 = obj2.getThis.bind(obj2);
obj2.getThis4 = obj2.getThis2.bind(obj2);

const answers2 = [
    obj2.getThis(),            // obj2
    obj2.getThis.call(a),      // obj2
    obj2.getThis2(),           // obj2
    obj2.getThis2.call(a),     // a
    obj2.getThis3(),           // obj2
    obj2.getThis3.call(a),     // obj2
    obj2.getThis4(),           // obj2
    obj2.getThis4.call(a)      // obj2
];

answers2.forEach(function (r) {
    return console.log(check(r));
});
