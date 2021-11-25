const p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(10);

  }, 2000)
})

const p2 = Promise.resolve(20);

const p3 = new Promise((resolve, reject) => {
  resolve(5);
})

Promise.all([p2,p3,p1]).then((value) => console.log(value));