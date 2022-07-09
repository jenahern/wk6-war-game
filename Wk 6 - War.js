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
                let lastCard = this.cards[c]
                this.cards[top] = this.cards[c]
                this.cards[c] = lastCard
        } 
    }
  }

let newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffleDeck();

// console.log(newDeck);
// deck is created and will shuffle cards!!

// Create Players 
class Player {
    constructor(id) {
        this.playerName = id;
        this.playerCards = [];
        this.playerScore = 0
    }
}
// Create Deal
class Deal {
    constructor() {
        this.readyDeck = [];
        this.players = [];
    }
    start(playerOne, playerTwo) {
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck(); 
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);

    }
}

// Deal Cards to start game
let dealCards = new Deal();
dealCards.start('Player 1', 'Player 2');
// console.log(dealCards.players);
// 2 Players have shuffled hand of 26 cards each confirmed by console log


// 2 Arrays of 26 cards.  Need to compare the rank of player 1 card "0" in array to player 2 card "0"
// higer value rank wins point - point gets push to point array(?)


// have 2 players compare cards
class Game {
  constructor() {  
    let player1Score = 0;
    let player2Score = 0;
    let playersScore = [];

    for (let x = 0; x < this.players[0].playerCards.length; x++) {
      if (this.players[0].playerCards < this.players[1].playerCards) {
         player2Score++ 

        } else if (this.players[0].playerCards > this.players[1].playerCards) {
          player1Score++
        }
      }
    playersScore.push(player1Score, player2Score) 
    return (playersScore);
  }

  // function to show winner and results
  displayWinner(score) {
    if (score[0] > score[1]) {
        alert('Game over. Bill wins!')
    } else alert('Game over. Ted wins!')
 } 
}

let newGame = new Game();
newGame.start();







