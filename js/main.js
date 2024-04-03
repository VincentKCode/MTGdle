/*---- STORED CARDS ----*/
const cardList = [
  {
    cardArtMini: "images/black-lotus-CUT.jpg",
    cardArtFull: "images/black-lotus.png",
    cardName: "black lotus",
    color: ["Colorless"],
    cmc: 0,
    type: ["Artifact"],
    legendary: false,
    origin: "Alpha\n1993",
    keywords: ["Mana Generator", "Ramp", "Self-sacrifice", "Tap Ability"],
    hint: "Former record holder for most expensive card...",
  },
  {
    cardArtMini: "images/sol-ring-CUT.jpg",
    cardArtFull: "images/sol-ring.png",
    cardName: "sol ring",
    color: ["Colorless"],
    cmc: 1,
    type: ["Artifact"],
    legendary: false,
    origin: "Alpha\n1993",
    keywords: ["Mana Generator", "Ramp", "Tap Ability"],
    hint: "Every commander deck has one...",
  },
  {
    cardArtMini: "images/rhystic-study-CUT.jpg",
    cardArtFull: "images/rhystic-study.png",
    cardName: "rhystic study",
    color: ["Blue"],
    cmc: 3,
    type: ["Enchantment"],
    legendary: false,
    origin: "Prophecy\n2000",
    keywords: ["Card Draw", "Mana Tax"],
    hint: '"Will you pay the one?"',
  },
  {
    cardArtMini: "images/the-one-ring-CUT.jpg",
    cardArtFull: "images/the-one-ring.png",
    cardName: "the one ring",
    color: ["Colorless"],
    cmc: 4,
    type: ["Artifact"],
    legendary: true,
    origin: "Tales of Middle Earth\n2023",
    keywords: [
      "Card Draw",
      "Self-burn",
      "Protection",
      "Indestructable",
      "Tap Ability",
    ],
    hint: "Post Malone's most expensive card...",
  },
  {
    cardArtMini: "images/swords-to-plowshares-CUT.jpg",
    cardArtFull: "images/swords-to-plowshares.png",
    cardName: "swords to plowshares",
    color: ["White"],
    cmc: 1,
    type: ["Instant"],
    legendary: false,
    origin: "Alpha\n1993",
    keywords: ["Spot Removal", "Exile", "Life Gain"],
    hint: "White commander staple...",
  },
  {
    cardArtMini: "images/griselbrand-CUT.jpg",
    cardArtFull: "images/griselbrand.png",
    cardName: "griselbrand",
    color: ["Black"],
    cmc: 8,
    type: ["Creature"],
    legendary: true,
    origin: "Avacyn Restored\n2012",
    keywords: [
      "Flying",
      "Lifelink",
      "Card Draw",
      "Pay Life",
      "Activated Ability",
    ],
    hint: "Makes Sheoldred look weak in comparison...",
  },
  {
    cardArtMini: "images/lightning-bolt-CUT.jpg",
    cardArtFull: "images/lightning-bolt.png",
    cardName: "lightning bolt",
    color: ["Red"],
    cmc: 1,
    type: ["Instant"],
    legendary: false,
    origin: "Alpha\n1993",
    keywords: ["Burn", '"Any Target"'],
    hint: '"____ the bird..."',
  },
  {
    cardArtMini: "images/niv-mizzet-parun-CUT.jpg",
    cardArtFull: "images/niv-mizzet-parun.png",
    cardName: "niv-mizzet parun",
    color: ["Blue", "Red"],
    cmc: 6,
    type: ["Creature"],
    legendary: true,
    origin: "Guilds of Ravnica\n1993",
    keywords: [
      "Flying",
      "Burn",
      '"Any Target"',
      "Can't be countered",
      "Card Draw",
    ],
    hint: "Most famous Ravnican Guild leader...",
  },
];

/*----- constants -----*/
const CARD_BACK = ""; // link img for card back when added
let MAX_GUESS; // add max guess number when finished for init function
const ARR_VALUES = {
  exact: "true",
  semi: "partial",
  none: "false",
};
const DATE_MATCH = {
  older: "<-",
  newer: "->",
  same: "~~",
};

/*----- state variables -----*/
// let board; // i dont think this is needed
let ignoreText;
let guessCount;
let wrongGuessCount;
let winner;
let hidCard; // Hidden card
// let trueAttr; // attributes of hidden card to compare (probably unnecessary)
let guessCards; // guessed cards will be saved in an array, reference guesses by idx or name
let matchVals; // Matching values of card (might be redundant)

/*----- cached elements  -----*/
let textInputEl = document.getElementById("search-bar");
const gameTimerEl = document.getElementById("timer");
const guessCountEl = document.querySelector(".guesses-remaining");
const replayBtnEl = document.querySelector("button");
const cardGridEl = document.getElementById("card-grid");
const finalMsgEl = document.getElementById("final-message");
const winCardEl = document.getElementById("full-card");
const errorMsgEl = document.getElementById("error-message");

/*----- event listeners -----*/
textInputEl.addEventListener("keypress", handleGuess);

/*----- initialize functions -----*/
init();

