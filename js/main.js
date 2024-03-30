/*----- constants -----*/


/*----- state variables -----*/
let board;
let guessCount;
let winner;
let hidCard; // Hidden card
// let trueAttr; // attributes of hidden card to compare (probably unnecessary)
let guessCard; // guessed cards will be saved in obj, reference guesses by idx or name
// let valMatch; // Matching values of card (might be redundant)

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    board = []; // will contain img for small art and obj for each attribute being compared
    guessCount = 0;
    winner = null; // 1-win, null-game in progress
    hidCard = rndCardPicker();
    guessCard = {}; // obj for saving cards that have been guessed so player cant select them again
    render();
}

function render() {

}

function rndCardPicker() {
    
}