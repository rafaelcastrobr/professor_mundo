const pessoa = {
  maos: 2,
}

// se conectam tranformando pessoa em prototypes de pessoaNova
const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos)

console.log(pessoaNova.hasOwnProperty('maos'));