const onibus = {
  rodas: 8,
  passageiros:40,
  portas:2
}

console.log('rodas ' + onibus.rodas);
console.log('passageiros ' + onibus.passageiros);
console.log('portas ' + onibus.portas);


onibus.janelas = 20;

console.log('janelas ' + onibus.janelas)

delete onibus.rodas;

console.log(onibus.rodas)