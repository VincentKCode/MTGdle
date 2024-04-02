/*---- STORED CARDS ----*/
const cardList = [
    {
        cardArtMini: 'images/black-lotus-CUT.jpg',
        cardArtFull: 'images/black-lotus.png',
        cardName: 'black lotus',
        color: ['Colorless'],
        cmc: 0,
        type: ['Artifact'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Mana Generator', 'Ramp', 'Self-sacrifice', 'Tap Ability'],
        hint: 'Former record holder for most expensive card...',
    },
    {
        cardArtMini: 'images/sol-ring-CUT.jpg',
        cardArtFull: 'images/sol-ring.png',
        cardName: 'sol ring',
        color: ['Colorless'],
        cmc: 1,
        type: ['Artifact'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Mana Generator', 'Ramp', 'Tap Ability'],
        hint: 'Every commander deck has one...'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'rhystic study',
        color: ['Blue'],
        cmc: 3,
        type: ['Enchantment'],
        legendary: false,
        origin: 'Prophecy\n2000',
        keywords: ['Card Draw', 'Mana Tax'],
        hint: '"Will you pay the one?"'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'the one ring',
        color: ['Colorless'],
        cmc: 4,
        type: ['Artifact'],
        legendary: true,
        origin: 'Tales of Middle Earth\n2023',
        keywords: ['Card Draw', 'Self-burn', 'Protection', 'Indestructable', 'Tap Ability'],
        hint: 'Post Malone\'s most expensive card...'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'swords to plowshares',
        color: ['White'],
        cmc: 1,
        type: ['Instant'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Spot Removal', 'Exile', 'Life Gain'],
        hint: 'White commander staple...'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'griselbrand',
        color: ['Black'],
        cmc: 8,
        type: ['Creature'],
        legendary: true,
        origin: 'Avacyn Restored\n2012',
        keywords: ['Flying', 'Lifelink', 'Card Draw', 'Pay Life', 'Activated Ability'],
        hint: 'Makes Sheoldred look weak in comparison...'
    },
    {
        cardArtMini: '',
        cardArtFull: '',
        cardName: 'lightning bolt',
        color: ['Red'],
        cmc: 1,
        type: ['Instant'],
        legendary: false,
        origin: 'Alpha\n1993',
        keywords: ['Burn', 'Any Target'],
        hint: '"____ the bird..."'
    },
];

/*----- constants -----*/
const CARD_BACK = '' // link img for card back when added
let MAX_GUESS; // add max guess number when finished for init function

/*----- state variables -----*/
let board;
let guessCount;
let winner;
let hidCard; // Hidden card
// let trueAttr; // attributes of hidden card to compare (probably unnecessary)
let guessCards; // guessed cards will be saved in an array, reference guesses by idx or name
let matchVals; // Matching values of card (might be redundant)
let arrMatches;

/*----- cached elements  -----*/
let textInputEl = document.getElementById('search-bar');
const gameTimerEl = document.getElementById('timer');
const guessCountEl = document.querySelectorAll('.guess-count');
const replayBtnEl = document.querySelector('button');
const cardGridEl = document.getElementById('card-grid');

/*----- event listeners -----*/
textInputEl.addEventListener('keypress', handleGuess);

/*----- initialize functions -----*/
init();

function init() {
    board = []; // will contain img for small art and obj for each attribute being compared
    guessCount = 0;
    winner = null; // 1-win, null-game in progress
    hidCard = rndCardPicker(); // currently holding card object from cardList array
    guessCards = []; // obj for saving cards that have been guessed so player cant select them again
    matchVals = {}; // obj for saving results of card guess and what parts match the secret card
    arrMatches = []; // not functioning correctly when initialized in compareArrs function
    render();
}

function rndCardPicker() { // WORKING
    // let rndCardIdx = Math.floor(Math.random() * cardList.length);
    // let rndCard = cardList[rndCardIdx];
    // // alert(rndCard);
    // return rndCard;

    return cardList[0]; // set to Black Lotus for attr match testing
}

/*----- render functions -----*/
function render() {
    renderBoard(); // render guessed card squares (try to render guessed card at the end)
    getWinner(); // might make renderHitCard useless
    renderHidCard(); // stay hidden until winner = 1
    renderGuessCount(); // take guessCards.length + 1(correct 0 idx count)
    // renderCardSheet(); // card list cheat sheet for easy mode (might be iceboxed)
    renderDropMenu(); // card dropdown menu when player types
    // matchVals = {}; // reset matchVals for new input on next guess
}

function renderBoard() {
    let newCard = guessCards[guessCards.length - 1];
    // create new row in grid
    newRow(newCard); 
}

function getWinner() {

}

function renderHidCard() {

}

function renderGuessCount() {

}

// probably not a render function
function renderDropMenu() {
}
/*----- End of render functions -----*/

/*----- Functions -----*/
function handleGuess(evt) {
    if (evt.key !== 'Enter') return;
    evt.preventDefault();
    guessCount++;
    let cardGuess = textInputEl.value.toLowerCase();
    // alert(typeof(cardGuess)); // placeholder function test
    nameFilter(cardGuess);
    return cardGuess;
}

// match cardList card obj to input name
function nameFilter(cardGuess) {
    for (const card of cardList) {
        // need to make current card name a variable for equality to work properly for some reason
        let listCard = card.cardName;
        // check for winner
        if (hidCard.cardName === cardGuess) {
            // console.log('WINNER');
            guessCards.push(card);
            compareCards(card);
            break;
        // name input to card in list array
        } else if (listCard === cardGuess) {
            // console.log(listCard);
            guessCards.push(card);
            compareCards(card);
        } 
    }
    return matchVals;
}

// access attributes of wrong card guess for comparison
function compareCards(cardObj) {
    // console.log('path true');
    for (let attr in cardObj) {
        let secAttrKey = hidCard[attr];
        // check for non array values
        if (cardObj[attr] === secAttrKey) {
            matchVals[`${attr}`] = true;
            // console.log(`${attr} | ${cardObj[attr]} = true`);
            // check array for matches
        } else if (typeof(cardObj[attr]) === "object") {
            compareArrs(cardObj[attr], secAttrKey, attr)
            // no match
        } else {
            matchVals[`${attr}`] = false;
            // console.log(`${attr} | ${cardObj[attr]} = false`);
        }
    }
}

                  //  array | hidcard arr | key
function compareArrs(attrArray, secArray, refAttr) {    
    let i = 0;
    // WORKING // checks attributes containing arrays for individual matches
    while(i < secArray.length) {
        if (attrArray.includes(secArray[i])) {
            arrMatches.push(`${secArray[i]}`);

            // console.log(`${refAttr} includes ${secArray[i]}`);
            // console.log(attrArray);
        } 
        i++;
    }
    matchVals.arrayValues = arrMatches; // add array items to matchVals to color the squares
}

// Row creation function
function newRow(newCard) {
    const newSect = document.createElement('section');
    // add individual divs to show information
    

    cardGridEl.appendChild(newSect);
}