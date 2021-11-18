class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir(){
    console.log(`${this.raca} faz AU AU AU`)
  }
}

// definir por padrão
Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');
let doberman = new Cachorro('Laranja');
console.log(labrador.patas)

labrador.latir();

console.log(labrador.raca)
console.log(Cachorro.prototype.raca)