function init() {
  // board = []; // will contain img for small art and obj for each attribute being compared
  ignoreText = null;
  guessCount = 0;
  MAX_GUESS = 5; // ICEBOX: let player adjust total or disable for easy mode
  wrongGuessCount = MAX_GUESS;
  winner = null; // 1-win, null-game in progress
  hidCard = rndCardPicker(); // currently holding card object from cardList array
  guessCards = []; // obj for saving cards that have been guessed so player cant select them again
  matchVals = {}; // obj for saving results of card guess and what parts match the secret card
  render();
}

function rndCardPicker() {
  // WORKING
  let rndCardIdx = Math.floor(Math.random() * cardList.length);
  let rndCard = cardList[rndCardIdx];
//   alert(cardList[rndCardIdx].cardName);
  winCardEl.setAttribute('src', rndCard.cardArtFull);
  winCardEl.style.visibility = 'hidden';
  return rndCard;
    // return cardList[0]; // set to Black Lotus for attr match testing
}

/*----- render functions -----*/
function render() {
  renderBoard(); // render guessed card squares (try to render guessed card at the end)
  renderHidCard(); // stay hidden until winner = 1
  renderGuessCount();
  // renderCardSheet(); // card list cheat sheet (might be iceboxed)
  renderDropMenu(); // card dropdown menu when player types
  renderMessage();
}

function renderBoard() {
  let newCard = guessCards[guessCards.length - 1]; // returning most recent guess even if name is not valid | ERROR 1
  // create new row in grid - return at start of game
  if (guessCards.length !== 0 || verifyName()) newRow(newCard);
  matchVals = {}; // reset matchVals for next input
  winner ? replayBtnEl.style.visibility = 'visible' : replayBtnEl.style.visibility = 'hidden';
}

function renderHidCard() {}

function renderGuessCount() {
  let remainderDisplay = wrongGuessCount;
  guessCountEl.innerHTML = `${remainderDisplay}`;
}

// probably not a render function
function renderDropMenu() {}

/*----- End of render functions -----*/

/*----- Functions -----*/
function getWinner() {
  guessCount >= MAX_GUESS ? (winner = -1) : (winner = 1);
  renderMessage();
  winCardEl.style.visibility = 'visible';
  ignoreInput();
  
}

function renderMessage() {
    switch(winner) {
        case -1:
            finalMsgEl.innerHTML = 'Sorry, out of guesses...<br>Try easy mode for more guesses';
            break;
        case 1:
            finalMsgEl.innerHTML = `Congratulations, you guessed the card!<br>Total guesses: ${guessCount}`
    }
}

function ignoreInput() {
    wrongGuessCount++;
    if (ignoreText) errorMsgEl.style.visibility = 'visible';
}

function handleGuess(evt) {
  if (evt.key !== "Enter" || winner) return;
  evt.preventDefault();
  guessCount++;
  let cardGuess = textInputEl.value.toLowerCase();
  // alert(typeof(cardGuess)); // placeholder function test
  nameFilter(cardGuess); // needs to cancel if name input is invalid/not in list | ERROR 1
  render();
  return cardGuess;
}

// match cardList card obj to input name
function nameFilter(cardGuess) {
  for (const card of cardList) {
    // need to make current card name a variable for equality to work properly for some reason
    let listCard = card.cardName;
    // check for winner
    if (hidCard.cardName === cardGuess && listCard === cardGuess) {
      guessCards.push(card);
      compareCards(card);
      getWinner(); // run winner function
      break;
      // name input to card in list array
    } else if (listCard === cardGuess) {
        wrongGuessCount--;
        guessCards.push(card);
        compareCards(card);
        if (guessCount === 5) return getWinner();
    }
  }
     console.log(cardGuess);
     return cardGuess;
}

function verifyName() { // make sure name is in the list
    
}

// access attributes of wrong card guess for comparison
function compareCards(cardObj) {
  let arrMatches = {
    // send into compareArrs function
    sameColors: [],
    sameTypes: [],
    sameKeywords: [],
  };

  for (let attr in cardObj) {
    let secAttrKey = hidCard[attr];
    // check for non array values
    if (cardObj[attr] === secAttrKey) {
      matchVals[`${attr}`] = true;
      // check array for matches
    } else if (typeof cardObj[attr] === "object") {
      compareArrs(cardObj[attr], secAttrKey, attr, arrMatches);
      // no match
    } else {
      matchVals[`${attr}`] = false;
    }
  }
  // send categories to matchVals object
  matchVals.color = arrMatches.sameColors;
  matchVals.type = arrMatches.sameTypes;
  matchVals.keywords = arrMatches.sameKeywords;
  // reset object for next guess
  arrMatches = {
    sameColors: [],
    sameTypes: [],
    sameKeywords: [],
  };
}

