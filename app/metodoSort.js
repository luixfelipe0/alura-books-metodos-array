let btnOrdenarPorPreco = document.getElementById ('btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener("click", ordenaLivros);

function ordenaLivros() {
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco);
    exibeLivros(livrosOrdenados);
}