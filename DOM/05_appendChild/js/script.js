let p = document.createElement('p');
let texto = document.createTextNode('Varios NADAS');

p.appendChild(texto);

let $paragrafo = document.querySelector('#paragrafo');
let pai = $paragrafo.parentNode;

//pai.insertBefore(p, $paragrafo); Antes

//pai.appendChild(p); Depois 