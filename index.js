 //player details//
 let player = {
    name: "Alutta",
    chips: 200
}

//variables
let cards = []; // Array to hold the player's cards
let sum = 0; // Total sum of the player's cards
let hasBlackJack = false; 
let isAlive = true;
let message = "";

// DOM elements
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

// Function to start a new game
function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = [];  // Clear the cards array
    sum = 0;  // Reset the sum

    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    
    renderGame(); // Update the UI with the current game state
}


function renderGame() {
    // Update the cards display
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

    messageEL.textContent = message; // Display the message to the player
}

// Allow drawing a new card only if the player is alive and does not have Blackjack
function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard(); // Get a new random card
        sum += card;
        cards.push(card);
        renderGame(); 
    }
}