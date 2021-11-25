let p = Promise.resolve(new Error('Não rolou'));

console.log('lalala')

p.then(value => console.log(value))
  .catch(reason => console.log("falhou: " + reason)) 