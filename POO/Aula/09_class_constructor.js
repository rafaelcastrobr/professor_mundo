class Cachorro {
  constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
  }
}

Cachorro.prototype.uivar = function() {
  console.log(`${this.raca} faz Auuuuuuuuu`)
}


let labrador = new Cachorro('Labrador', 4, 'Amarelo');
labrador.uivar()
