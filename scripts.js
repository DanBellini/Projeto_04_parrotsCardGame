let cards;
let statusGame = 0;
let finish = 0;
var countMoves = 0;
var counthits = 0;

let library = [
  "./imagens/bobrossparrot.gif",
  "./imagens/explodyparrot.gif",
  "./imagens/fiestaparrot.gif",
  "./imagens/metalparrot.gif",
  "./imagens/revertitparrot.gif",
  "./imagens/tripletsparrot.gif",
  "./imagens/unicornparrot.gif"
];

let cardsrandom = [];
let cardflip = [];

howManyCards();

cardsInGame();

randomSequence();

function howManyCards() {
  cards = Number(prompt("Com quantas cartas vocês quer jogar? \nEscolha um numero par, entre 4 e 14"));
  while (cards > 14 || cards < 4 || cards % 2 !== 0 || cards == NaN) {
    cards = Number(prompt("Por favor, escolha com cartas vocês quer jogar? \nEscolha um numero par, entre 4 e 14"));
  }
  finish = cards;
}

function cardsInGame() {
  let i = 0;
  cards = cards / 2 - 1;
  while (i <= cards) {
    let bodyCard = `
            <div onclick="cardSelect(this)" class="card">
                    <img class="parrot hidden" src="${library[i]}">
            </div>`;

    cardsrandom.push(bodyCard);
    cardsrandom.push(bodyCard);
    i++;
  }
}

function randomSequence() {
  cardsrandom.sort(comparador);
  let i = 0;
  cards = cards * 2 + 1;
  while (i <= cards) {
    let inGame = document.querySelector(".game");
    inGame.innerHTML = inGame.innerHTML + cardsrandom[i];
    i++;
  }
}

function comparador() {
  return Math.random() - 0.5;
}

function cardSelect(element) {
  cardflip.push(element);

  if (cardflip.length < 3) {
    element.classList.add("flip");
    element.querySelector(".parrot").classList.remove("hidden");
    countMoves++;

    if (cardflip.length === 2) {
        let firstCard = cardflip[0];
        let secondCard = cardflip[1];
        let value1 = firstCard.querySelector(".parrot").getAttribute("src");
        let value2 = secondCard.querySelector(".parrot").getAttribute("src");
        
        let equals = value1 === value2

        if (equals === true) {
        cardflip = [];
        counthits +=2;
        } else if (equals === false){
            setTimeout(function () {
                firstCard.classList.remove("flip");
                firstCard.querySelector(".parrot").classList.add("hidden");

                secondCard.classList.remove("flip");
                secondCard.querySelector(".parrot").classList.add("hidden");

                cardflip = [];
            }, 1000);
        }
    }
    if(counthits === finish){
        finalizaJogo();
    };
  }
}
function finalizaJogo(){
    setTimeout(function(){
        alert("Você ganhou em " + countMoves + " jogadas");
    }, 500);
}
