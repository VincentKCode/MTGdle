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
    origin: "Alpha - 1993",
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
    origin: "Alpha - 1993",
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
    origin: "Prophecy - 2000",
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
    origin: "Tales of Middle Earth - 2023",
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
    origin: "Alpha - 1993",
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
    origin: "Avacyn Restored - 2012",
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
    origin: "Alpha - 1993",
    keywords: ["Burn", '"Any Target"'],
    hint: '"____ the bird..."',
  },
  {
    cardArtMini: "images/niv-mizzet-parun-CUT.jpg",
    cardArtFull: "images/niv-mizzet-parun.png",
    cardName: "niv-mizzet, parun",
    color: ["Blue", "Red"],
    cmc: 6,
    type: ["Creature"],
    legendary: true,
    origin: "Guilds of Ravnica - 1993",
    keywords: [
      "Flying",
      "Burn",
      '"Any Target"',
      "Can't be countered",
      "Card Draw",
    ],
    hint: "Most famous Ravnican Guild leader...",
  },
  {
    cardArtMini: "images/counterspell-CUT.jpg",
    cardArtFull: "images/counterspell.png",
    cardName: "counterspell",
    color: ["Blue"],
    cmc: 1,
    type: ["Instant"],
    legendary: false,
    origin: "Alpha - 1993",
    keywords: ["Counterspell"],
    hint: "Exactly what Blue is known for...",
  },
  {
    cardArtMini: "images/thoughtseize-CUT.jpg",
    cardArtFull: "images/thoughtseize.png",
    cardName: "thoughtseize",
    color: ["Black"],
    cmc: 1,
    type: ["Sorcery"],
    legendary: false,
    origin: "Lorwyn - 2007",
    keywords: ["Target player", "Self-burn", "Discard"],
    hint: "Infamous turn one play in Pioneer for Black...",
  },
  {
    cardArtMini: "images/cyclonic-rift-CUT.jpg",
    cardArtFull: "images/cyclonic-rift.png",
    cardName: "cyclonic rift",
    color: ["Blue"],
    cmc: 2,
    type: ["Instant"],
    legendary: false,
    origin: "Return to Ravnica - 2012",
    keywords: ["Bounce", "Board-wipe", "Overload"],
    hint: "One of the best Blue board wipes in commander...",
  },
  {
    cardArtMini: "images/wrath-of-god-CUT.jpg",
    cardArtFull: "images/wrath-of-god.png",
    cardName: "wrath of god",
    color: ["White"],
    cmc: 4,
    type: ["Sorcery"],
    legendary: false,
    origin: "Alpha - 1993",
    keywords: ["Board-wipe"],
    hint: "",
  },
  {
    cardArtMini: "images/damnation-CUT.jpg",
    cardArtFull: "images/damnation.png",
    cardName: "damnation",
    color: ["Black"],
    cmc: 4,
    type: ["Sorcery"],
    legendary: false,
    origin: "Planar Chaos - 2007",
    keywords: ["Board-wipe"],
    hint: "Wrath's younger sibling...",
  },
  {
    cardArtMini: "images/armageddon-CUT.jpg",
    cardArtFull: "images/armageddon.png",
    cardName: "armageddon",
    color: ["White"],
    cmc: 4,
    type: ["Sorcery"],
    legendary: false,
    origin: "Alpha - 1993",
    keywords: ["Board-wipe", "Land Destruction"],
    hint: "Breaks one of the unwritten rules of commander...",
  },
  {
    cardArtMini: "images/vampiric-tutor-CUT.jpg",
    cardArtFull: "images/vampiric-tutor.png",
    cardName: "vampiric tutor",
    color: ["Black"],
    cmc: 1,
    type: ["Instant"],
    legendary: false,
    origin: "Visions - 1996",
    keywords: ["self-burn", "Tutor"],
    hint: "One of the original tutors...",
  },
  {
    cardArtMini: "images/mystical-tutor-CUT.jpg",
    cardArtFull: "images/mystical-tutor.png",
    cardName: "mystical tutor",
    color: ["Blue"],
    cmc: 1,
    type: ["Instant"],
    legendary: false,
    origin: "Mirage - 1996",
    keywords: ["Reveal", "Tutor"],
    hint: "A commander combo player's best friend...",
  },
  {
    cardArtMini: "images/emrakul-the-aeons-torn-CUT.jpg",
    cardArtFull: "images/emrakul-the-aeons-torn.png",
    cardName: "emrakul, the aeons torn",
    color: ["Colorless"],
    cmc: 15,
    type: ["Creature"],
    legendary: true,
    origin: "Rise of the Eldrazi - 2010",
    keywords: [
      "Flying",
      "Protection",
      "Annihilator",
      "Can't be countered",
      "Extra turn",
      "Graveyard Shuffle",
    ],
    hint: "Wishes they could be in a commander deck...",
  },
  {
    cardArtMini: "images/siege-rhino-CUT.jpg",
    cardArtFull: "images/siege-rhino.png",
    cardName: "siege rhino",
    color: ["White", "Black", "Green"],
    cmc: 4,
    type: ["Creature"],
    legendary: false,
    origin: "Khans of Tarkir - 2010",
    keywords: ["Trample", "Burn", "Life Gain"],
    hint: "Wishes they could be in a commander deck...",
  },
  {
    cardArtMini: "images/tarmogoyf-CUT.jpg",
    cardArtFull: "images/tarmogoyf.png",
    cardName: "tarmogoyf",
    color: ["Green"],
    cmc: 2,
    type: ["Creature"],
    legendary: false,
    origin: "Ice Age - 1995",
    keywords: ["X", "Graveyard Tracking"],
    hint: "Originally known as Llurgoyf...",
  },
  {
    cardArtMini: "images/jeweled-lotus-CUT.jpg",
    cardArtFull: "images/jeweled-lotus.png",
    cardName: "jeweled lotus",
    color: ["Colorless"],
    cmc: 0,
    type: ["Artifact"],
    legendary: false,
    origin: "Commander Legends - 2020",
    keywords: ["Self-sacrifice", "Ramp", "Mana Generatior", "Commander Text"],
    hint: "One of the best cards turn 1 in commander...",
  },
  {
    cardArtMini: "images/shahrazad-CUT.jpg",
    cardArtFull: "images/shahrazad.png",
    cardName: "shahrazad",
    color: ["White"],
    cmc: 2,
    type: ["Sorcery"],
    legendary: false,
    origin: "Arabian Nights - 1993",
    keywords: ["Sub-game", "Text Dump", "Burn", "Permabanned"],
    hint: "Get ready for a long commander game...",
  },
  {
    cardArtMini: "images/lotus-field-CUT.jpg",
    cardArtFull: "images/lotus-field.png",
    cardName: "lotus field",
    color: ["Colorless"],
    cmc: 0,
    type: ["Land"],
    legendary: false,
    origin: "Core Set - 2020",
    keywords: [
      "Hexproof",
      "Enters Tapped",
      "Land Sacrifice",
      "Ramp",
      "Mana Generatior",
    ],
    hint: "Get ready for a long commander game...",
  },
  {
    cardArtMini: "images/mystic-sanctuary-CUT.jpg",
    cardArtFull: "images/mystic-sanctuary.png",
    cardName: "mystic sanctuary",
    color: ["Colorless"],
    cmc: 0,
    type: ["Land", "Island"],
    legendary: false,
    origin: "Throne of Eldraine - 2019",
    keywords: ["Enters Tapped", "Graveyard Recursion"],
    hint: "Get ready for a long commander game...",
  },
  {
    cardArtMini: "images/evolving-wilds-CUT.jpg",
    cardArtFull: "images/evolving-wilds.png",
    cardName: "evolving wilds",
    color: ["Colorless"],
    cmc: 0,
    type: ["Land"],
    legendary: false,
    origin: "Rise of the Eldrazi - 2010",
    keywords: ["Self-sacrifice", "Tutor"],
    hint: "Get ready for a long commander game...",
  },
  {
    cardArtMini: "images/otawara-soaring-city.png",
    cardArtFull: "images/otawara-soaring-city-CUT.jpg",
    cardName: "otawara, soaring city",
    color: ["Colorless"],
    cmc: 0,
    type: ["Land"],
    legendary: true,
    origin: "Kamigawa: Neon Dynasty - 2022",
    keywords: ["Mana Generator", "Channel", "Bounce", "Discountable"],
    hint: "Get ready for a long commander game...",
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
let failName;
let cardPresent;
let ignoreText;
let guessCount;
let wrongGuessCount;
let winner;
let hidCard; // Hidden card
let guessCards; // guessed cards will be saved in an array, reference guesses by idx or name
let matchVals; // Matching values of card (might be redundant)

/*----- cached elements  -----*/
let textInputEl = document.getElementById("search-bar");
const guessCountEl = document.querySelector(".guesses-remaining");
const replayBtnEl = document.querySelector("button");
const cardGridEl = document.getElementById("card-grid");
const winScreenEl = document.getElementById("win-screen");
const finalMsgEl = document.getElementById("final-message");
const winCardEl = document.getElementById("full-card");
const errorMsgEl = document.getElementById("error-message");
const repeatMsgEl = document.getElementById("double-guess");
const popoutBar = document.getElementById("popout-bar");
const indexMenu = document.getElementById("card-index");

/*----- event listeners -----*/
textInputEl.addEventListener("keypress", handleGuess);
replayBtnEl.addEventListener("click", init);
popoutBar.addEventListener("click", function () {
  indexMenu.classList.toggle("active");
  indexMenu.classList.toggle("inactive");
});

/*----- initialize functions -----*/
init();

function init() {
  failName = 0;
  cardPresent = 0;
  ignoreText = null;
  guessCount = 0;
  MAX_GUESS = 10;
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
  // alert(cardList[rndCardIdx].cardName);
  winCardEl.setAttribute("src", rndCard.cardArtFull);
  winCardEl.style.visibility = "hidden";
  return rndCard;
}

/*----- render functions -----*/
function render() {
  renderBoard(); // render guessed card squares (try to render guessed card at the end)
  renderGuessCount();
  renderDropMenu(); // card dropdown menu when player types
  renderMessage();
  renderReset();
}

function renderReset() {
  if (!winner && !guessCount) cardGridEl.innerHTML = "";
  textInputEl.value = "";
}

function renderBoard() {
  let newCard = guessCards[guessCards.length - 1]; // returning most recent guess even if name is not valid | ERROR 1
  // create new row in grid - return at start of game
  if (guessCards.length !== 0 && !failName && !cardPresent) {
    newRow(newCard);
  } else {
    nameFailMsg();
  }
  matchVals = {}; // reset matchVals for next input
  if (winner) {
    replayBtnEl.style.visibility = "visible";
    winScreenEl.style.visibility = "visible";
    winCardEl.style.visibility = "visible";
  } else {
    replayBtnEl.style.visibility = "hidden";
    winScreenEl.style.visibility = "hidden";
  }
}

function renderGuessCount() {
  let remainderDisplay = wrongGuessCount;
  guessCountEl.innerHTML = `${remainderDisplay}`;
}

// probably not a render function
function renderDropMenu() {}

/*----- End of render functions -----*/

/*----- Functions -----*/
function getWinner() {
  guessCount > MAX_GUESS || wrongGuessCount ? (winner = 1) : (winner = -1);
  renderMessage();
  winCardEl.style.visibility = "visible";
}

function renderMessage() {
  switch (winner) {
    case -1:
      finalMsgEl.innerHTML = "Sorry, out of guesses<br>try again...";
      break;
    case 1:
      finalMsgEl.innerHTML = `Congratulations, you guessed the card!<br>Total guesses: ${guessCount}`;
      break;
    default:
      finalMsgEl.innerHTML = "";
      break;
  }
  nameFailMsg();
  cardPresent
    ? (repeatMsgEl.style.visibility = "visible")
    : (repeatMsgEl.style.visibility = "hidden");
  cardPresent = 0;
}

function nameFailMsg() {
  // show error msg if name is invalid
  failName
    ? (errorMsgEl.style.visibility = "visible")
    : (errorMsgEl.style.visibility = "hidden");
}

function handleGuess(evt) {
  if (evt.key !== "Enter" || winner) return;
  evt.preventDefault();
  let cardGuess = textInputEl.value.toLowerCase();
  nameFilter(cardGuess); // needs to cancel if name input is invalid/not in list | ERROR 1
  textInputEl.value = "";
  render();
  return cardGuess;
}

// match cardList card obj to input name
function nameFilter(cardGuess) {
  if (!verifyName(cardGuess)) {
    return (failName = 1);
  } else failName = 0;
  for (const card of cardList) {
    // need to make current card name a variable for equality to work properly for some reason
    let listCard = card.cardName;
    // check for winner
    if (hidCard.cardName === cardGuess && listCard === cardGuess) {
      guessCount++;
      guessCards.push(card);
      compareCards(card);
      getWinner(); // run winner function
      wrongGuessCount--;
      break;
      // name input to card in list array
    } else if (listCard === cardGuess) {
      if (doubleGuess(cardGuess)) break;
      guessCount++;
      wrongGuessCount--;
      guessCards.push(card);
      compareCards(card);
      if (guessCount > MAX_GUESS || wrongGuessCount === 0) return getWinner();
    }
  }
  return cardGuess;
}

function verifyName(cardGuess) {
  // make sure name is in the list
  let nameIsPresent = 0;
  cardList.forEach(function (card) {
    if (card.cardName === cardGuess) return nameIsPresent++;
  });
  return nameIsPresent;
}

function doubleGuess(cardGuess) {
  cardPresent = 0;
  if (guessCards.length === 0) return cardPresent;
  for (let card in guessCards) {
    if (guessCards[card].cardName === cardGuess) cardPresent = 1;
  }
  return cardPresent;
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
    if (attrArray.includes(secArray[i])) { // if included, push into it's respective category
      if (refAttr === "color") arrMatches.sameColors.push(`${secArray[i]}`);
      if (refAttr === "type") arrMatches.sameTypes.push(`${secArray[i]}`);
      if (refAttr === "keywords")
        arrMatches.sameKeywords.push(`${secArray[i]}`);
    }
    i++;
  }
  return arrMatches;
}

