

function search() {

    let main = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("pesquisa").value

    if (!campoPesquisa) {
        main.innerHTML = "<span>Pesquise um agente</span>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados'.

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <section id="conteudo">
                <div class="personagem">
                    <h2 class="nome-personagem">
                        ${dado.titulo}
                    </h2>
                    <div class="descricao-personagem">
                        <p>
                            ${dado.descricao}
                        </p>
                    </div>
                    <div class="informacoes">
                        <a href=${dado.link} target="_blank"> Mais informações</a>
                    </div>
                </div>
            </section>
        `;
        }
    }

    if (!resultados) {
        resultados = "<span>Nada foi encontrado</span>"
    }

    // Atribui os resultados gerados à seção HTML
    main.innerHTML = resultados;
}