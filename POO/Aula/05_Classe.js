let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function() {
    console.log(`${this.raca} faz AUAU`);
  }
}

//cria um novo objeto apartir do obj antigo
let labrador = Object.create(cachorro);

labrador.raca = "Labrador";
labrador.latir();


console.log(labrador.raca);