import { nome, sobrenome } from './export.js';

const nomes = function () {
  document.querySelector('h1').innerHTML += " " + nome + " " + sobrenome;
  return console.log(nome);
}
let carro = 'hb20'



export { nomes, carro };