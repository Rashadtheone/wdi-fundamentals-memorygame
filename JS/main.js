//console.log("Swag");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        } else {
        alert("Sorry, try again.");
        }
}

var flipcard = function(cardId) { 

    console.log("User flipped" + cards[cardId])

    cardsInPlay.push(cards[cardId])

    checkForMatch()
    
}
flipcard(2);
flipcard(1);