function handleColorOutput(newCard) {
  let clrCounter = 0;
  let sqrColor;
  for (let hidColor of hidCard.color) {
    if (newCard.color.includes(hidColor)) { // counter for each match
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
  }
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
  }
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
  }
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
    switch (i) {
      case (i = 0): {
        const art = document.createElement("div");
        art.setAttribute("class", "card-box");
        art.classList.add("box-animation");
        art.innerHTML = `<img id="mini-art" src="${newCard.cardArtMini}">`;
        newSect.appendChild(art);
        break;
      }
      case (i = 1): {
        const name = document.createElement("div");
        name.setAttribute("class", matchVals.cardName);
        name.setAttribute("id", "grid-animation");
        name.innerHTML = `<p>${newCard.cardName}</p>`;
        newSect.appendChild(name);
        break;
      }
      case (i = 2): {
        const color = document.createElement("div");
        color.setAttribute("class", colors);
        color.setAttribute("id", "grid-animation");
        color.innerHTML = `<p>${newCard.color.join(" ")}</p>`;
        newSect.appendChild(color);
        break;
      }
      case (i = 3): {
        const cmc = document.createElement("div");
        cmc.setAttribute("class", `${matchVals.cmc}`);
        cmc.setAttribute("id", "grid-animation");
        cmc.innerHTML = `<p>${newCard.cmc}</p>`;
        newSect.appendChild(cmc);
        break;
      }
      case (i = 4): {
        const type = document.createElement("div");
        type.setAttribute("class", types);
        type.setAttribute("id", "grid-animation");
        type.innerHTML = `<p>${newCard.type.join(" ")}</p>`;
        newSect.appendChild(type);
        break;
      }
      case (i = 5): {
        const lgnd = document.createElement("div");
        lgnd.setAttribute("class", `${matchVals.legendary}`);
        lgnd.setAttribute("id", "grid-animation");
        lgnd.innerHTML = `<p>${newCard.legendary ? "Yes" : "No"}</p>`;
        newSect.appendChild(lgnd);
        break;
      }
      case (i = 6): {
        const origin = document.createElement("div");
        origin.setAttribute("class", `${matchVals.origin}`);
        origin.setAttribute("id", "grid-animation");
        origin.innerHTML = `<p>${newCard.origin}</p>`;
        newSect.appendChild(origin);
        break;
      }
      case (i = 7): {
        const keyword = document.createElement("div");
        keyword.setAttribute("class", keywords);
        keyword.setAttribute("id", "grid-animation");
        keyword.innerHTML = `<p>${newCard.keywords.join(" / ")}</p>`;
        newSect.appendChild(keyword);
        break;
      }
    }
  }
  cardGridEl.prepend(newSect);
}