//  array | hidcard arr | key
function compareArrs(attrArray, secArray, refAttr, arrMatches) {
  let i = 0;
  // WORKING // checks attributes containing arrays for individual matches
  while (i < secArray.length) {
    if (attrArray.includes(secArray[i])) {
      if (refAttr === "color") arrMatches.sameColors.push(`${secArray[i]}`);
      if (refAttr === "type") arrMatches.sameTypes.push(`${secArray[i]}`);
      if (refAttr === "keywords")
        arrMatches.sameKeywords.push(`${secArray[i]}`);

      // console.log(`${refAttr} includes ${secArray[i]}`);
      // console.log(attrArray);
    }
    i++;
  }
  return arrMatches;
}

function handleColorOutput(newCard) {
  let clrCounter = 0;
  let sqrColor;
  for (let hidColor of hidCard.color) {
    if (newCard.color.includes(hidColor)) {
      clrCounter++;
    }
  }

  if (clrCounter === 0) {
    return (sqrColor = ARR_VALUES.none);
  } else if (
    clrCounter === hidCard.color.length &&
    clrCounter === newCard.color.length
  ) {
    return (sqrColor = ARR_VALUES.exact);
  } else if (
    clrCounter !== hidCard.color.length ||
    newCard.color.length !== hidCard.color.length
  ) {
    return (sqrColor = ARR_VALUES.semi);
  } else return alert("handleColorOutput() Error");
}

function handleTypeOutput(newCard) {
  let typeCounter = 0;
  let sqrColor;
  for (let hidType of hidCard.type) {
    if (newCard.type.includes(hidType)) {
      typeCounter++;
    }
  }

  if (typeCounter === 0) {
    return (sqrColor = ARR_VALUES.none);
  } else if (
    typeCounter === hidCard.type.length &&
    typeCounter === newCard.type.length
  ) {
    return (sqrColor = ARR_VALUES.exact);
  } else if (
    typeCounter !== hidCard.type.length ||
    newCard.type.length !== hidCard.type.length
  ) {
    return (sqrColor = ARR_VALUES.semi);
  } else return alert("handleTypeOutput() Error");
}

function handleKeywordsOutput(newCard) {
  let kwCounter = 0;
  let sqrColor;
  for (let hidKeyword of hidCard.keywords) {
    if (newCard.keywords.includes(hidKeyword)) {
      kwCounter++;
    }
  }

  if (kwCounter === 0) {
    return (sqrColor = ARR_VALUES.none);
  } else if (
    kwCounter === hidCard.keywords.length &&
    kwCounter === newCard.keywords.length
  ) {
    return (sqrColor = ARR_VALUES.exact);
  } else if (
    kwCounter !== hidCard.keywords.length ||
    newCard.keywords.length !== hidCard.keywords.length
  ) {
    return (sqrColor = ARR_VALUES.semi);
  } else return alert("handleKeywordsOutput() Error");
}

// Row creation function
function newRow(newCard) {
  let colors = handleColorOutput(newCard);
  let types = handleTypeOutput(newCard);
  let keywords = handleKeywordsOutput(newCard);
  const newSect = document.createElement("section");
  newSect.setAttribute("class", "grdRow");

  // add individual divs to show information
  for (let i = 0; i <= 7; i++) {
    // 7 is max because there are 7 divs in the board display
    switch (i) {
      case (i = 0): {
        const art = document.createElement("div");
        art.setAttribute("class", "card-box");
        art.innerHTML = `<img id="mini-art" src="${newCard.cardArtMini}">`;
        newSect.appendChild(art);
        break;
      }
      case (i = 1): {
        const name = document.createElement("div");
        name.setAttribute("class", matchVals.cardName);
        name.innerHTML = `<p>${newCard.cardName}</p>`;
        newSect.appendChild(name);
        break;
      }
      case (i = 2): {
        const color = document.createElement("div");
        color.setAttribute("class", colors);
        color.innerHTML = `<p>${newCard.color.join(" ")}</p>`;
        newSect.appendChild(color);
        break;
      }
      case (i = 3): {
        const cmc = document.createElement("div");
        cmc.setAttribute("class", `${matchVals.cmc}`);
        cmc.innerHTML = `<p>${newCard.cmc}</p>`;
        newSect.appendChild(cmc);
        break;
      }
      case (i = 4): {
        const type = document.createElement("div"); // needs check function for partial
        type.setAttribute("class", types);
        type.innerHTML = `<p>${newCard.type.join(" ")}</p>`;
        newSect.appendChild(type);
        break;
      }
      case (i = 5): {
        const lgnd = document.createElement("div");
        lgnd.setAttribute("class", `${matchVals.legendary}`);
        lgnd.innerHTML = `<p>${newCard.legendary ? "Yes" : "No"}</p>`;
        newSect.appendChild(lgnd);
        break;
      }
      case (i = 6): {
        const origin = document.createElement("div");
        origin.setAttribute("class", `${matchVals.origin}`);
        origin.innerHTML = `<p>${newCard.origin}</p>`; // ICEBOX: add arrow for newer/older
        newSect.appendChild(origin);
        break;
      }
      case (i = 7): {
        const keyword = document.createElement("div"); // needs check function for partial
        keyword.setAttribute("class", keywords);
        keyword.innerHTML = `<p>${newCard.keywords.join(" / ")}</p>`;
        newSect.appendChild(keyword);
        break;
      }
    }
  }
  cardGridEl.appendChild(newSect);
}
