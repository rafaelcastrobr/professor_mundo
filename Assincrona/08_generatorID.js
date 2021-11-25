function* criadorId() {
  let id=9000;
  while(true) {
    yield id++;
  }
}

let criaId = criadorId();

console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
console.log(criaId.next().value)
