function verificarNum(num) {
  new Promise((resolve, reject) => {
    if(num == 2) {
      resolve(console.log("O numero é o 2"));
    } else { 
      reject(new Error(console.log("Falhou")))
    }
  })
}

verificarNum(2)
verificarNum(4)
