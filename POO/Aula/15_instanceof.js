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

 
}

console.log(new Cachorro instanceof Mamifero)
console.log(coiote instanceof Mamifero)
