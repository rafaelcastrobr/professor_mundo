const cachorro = {
  raca: 'SRD',
  uivar: function() {
    console.log('Auuuuuu');
  },
  rosnar: function() {
    console.log('grrrrrr');
  },
  setRaca: function(raca) { //define
    this.raca = raca;
  },
  getRaca: function() {  //imprime
    return `A raça é ${this.raca}`;
  }
}

console.log(cachorro.getRaca());

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.getRaca());

cachorro.setRaca('Doberman');

console.log(cachorro.getRaca());

