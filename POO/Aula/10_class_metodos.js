class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir(){
    console.log(`${this.raca} faz AU AU AU`)
  }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(labrador.patas)

labrador.latir();