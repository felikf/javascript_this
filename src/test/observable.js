const obj = {
  giveMeData: function (dataCb, errorCb, doneCb) {
    const array = [10, 20, 30, 40];

    for (let x of array) {
      dataCb(x);
    }
  }
};

obj.giveMeData(function (x) {
  console.log(x);
});


const observable = {
  subscribe: function (observer) {
    const result = new Promise(resolve => resolve({ a: 1, b: 2 }));

    function nextAndComplete(x) {
      observer.next(x);
      observer.complete();
    }

    result.then(nextAndComplete, observer.error);
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


observable.subscribe(observer);


// observable = producer
// observer = consumer = recepients = callbacks
