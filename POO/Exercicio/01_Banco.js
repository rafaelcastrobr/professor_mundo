class Banco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  verSaldo() {
    console.log(`Seu saldo é: R$ ${this.saldo}`)
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

//Banco.prototype.saldo = new Banco(0);

const bradesco = new Banco(0);

bradesco.deposito(1);
bradesco.verSaldo();
bradesco.deposito(50);
bradesco.verSaldo();
bradesco.saque(20);
bradesco.verSaldo()