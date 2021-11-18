function Cachorro(raca, patas, cor) {
  this.raca = raca,
  this.patas = patas,
  this.cor = cor
}

Cachorro.prototype.uivar = function() {
    console.log(`${this.raca} faz Auuuuuuuuu`)
}

Cachorro.prototype.latir = function() {
  console.log(`${this.raca} faz AU AU AU`)
}

let husky = new Cachorro('Husky', 4, 'cinza');
let doberman = new Cachorro('Doberman', 4, 'branco')

husky.uivar();
doberman.uivar();

console.log('--');

husky.latir();
doberman.latir();