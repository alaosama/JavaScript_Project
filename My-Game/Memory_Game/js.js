// Game Variables

let cards = document.querySelector(".card");
let cardArray = [...cards];
let flipppedCard = false;
let lockCard = false;
let firstCard, secondCard;

// Shuffle the cards

function shuffle() {
    cardArray.forEach((card) => {
        let randomIndex = Math.floor(Math.random() * cardArray.length);
        card.style.order = randomIndex;
        card.children[1].style.backgroundImage = `url(${card.getAttribute(
            "data-image"
        )})`;
    });
}

// Flip a card

// Check for a match

// Disable matched cards

// Unflip non-matched cards

// Reset the game boord

// Start the game
