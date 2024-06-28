

var leitor = require('readline-sync')
class Produto {
    nome: string
    precoComprado: number 
    precoVendido: number
    marca: string
    constructor(nome: string, precoComprado: number, precoVendido: number,  marca: string){
    this.nome = nome 
    this.precoComprado = precoComprado
    this.precoVendido = precoVendido
    this.marca = marca
    }
    calculoLucro(): void{
        let lucro = this.precoVendido - this.precoComprado
        console.log(`O lucro da venda é ${lucro}`)
    }
    getProduto(): void{
        console.log(`O produto é ${this.nome}, a marca do produto é ${this.marca}, o preço do produto é ${this.precoComprado} e o preço vendido é ${this.precoVendido}`)
    }
    setProduto(): void{
        const nomeEs = leitor.question(`Qual o nome do produto?`)
        const marcaEs = leitor.question(`Qual a marca do produto?`)
        const precoEs = leitor.question(`Qual o preço do produto?`)
        const precoCom = leitor.question(`Qual o preco comprado para a revenda do produto?`)
        this.nome = nomeEs
        this. marca = marcaEs
        this.precoVendido = precoEs 
        this.precoComprado = precoCom
    }
}

class Venda {
    produto: produto
    quantidade: number 
    valorTotal: number 
    dataCompra: string
    constructor(produto: produto, quantidade: number, valorTotal: number, dataCompra: string ){
        this.produto = produto
        this.quantidade = quantidade 
        this.valorTotal = valorTotal 
        this.dataCompra = dataCompra 
    }
   getVenda(): void{
    let valorCompra = this.produto.precoVendido * this.quantidade 
    console.log(`O produto selecionado foi ${produto}, a quantidade do produto foi ${this.quantidade}, a data da compra foi feita ${this.dataCompra} e o valor total da compra foi ${valorCompra}`)
   }
   setVenda(): void{
    this.produto.setProduto()
    let QuantidadeEs = leitor.question(`Qual a quantidade do produto?`)
    this.quantidade = QuantidadeEs
   }
}
let compra = new Produto('Celular', 100, 150, 'teste')
let todaVenda = new Venda(compra, 2, 0, '22/07/2008' )