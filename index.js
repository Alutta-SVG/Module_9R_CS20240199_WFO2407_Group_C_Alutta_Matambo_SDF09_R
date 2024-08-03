 //player details//
 let player = {
    name: "Alutta",
    chips: 200
}

//elements//
let cards = []; 
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";


let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


playerEl.textContent = player.name + ": $" + player.chips;

//functions//
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10; 
    } else if (randomNumber === 1) {
        return 11; 
    } else {
        return randomNumber;
    }
}


function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [];
    sum = 0; 

    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    
    renderGame();
}


function renderGame() {
    
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEL.textContent = message;
}


function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame(); 
    }
}