let cards = ['queen', 'queen', 'king', 'king'];

let cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardID){

  console.log("Player flipped " + cards[cardID]);
  cardsInPlay.push(cards[cardID]);

  if (cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(1);
flipCard(0);
