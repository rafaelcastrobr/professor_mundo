class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir(){
    console.log(`${this.raca} faz AU AU AU`)
  }

  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem Cor');

console.log(pastor);

pastor.setCor = 'Marrom'
console.log(pastor.getCor)
console.log(pastor);
