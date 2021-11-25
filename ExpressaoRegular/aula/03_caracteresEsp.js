const pontoRegex = /./;
console.log('.')
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123asd'));


const dRegex = /\d/;
console.log('d')
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('123asd'));

const dRegex1 = /\D/; //[^0-9]

console.log('D')
console.log(dRegex1.test('asd'));
console.log(dRegex1.test(' '));
console.log(dRegex1.test('123'));
console.log(dRegex1.test('123asd'));

const sRegex = /\s/;

console.log('s')
console.log(dRegex1.test('asd'));
console.log(dRegex1.test(' '));
console.log(dRegex1.test('123'));
console.log(dRegex1.test('123asd'));