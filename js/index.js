document.getElementById("btn").addEventListener('click', ()=>{
    pegarId()
})

async function criarBaralho(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta =  await fetch(url)
    return await resposta.json()
}

async function selecionarCartaAleatoria(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resposta = await fetch(url)
    return  await resposta.json();
}

async function pegarId(){
    const baralho =  await criarBaralho()
    const carta = await selecionarCartaAleatoria(baralho.deck_id)
    const imagem = carta.cards[0].image
    document.querySelector(".carta-1").src = imagem

    const baralho2 =  await criarBaralho()
    const carta2 = await selecionarCartaAleatoria(baralho2.deck_id)
    const imagem2 = carta2.cards[0].image
    document.querySelector(".carta-2").src = imagem2

    if(carta.cards[0].suit === carta2.cards[0].suit){
        document.querySelector(".resultado").innerHTML = "<h1>Parabéns!! Voce ganhou!!</h1>"
    }else{
        document.querySelector(".resultado").innerHTML = "<h1>Que pena, perdeu!!</h1>"
     }
}



pegarId()