const novoUsuario = {
  nome: 'Rafael',
  idade: 80,
  pais: 'Brasil',
  youtube: 'Programador a Bordo'
};

let { nome: primeiroNome, youtube: canal } = novoUsuario;

//console.log(typeof primeiroNome, typeof canal)


const novoUsuario2 = {
  nome: {
    primeiro: 'Rafael',
    segundo: 'Passos',
    ultimo: 'Castro'
  }
};

let { nome: {primeiro}} = novoUsuario2;
//console.log(primeiro);

//!                     default
let { nome: {segundo = 'Teshima'}} = novoUsuario2;
//console.log(segundo)


function imprimeUsuario({nome, idade, sexo, pais = 'Brasil'}) {
  console.log(nome)
  console.log(idade)
  console.log(sexo)
  console.log(pais)

}

const usarioFunction = {
  nome: {
    primeiro: 'Fabio',
    ultimo: 'Castro'
  },
  idade: 22,
  sexo: 'M',
  pais: 'Japão'
}

let {nome: {primeiro: PriNome} } = usarioFunction;
//console.log(PriNome)

//imprimeUsuario(usarioFunction)

//!retorna chaves
//console.log(Object.keys(usarioFunction));

//!retorna valores das chaves
//console.log(Object.values(usarioFunction));


let props = Object.keys(usarioFunction);
//console.log(props);

for (let i = 0; i<props.length; i++) {
  //console.log(props[i])
  //console.log(usarioFunction[props[i]])
}

for (let prop of props) {
  //console.log('usuarioFunction', usarioFunction[prop])
}

for (let prop2 in usarioFunction) {
  if (usarioFunction.hasOwnProperty(prop2)) {
    console.log(prop2, usarioFunction[prop2])
  }
}