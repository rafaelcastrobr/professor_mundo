class Carro {
  constructor(marca, cor, gasolina, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
    this.consumo = consumo;
  }

  dirigindo(km) {
    let litrosConsumidos = km / this.consumo;

    this.gasolina -= litrosConsumidos.toFixed(0);

  }

  abastecer(litros) {
    this.gasolina += litros;
  }
}

let carro = new Carro("Wolks", "Preto", 100, 14);

console.log(carro)

carro.dirigindo(100);

console.log(carro)

carro.abastecer(20);

console.log(carro);

carro.dirigindo(1000)

console.log(carro)