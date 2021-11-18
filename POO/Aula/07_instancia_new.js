function Cachorro(raca, patas, cor) {
  this.raca = raca,
  this.patas = patas,
  this.cor = cor,
  this.uivar = function() {
    console.log(`${this.raca} faz Auuuuuuuuu`)
  }
}

let husky = new Cachorro('Husky', 4, 'cinza');
let doberman = new Cachorro('Doberman', 4, 'branco')

husky.uivar();
doberman.uivar();