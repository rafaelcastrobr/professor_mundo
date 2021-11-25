const usuario = /^(?=.{3,16}$)[\w]/;
console.log(usuario.test('a'))