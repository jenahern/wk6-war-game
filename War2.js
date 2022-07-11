class Card {
  constructor(suit, value, rank) {
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  createDeck() {
    const suits = ["♠️", "♣️", "♥️", "♦️"];
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
    const ranks = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let n = 0; n < values.length; n++) {
        this.cards.push(new Card(suits[i], values[n], ranks[n]));
      }
    }
  }

  shuffleDeck() {
    for (let c = this.cards.length - 1; c > 0; c--) {
      let top = Math.floor(Math.random() * c);
      let lastCard = this.cards[c];
      this.cards[top] = this.cards[c];
      this.cards[c] = lastCard;
    }
  }
}

let newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffleDeck();
//Testing to ensure new deck is created and shuffled
// console.log(newDeck);
// deck is created and will shuffle cards!!

// Create Players
class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.playerCards = [];
    this.playerScore = 0;
  }
}

let p1 = new Player("p1");
let p2 = new Player("p2");

// Create Deal with 26 Cards in 2 arrays
class Deal {
  constructor() {
    this.players = [];
  }
  start() {
    this.players.push(p1);
    this.players.push(p2);
    let d = new Deck();
    d.createDeck();
    d.shuffleDeck();
    this.players[0].playerCards = d.cards.slice(0, 26);
    this.players[1].playerCards = d.cards.slice(26, 52);
  }
}

//testing Deck class to ensure player 1/2 have name, cards, starting score and gets pushed to players array
let testDeal = new Deal();
testDeal.start();
// console.log("Printing a test deal. p1 and p2 now have 26 cards", testDeal);

//create Game class to run 26 instances of comparing 0 position card in each Players hand
class Game {
  constructor() {
    this.warPlayers = [];
  }
  start() {
    this.warPlayers.push(p1, p2);
    alert(
      `Welcome to War! 2 NPC's go head to head in 26 Rounds to see who has the highest score.`
    );

    // for loop created to iterate over each players hand
    for (let i = 0; i < 26; i++) {
      this.playerCards += this.warPlayers[i];
      {
        let p1card = p1.playerCards.shift();
        let p2card = p2.playerCards.shift();

        if (p1card.rank > p2card.rank) {
          alert(`
          Player 1 card: ${p1card.value} ${p1card.suit} score: ${p1card.rank}
          Player 2 card: ${p2card.value} ${p2card.suit} score: ${p2card.rank}
          Player 1 Wins Round
          
          Player 1 Total Score - ${p1.playerScore} 
          Player 2 Total Score - ${p2.playerScore}`);
          p1.playerScore += 1;
        } else if (p1card.rank < p2card.rank) {
          alert(`
          Player 1 card: ${p1card.value} ${p1card.suit} score: ${p1card.rank}
          Player 2 card: ${p2card.value} ${p2card.suit} score: ${p2card.rank} 
          Player 2 Wins Round

          Player 1 Total Score - ${p1.playerScore} 
          Player 2 Total Score - ${p2.playerScore}`);
          p2.playerScore += 1;
        } else {
          alert(`
          Player 1 card: ${p1card.value} ${p1card.suit} score: ${p1card.rank}
          Player 2 card: ${p2card.value} ${p2card.suit} score: ${p2card.rank} 
          This Round is a Tie.  No Points Awarded.

          Player 1 Total Score - ${p1.playerScore} 
          Player 2 Total Score - ${p2.playerScore}
          `);
        }
      }
    }
  }
  // created a function to alert winner and total score of each Player for Game.
  displayWinner() {
    if (p1.playerScore < p2.playerScore) {
      alert(`Congratulations! Player 1 Wins!

      Total Score - 
      Player 1 - ${p1.playerScore} 
      Player 2 - ${p2.playerScore}
      `);
    } else if (p1.playerScore > p2.playerScore) {
      alert(`Congratulations! Player 2 Wins!

      Total Score - 
      Player 1 - ${p1.playerScore} 
      Player 2 - ${p2.playerScore}
      `);
    } else {
      alert(`Draw. No Winner, Please Play Again.

      Total Score - 
      Player 1 - ${p1.playerScore} 
      Player 2 - ${p2.playerScore}
      `);
    }
  }
}

let newGame = new Game();
newGame.start();
newGame.displayWinner();
