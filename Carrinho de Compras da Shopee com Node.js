// Sistema de Carrinho de Compras inspirado na Shopee usando Node.js

const carrinho = [];

function adicionarProduto(produto, quantidade, preco) {
    carrinho.push({ produto, quantidade, preco });
    console.log(`${quantidade}x ${produto} foi adicionado ao carrinho.`);
}

function removerProduto(produto) {
    const index = carrinho.findIndex(item => item.produto === produto);
    if (index !== -1) {
        carrinho.splice(index, 1);
        console.log(`${produto} foi removido do carrinho.`);
    } else {
        console.log(`${produto} não foi encontrado no carrinho.`);
    }
}

function modificarQuantidade(produto, novaQuantidade) {
    const item = carrinho.find(item => item.produto === produto);
    if (item) {
        item.quantidade = novaQuantidade;
        console.log(`A quantidade de ${produto} foi modificada para ${novaQuantidade}.`);
    } else {
        console.log(`${produto} não foi encontrado no carrinho.`);
    }
}

function calcularTotal() {
    let total = 0;
    carrinho.forEach(item => {
        total += item.quantidade * item.preco;
    });
    return total;
}

// Exemplo de interação com o sistema
adicionarProduto('Camiseta', 2, 25);
adicionarProduto('Calça', 1, 50);
console.log('Total do Carrinho:', calcularTotal());
removerProduto('Camiseta');
console.log('Total do Carrinho:', calcularTotal());
modificarQuantidade('Calça', 3);
console.log('Total do Carrinho:', calcularTotal());
