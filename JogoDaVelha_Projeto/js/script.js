let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

  // quando alguém clica na caixa
  boxes[i].addEventListener('click', function () {

    let el = checkEl(player1, player2);


    // verifica se já tem x ou o
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      //computar jogada
      if (player1 == player2) {
        player1++;
        if (secondPlayer == 'ai-player') {
          //funcao
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      // checa quem venceu
      checkWinCondition();


    }
  });
}

// evento para saber se pvp ou pvc
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    secondPlayer = this.getAttribute('id');

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = 'none';
    }

    setTimeout(function () {
      let container = document.querySelector('#container');
      container.classList.remove('hide');
    }, 500);
  })
}

//ver quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    // x
    el = x;
  } else {
    // o
    el = o;
  }

  return el;
}

// ve quem ganhou
function checkWinCondition() {
  let b1 = document.querySelector('#block-1');
  let b2 = document.querySelector('#block-2');
  let b3 = document.querySelector('#block-3');
  let b4 = document.querySelector('#block-4');
  let b5 = document.querySelector('#block-5');
  let b6 = document.querySelector('#block-6');
  let b7 = document.querySelector('#block-7');
  let b8 = document.querySelector('#block-8');
  let b9 = document.querySelector('#block-9');

  //horizontal
  if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    let b1child = b1.childNodes[0].className;
    let b2child = b2.childNodes[0].className;
    let b3child = b3.childNodes[0].className;
    console.log(b1.childNodes[0])
    if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
      //x
      declaraWinner('x')
    } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    let b4child = b4.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b6child = b6.childNodes[0].className;

    if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
      //x
      declaraWinner('x')
    } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
      //o
      declaraWinner('o')
    }
  }


  if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b7child = b7.childNodes[0].className;
    let b8child = b8.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
      //x
      declaraWinner('x');
    } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
      //o
      declaraWinner('o');
    }
  }

  //horizontal
  if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
      //x
      declaraWinner('x');
    } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    let b2child = b2.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b8child = b8.childNodes[0].className;

    if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
      //x
      declaraWinner('x')
    } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b3child = b3.childNodes[0].className;
    let b6child = b6.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
      //x
      declaraWinner('x')
    } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  //diagonal
  if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    let b1child = b1.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
      //x
      declaraWinner('x')
    } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    let b3child = b3.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
      //x
      declaraWinner('x')
    } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
      //o
      declaraWinner('o')
    }
  }

  // deu velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declaraWinner('deu velha')
  }
}

//limpa o jogo declara o vencedor
function declaraWinner(winner) {
  let scoreboardX = document.querySelector('#scoreboard-1');
  let scoreboardY = document.querySelector('#scoreboard-2');
  let msg = '';

  if (winner == 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O jogador 1 vence!";
  } else if (winner == 'o') {
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = "O jogador 2 vence!";
  } else {
    msg = "Deu Velha!";
  }

  //exibe msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // esconde msg
  setTimeout(function () {
    messageContainer.classList.add("hide");

    // remove x e o
    let boxToRemove = document.querySelectorAll('.box div');
    for (let i = 0; i < boxToRemove.length; i++) {
      boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
    }
  }, 1500);

  // zera as jogadas
  player2 = 0;
  player1 = 0;



}

// executar a logica da jogada do cpu
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    //só preencher se estiver vazio o filho
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      //checando de quantas estão preenchidas
    }else {
      filled++;
    }
  }

  if(counter == 0 && filled < 9) {
    computerPlay();
  }
}