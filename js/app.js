let carrinho = [];



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
    carrinho = []
    console.log(carrinho)
}