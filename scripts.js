
    let cards
let card1 = {
    imagem: `<img src="./imagens/bobrossparrot.gif">`
};
let card2 = {
    imagem: `<img src="./imagens/explodyparrot.gif">`
};
let card3 = {
    imagem: `<img src="./imagens/fiestaparrot.gif">`
};
let card4 = {
    imagem: `<img src="./imagens/metalparrot.gif">`
};
let card5 = {
    imagem: `<img src="./imagens/revertitparrot.gif">`
};
let card6 = {
    imagem: `<img src="./imagens/tripletsparrot.gif">`
};
let card7 = {
    imagem: `<img src="./imagens/unicornparrot.gif">`
};

const library = [card1, card2, card3, card4, card5, card6, card7];

let cardsrandom = []



howManyCards()

cardsInGame()

randomSequence()

function howManyCards (){
    cards = Number(prompt("Com quantas cartas vocês quer jogar? Escolha um numero par, entre 4 e 14"));
    while (cards > 14 || cards < 4 || cards % 2 !== 0 || cards == NaN){
        cards = Number(prompt("Com quantas cartas vocês quer jogar? Escolha um numero par, entre 4 e 14"));
    }
}

function cardsInGame (){
    let i = 0
    cards = cards/2 -1
    while(i <= cards){

        let bodyCard =`
        <div class="card">
            <div class="front-face face">
                <img src="./imagens/front.png">
            </div>
            <div class="back-face face">
                ${library[i].imagem}
            </div>
        </div>`;

    cardsrandom.push(bodyCard)
    cardsrandom.push(bodyCard)
    i++
    }
}

function randomSequence (){
    cardsrandom.sort(comparador)
    let i =0
    console.log(cards)
    cards = cards*2 + 1;
    while (i <= cards){
        inGame = document.querySelector(".game")
        inGame.innerHTML = inGame.innerHTML + cardsrandom[i]
        i++
    }
    
}

function comparador() { 
        return Math.random() - 0.5; 
}
