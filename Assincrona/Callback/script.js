function newButton(text, callback) {
  const $body = document.querySelector('body');
  const $button = document.createElement('button');
  $button.textContent = text;
 
  callback($button);
  
  $body.insertAdjacentElement('beforeend', $button);

  return $button;
}

newButton('Login', (button) => {
  button.style.cssText = `
  font-size: 100px;
  text-transform: uppercase;`
  button.addEventListener('click', () => {
    console.log('Callback, cliquei')
  })
});
newButton('Signup', () => {
  console.log('Funcionou, estamos dentro da func newButton - Signup')
});
