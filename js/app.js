let valorTotal = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function carrinhoZerado() {
    exibirTextoNaTela("valor-total", "")
    exibirTextoNaTela("lista-produtos", "")
}
carrinhoZerado()

function adicionar() {
    let produto = document.querySelector("select").value;
    let quantidade = document.querySelector("input").value;
    let item = produto.split(" - R$");
    let valor = item[1] * quantidade;
    let adicionaValor = valorTotal.push(valor);
    let somaValorTotal = valorTotal.reduce((accumulator,value) => accumulator + value,0);
    
    
    let resumoCarrinho = document.getElementById(`lista-produtos`);
    resumoCarrinho.innerHTML = resumoCarrinho.innerHTML + (`lista-produtos`, ` <section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantidade}x </span> ${item[0]} <span class="texto-azul">R$${valor}</span>
    </section>`);
    exibirTextoNaTela(`valor-total`, `R$${somaValorTotal}`);

}

function limpar(){
    valorTotal = [];
    carrinhoZerado();
}

    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce 
