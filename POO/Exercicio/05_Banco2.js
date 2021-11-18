class Conta {
  constructor(saldoCC, saldoCP, jurosCP){
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.jurosCP = jurosCP;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
    this.saldoCC -= valor;
  }

  transferirPTC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }
  transferirCTP(valor) {
    this.saldoCP += valor;
    this.saldoCC -= valor;
  }

  jurosAnive() {
    let juros = (this.saldoCP * this.jurosCP) / 100;
    this.saldoCP += juros;
  }
}

let conta = new Conta(2000, 1000, 1)

conta.saque(20)
conta.transferirCTP(50)
console.log(conta)


class ContaEspecial extends Conta {
  constructor(saldoCC, saldoCP, jurosCP){
    super(saldoCC, saldoCP, jurosCP*2)
  }
}

let conta2 = new ContaEspecial(1000, 2000, 1)

console.log(conta)

conta.jurosAnive()

console.log(conta)