const observable1 = {
  subscribe: function (observer) {
    [10, 20 ,30 ,40].forEach(function (x) {
      observer.next(x);
    });

    observer.complete();
  },

  pipe: function (operator) {
    return operator(this)
  }
};

const observer = {
  next: function (x) {
    console.log(x);
  },
  error: function (err) {
    console.log(err);
  },
  complete: function () {
    console.log('c');
  },
};

function map(f) {
  return inputObservable => ({
    subscribe: function (outputObserver) {
      inputObservable.subscribe({
        next: function (x) {
          outputObserver.next(f(x));
        },
        error: function (err) {
          outputObserver.error(err);
        },
        complete: function () {
          outputObserver.complete();
        }
      });
    }
  })
}

const observable2 = map(x => x * 2)(observable1);

observable2.subscribe(observer);
