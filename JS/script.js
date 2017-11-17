//console.log("Swag");

var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
// cardsInPlay.push(cardThree);
// cardsInPlay.push(cardFour);

console.log(cardsInPlay.length)
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] == cardsInPlay[1]){
        alert("IT's EQUAL")
    }else alert("it's wrong g")

} 

