let p = document.createElement('h1');
let texto = document.createTextNode('Varios NADAS');

p.appendChild(texto);

let $paragrafo = document.querySelector('#paragrafo');
let pai = $paragrafo.parentNode;


pai.replaceChild(p, $paragrafo)