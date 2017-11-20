// console.log("Swag");
var cards = [
  {
    rank: 'queen',
    suite: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },

  {
    rank: 'queen',
    suite: 'Diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },

  {
    rank: 'king',
    suite: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },

  {
    rank: 'king',
    suite: 'Diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }

]
var cardsInPlay = []

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!')
  } else if (cardsInPlay.length !== 2) {
    console.log('You need another card bro.')
  } else {
    alert('Sorry, try again.')
  }
}

var flipcard = function (cardId) {
  console.log('User flipped' + cards[cardId].rank)

  cardsInPlay.push(cards[cardId])

  checkForMatch()

  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suite)
}

flipcard(2)
flipcard(1)
