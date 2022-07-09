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
  console.log("Test Created Deck:");
  console.log(newDeck);
  console.log("");
  //Testing to ensure new deck is created and shuffled
  // console.log(newDeck);
  // deck is created and will shuffle cards!!
  
  // Create Players
  class Player {
    constructor(playerName) {
      //kristina passed playername instead of id
      this.playerName = playerName; //Kristina changed this line of code
      this.playerCards = [];
      this.playerScore = 0;
    }
  }
  
  //testing to ensure that we can create a new instance of player for p1 and p2. their hands get populated in deal class
  console.log(
    "Test instance of players (they currently have an empty deck until deal deck is called):"
  );
  let p1 = new Player("p1");
  let p2 = new Player("p2");
  console.log(p1, p2);
  console.log("");
  
  // Create Deal
  class Deal {
    constructor() {
      // this.readyDeck = []; --Kristina removed this line of code for now. you can uncomment it if it gets used
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
  console.log("Printing a test deal. p1 and p2 now have 26 cards", testDeal);
  
  // Deal Cards to start game
  let dealCards = new Deal();
  dealCards.start("Player 1", "Player 2");
  console.log("");
  // console.log(dealCards.players);
  
  // 2 Players have shuffled hand of 26 cards each confirmed by console log
  
  // 2 Arrays of 26 cards.  Need to compare the rank of player 1 card "0" in array to player 2 card "0"
  // higer value rank wins point - point gets push to point array(?)
  
  // have 2 players compare cards
  class Game {
    constructor() {
      //kristina comment: possibly create a array for war players and push p1 and p1 to array
      this.warPlayers = [];
      
    }
  
    //kristina - method to start game
    start() {
      this.warPlayers.push(p1, p2);
  
      console.log("Inside Game.Start", this.warPlayers);     

      let p1card = p1.playerCards.shift();
      let p2card = p2.playerCards.shift();    
  
      console.log("Round 1" , p1card.rank, "vs" , p2card.rank); 
      //  jen able to isolate rank on card
      // jen adding loop to get all ranks to compare
      {
        for(let ii = 0; ii < p1.playerCards.length; ii++) {
          this.playerScore += p1.playerCards[ii]; {
            if (p1card.rank > p2card.rank) {
              console.log("Player 1 Wins"); 

            } else {   
              console.log("Player 2 Wins");
            }
        }
      }
    }
  }
}

  let newGame = new Game();
  newGame.start();