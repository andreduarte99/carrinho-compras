let totalGeral;


function adicionar(){
    //recuperar valores nome do produto, quanditdade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(quantidade.value);
    //alert(preco);
    //adicionar carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}

/*
Utilizar a função split() no JavaScript, para separar trechos de uma String por um determinado delimitador;

Recuperar valores digitados em campos de um formulário na página, via propriedade value;

Modificar o código HTML de um elemento na página, via propriedade `innerHTML;

Utilizar o recurso de Template String do JavaScript, para concatenar valores de variáveis em String.
*/