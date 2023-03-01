const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => {
    btn.addEventListener("click", filtrarLivros);
})

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoriaBtn = elementoBtn.value;
    let livrosFiltrados = categoriaBtn == 'disponivel' ? filtraPorQuantidade() : filtraPorCategoria(categoriaBtn);
    exibeLivros(livrosFiltrados);
    if(categoriaBtn == 'disponivel') {
        const valorTotal = calculaValorTotalDosLivros(livrosFiltrados);
        exibeValorTotalDosLivros(valorTotal);
    }
}

function exibeValorTotalDosLivros(valorTotal) {
    bannerValorTotalDosLivros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
        `;
}

function filtraPorCategoria(categoriaBtn) {
    return livros.filter(livro => livro.categoria == categoriaBtn);
}

function filtraPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0);
}