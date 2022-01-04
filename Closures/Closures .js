
function imprimeNome() {
  let nome = 'Rafael';
  return function() {
    return nome;
  }
}

let func = imprimeNome();
//console.log(func());
//console.log(func());
//console.log(func());
//console.log(func());

function minhaBiblioteca() {
  function auxiliar(valor) {
    return 10 + valor;
  }
  return {
    add5() {
      return auxiliar(5)
    },
    add7() {
      return auxiliar(7)
    }
  }
}

let biblioteca = minhaBiblioteca()

//console.log(biblioteca.add5())
//console.log(biblioteca.add7())
//console.log(biblioteca)



function imprimeNomeCompleto(nome) {
  return function() {
    console.log(nome + ' Castro')
  }
}

function inicializa() {
  let nome = 'Rafael';
  setTimeout(imprimeNomeCompleto(nome), 1000);
}

inicializa()
