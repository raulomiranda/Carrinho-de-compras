let carrinho = [];

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
    let adicionar = carrinho.push(produto);

    if(quantidade > 1){
        adicionar * quantidade;
    }else{
        adicionar
    }
        
    console.log(carrinho);
    
    console.log(`${quantidade}x de ${produto}`);
}


function limpar(){
    carrinho = [];
    carrinhoZerado();
    console.log(carrinho);
}