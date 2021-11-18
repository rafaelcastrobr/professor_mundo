class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir(){
    console.log(`${this.raca} faz AU AU AU`)
  }
}

Cachorro.prototype.raca = 'SRD';

//similar ao const
let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas)

labrador.latir();

console.log(labrador.raca)

// acessando symbol

console.log(Cachorro.prototype[patas])
console.log(labrador[patas])