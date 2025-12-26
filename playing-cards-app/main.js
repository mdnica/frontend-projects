const suits = ["♠", "♥", "♦", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const drawBtn = document.getElementById("draw");
const shuffleBtn = document.getElementById("shuffle");
const cardContainer = document.getElementById("card-container");

let deck = [];

/* 1️⃣ CREATE DECK (52 cards, no duplicates) */
function createDeck() {
  deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
}

/* 2️⃣ SHUFFLE DECK (Fisher–Yates) */
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

/* 3️⃣ DRAW CARD */
function drawCard() {
  if (deck.length === 0) {
    alert("No cards left! Shuffle the deck.");
    return;
  }

  const cardData = deck.pop();
  renderCard(cardData);
}

/* 4️⃣ RENDER + FLIP ANIMATION */
function renderCard({ suit, value }) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  const front = document.createElement("div");
  front.classList.add("card-face", "card-front");
  front.textContent = `${value} ${suit}`;

  if (suit === "♥" || suit === "♦") {
    front.style.color = "red";
  }

  const back = document.createElement("div");
  back.classList.add("card-face", "card-back");
  back.textContent = "🂠";

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);
  cardContainer.appendChild(card);

  // Flip after render
  setTimeout(() => {
    card.classList.add("flip");
  }, 100);
}

/* EVENTS */
drawBtn.addEventListener("click", drawCard);
shuffleBtn.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  createDeck();
  shuffleDeck();
});

/* INIT */
createDeck();
shuffleDeck();
