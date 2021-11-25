async function somar(a, b) {
  return a+b;
}

console.log(somar(3,4))

somar(3,4).then(value => console.log(value))