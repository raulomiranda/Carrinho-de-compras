let carrinho = [];
let valorTotal = [];

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function carrinhoZerado() {
    exibirTextoNaTela("valor-total", "")
    exibirTextoNaTela("lista-produtos", "Carrinho vazio")
}
//carrinhoZerado()

function adicionar() {
    let produto = document.querySelector("select").value;
    let quantidade = document.querySelector("input").value;
    let item = produto.split(" - R$");
    let adicionarItem = carrinho.push(`${quantidade}x ${item[0]}`);
    let valor = item[1] * quantidade;
    let adicionaValor = valorTotal.push(valor);
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
    var somaValorTotal = valorTotal.reduce((accumulator,value) => accumulator + value,0);

    console.log(carrinho, valorTotal);
    exibirTextoNaTela(`valor-total`, `R$${somaValorTotal}`)
    }
    
    //console.log(`${quantidade}x de ${produto}`);


function limpar(){
    carrinho = [];
    valorTotal = [];
    carrinhoZerado();
    console.log(carrinho);
}