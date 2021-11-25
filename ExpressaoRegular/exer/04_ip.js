const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ip.test('123.1.1.0'))
console.log(ip.test('a8.8.8.8.8'))
