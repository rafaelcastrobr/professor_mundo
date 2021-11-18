class Carrinho {
  constructor(itens, qtd, valorT) {
    this.itens = itens;
    this.qtd = qtd;
    this.valorT = valorT;
  }

  addItem(item) {

    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd == item.qtd;
        contador = 1;
      }
    }

    if (contador == 0) {
      this.itens.push(item);
    }

    this.qtd += item.qtd;
    this.valorT += item.preco * item.qtd;
  }

  removeItem(item) {

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {

        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function(obj) { return obj.id == item.id })

        
        this.qtd -= this.itens[itemCarrinho].qtd;
        this.valorT -= this.itens[itemCarrinho].id * this.itens[itemCarrinho].qtd;
        
        this.itens.splice(index, 1);
      }
    }
  }
}

const carrinho1 = new Carrinho([
  {
    id: 1,
    nome: "Camisa",
    qtd: 1,
    preco: 20
  },
  {
    id: 2,
    nome: "Calça",
    qtd: 2,
    preco: 50
  }
], 3, 120);


carrinho1.addItem({ id: 03, nome: "Boné", qtd: 2, preco: 18 })
console.log(carrinho1)



carrinho1.removeItem({ id: 03, nome: "Boné", qtd: 2, preco: 18 })
console.log(carrinho1)