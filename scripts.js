let cards;
let statusGame = "";
let finish = 0;
let countMoves = 0;
let counthits = 0;
let timeseconds = 0;
let interval;

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
  statusGame = "jogando";


  if(statusGame === "jogando"){
      clearInterval(interval);
      interval = setInterval(timer, 1000);
  }
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
        finishGame();
    };
  }
}
function finishGame(){
    statusGame = "ganhou";
    setTimeout(function(){
        alert(`Você ganhou em ${countMoves} jogadas!!\nDentro de ${timeseconds} segundos`);
        restartGame();
    }, 500);
    clearInterval(interval);
    
}

function showTime(timeseconds){
    let timer = document.querySelector(".timer");

    timer.innerText = "";
    timer.innerText = timeseconds;

    let body = document.querySelector('body');
    body.appendChild(timer);
}
function timer(){
    timeseconds++;
    showTime(timeseconds);
}
function restartGame(){
    let restart = prompt("Você quer reiniciar o jogo?");

    if(restart !== "sim" || restart !== "não"){
        while(restart !== "sim" && restart !== "não"){
            restart = prompt("Para reiniciar o jogo, digite a palavra sim\nSe não quiser, por favor digite não");
        };
    }
    if( restart == "sim"){
        resetLets();

        howManyCards();

        cardsInGame();

        randomSequence();
    }
}
function resetLets(){
    let game = document.querySelector(".game");
    game.innerHTML = "";
    
    library = [
        "imagens/bobrossparrot.gif",
        "imagens/explodyparrot.gif",
        "imagens/fiestaparrot.gif",
        "imagens/metalparrot.gif",
        "imagens/revertitparrot.gif",
        "imagens/tripletsparrot.gif",
        "imagens/unicornparrot.gif"
    ];

    cards;
    statusGame = "";
    finish = 0;
    countMoves = 0;
    counthits = 0;
    timeseconds = 0;
    interval;
    cardsrandom = [];
    cardflip = [];
}