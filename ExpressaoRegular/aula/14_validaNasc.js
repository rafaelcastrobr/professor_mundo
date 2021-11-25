const validaDataNasc = /[01-31]{2}[-][01-12]{2}[-][1910-2021]{4}/;

console.log(validaDataNasc.test('12/01/1991'))
console.log(validaDataNasc.test('12-01-1991'))
