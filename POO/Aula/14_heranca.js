class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);

console.log(coiote)

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log(`${this.raca} AU AU `)
  }
}

let pug = new Cachorro(4, "Pug") ;

console.log(pug)

class Humano extends Mamifero {
  constructor(patas, raca, cor, idade) {
    super(patas, patas)
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }

  falar() {
    console.log(`Sou ${this.raca} Tenho ${this.idade} anos.`);
  }
}

let homem = new Humano(2, 'Humano', 'branco', 51);

console.log(homem)
homem.falar()