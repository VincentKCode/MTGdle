/*---- STORED CARDS ----*/
const cardList = [
    {
        cardArtMini: 'images/black-lotus-CUT.jpg',
        cardArtFull: 'images/black-lotus.png',
        cardName: 'Black Lotus',
        color: ['Colorless'],
        cmc: 0,
        type: ['Artifact'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Mana Generator', 'Ramp', 'Self-sacrifice'],
        hint: 'Former record holder for most expensive card...',
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Sol Ring',
        color: ['Colorless'],
        cmc: 1,
        type: ['Artifact'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Mana Generator', 'Ramp'],
        hint: 'Every commander deck has one...'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Rhystic Study',
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw'],
        hint: '"Will you pay the one?"'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Test Idx 3', // placeholder
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw'],
        hint: '"Will you pay the one?"'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Test Idx 4', // placeholder
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw'],
        hint: '"Will you pay the one?"'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Test Idx 5', // placeholder
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw'],
        hint: '"Will you pay the one?"'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'Test Idx 6', // placeholder
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw'],
        hint: '"Will you pay the one?"'
    },
];

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
    hidCard = rndCardPicker(); // currently holding card name in cardList array
    guessCard = {}; // obj for saving cards that have been guessed so player cant select them again
    render();
}

function rndCardPicker() { // WORKING
    let rndCardIdx = Math.floor(Math.random() * cardList.length);
    let rndCard = cardList[rndCardIdx].cardName;
    return rndCard;
}

function render() {
    renderBoard(); // render guessed card squares (try to render guessed card at the end)
    getWinner(); // might make renderHitCard useless
    renderHidCard(); // stay hidden until winner = 1
    renderGuessCount(); // take guessCard.length + 1(correct 0 idx count)
    // renderCardSheet(); // card list cheat sheet for easy mode (might be iceboxxed)
    renderDropMenu(); // card dropdown menu when player types
}

function renderBoard() {

}

function getWinner() {

}

function renderHidCard() {

}

function renderGuessCount() {

}

function renderDropMenu() {

}
