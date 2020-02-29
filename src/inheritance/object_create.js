const proto = {
  yell() {
      return `Let my people ${this.action}!`;
  }
};


/**
 * Creates an object that has the specified prototype or that has null prototype.
 * @param o Object to use as a prototype. May be null.
 */
// create(o: object | null): any;

var foo = Object.create(proto);
foo.action = 'GO';

var bar = Object.create(proto);
bar.action = 'FLY';

console.log(foo.yell());
console.log(bar.yell());

// proto is not enumerable
for(o in foo) {
    console.log(`${o}`);
}
