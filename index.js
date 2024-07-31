let player = {
    name: "Per",
    chips: 200
}

// Initialize global variables
let cards = []; // Array to store the drawn cards
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Select DOM elements
let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Display player's name and chips
playerEl.textContent = player.name + ": $" + player.chips;

// Function to get a random card value (1-11)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10; // Face cards are worth 10 points
    } else if (randomNumber === 1) {
        return 11; // Ace can be worth 11 points
    } else {
        return randomNumber;
    }
}

// Function to start a new game
function startGame() {
    isAlive = true;
    hasBlackJack = false;
    cards = []; // Reset the cards array
    sum = 0; // Reset the sum

    // Draw two initial cards
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;

    // Render the game state
    renderGame();
}

// Function to render game state
function renderGame() {
    // Display cards
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    // Display sum
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

// drawing a new card function
function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame(); 
    }
}