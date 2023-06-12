// Lista de conteúdo
let listaCha = [
    {
        "nome": "Hortelã",
        "img": "assets/hortela.png",
        "descricao": "Melhora a digestão e tem efeito calmante, antioxidante e anti-inflamatório."
    },
    {
        "nome": "Gengibre",
        "img": "assets/gengibre.png",
        "descricao": "O gengibre ajuda a relaxar os músculos do estômago combatendo má digestão, náuseas e vômitos. Além disso, o gengibre também atua como antioxidante e anti-inflamatório, prevenindo e tratando doenças, como pressão alta, refluxo, artrite."
    },
    {
        "nome": "Eucalipto",
        "img": "assets/eucalipto.png",
        "descricao": "O chá de eucalipto é muito usado para aliviar os sintomas de gripe e resfriado, além de ajudar a eliminar as secreções pulmonares acumuladas durante a bronquite."
    },
    {
        "nome": "Canela",
        "img": "assets/canela.png",
        "descricao": "A canela é uma especiaria aromática rica em flavonoides, como eugenol, hesperidina e linaool, que têm propriedades anti-inflamatórias e antioxidantes, ajudando na prevenção de doenças cardiovasculares, câncer e diabetes."
    },
    {
        "nome": "Camomila",
        "img": "assets/camomila.png",
        "descricao": "A camomila possui propriedades anti-inflamatória e antiespasmódica, controlando a produção de ácidos no estômago e ajudando a combater náuseas, má digestão e gases, e prevenir situações, como gastrite e úlceras gástricas."
    },
    {
        "nome": "Alecrim",
        "img": "assets/alecrim.png",
        "descricao": "O alecrim ajuda a melhorar a digestão, aliviar a dor de cabeça, eliminar a retenção de líquidos e combater o cansaço frequente. Além disso, também protege a saúde do fígado, melhora a circulação e favorece o crescimento do cabelo."
    }
]

// Posição dos itens da lista de conteúdo
listaCha.map((cha, posicao)=> {
    let cardCha = document.getElementById("cards");
    cardCha.innerHTML += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${cha.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cha.nome}</h5>
                    <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
})

// Modal
function zoomImg(posicao){
    let chaSelecionado = listaCha[posicao];
    document.getElementById("nomeCha").innerHTML = chaSelecionado.nome;
    document.getElementById("descricaoCha").innerHTML = chaSelecionado.descricao;
    document.getElementById("imgModal").src = chaSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}
