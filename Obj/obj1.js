const usuario = {
  nome: 'Rafael',
  idade: 26,
  youtube: 'Programador',
  hobbies: ['Musica', 'Programar', 'Vijar'],
  falar(nome) {
    return console.log(`Olá, me chamo ${nome}`)
  }
};


usuario.cor = 'branca'; // adiciona 
delete usuario.idade; // deleta
//usuario.falar(usuario.nome);


let cor = 'azul';
const usuario3 = {
  nome: 'Rafael',
  cor
};

//console.log(usuario3);


const usuario4 = {
  nome: 'Rafael',
  idade: 30
}

const extraInfo = {
  pais: 'Brasil',
  estado: 'Rio de Janeiro'
}
//!                            novo obj  usuarios a serem cop
const novoUser = Object.assign({},        usuario4, extraInfo);

//console.log(novoUser);

const novoUser2 = {
  ...usuario4,
  ...extraInfo,
    sexo: 'M',
    profissiao: 'Programador'
};

//console.log(novoUser2)

let nomeVariavel = 'Estado';
const usuario5 = {
  nome: 'Rafael',
  [nomeVariavel]: 'Rio de Janeiro' //! colchetes alteram nome do objeto
}

//console.log(usuario5)

const usuarios = [{
  nome: 'Rafael',
  idade: 20
}, 
{
  nome: 'Joao',
  idade: 22
}, 
{
  nome: 'Pablo',
  idade: 18
}]

//console.log(usuarios[1].idade);

let user = {
  posicao: 0,
  get atual() {  //!retornar um valor
    return usuarios[this.posicao]
  },
  set atual(posicao) { //!definir um valor
    this.posicao = posicao;
  },
  proximo() {
    ++this.posicao;
  },
  anterior() {
    --this.posicao
  }
};

console.log(user.atual)
user.proximo();

console.log(user.atual)

user.proximo();
console.log(user.atual)

user.anterior();
console.log(user.atual)

user.atual = 0;
console.log(user.atual)

user.atual = 2;
console.log(user.atual)

