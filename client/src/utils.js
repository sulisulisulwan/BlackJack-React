const translateCardStringToData = (cardString) => {
  const suits = {
    S: 'spades',
    C: 'clubs',
    D: 'diamonds',
    H: 'hearts'
  }
  let [cardSuit, cardValue] = cardString.split('.')
  return cardData = {
    suit: suits[cardSuit],
    displayString: `${cardValue}`,
    value: cardValue
  }
}

const checkIfBust = (totalWithoutAce, aceCount) => {
  return (totalWithoutAce > 21 || totalWithoutAce + aceCount > 21) ? true : false;
}

const calculatePossibleSoftAndHardTotals = (totalWithoutAce, aceCount) => {
  let hardTotal, softTotal;
  if (11 + aceCount - 1 + totalWithoutAce <= 21) {
    hardTotal = totalWithoutAce + 11 + (aceCount - 1)
  }
  softTotal = totalWithoutAce + aceCount
  return `Total is ${softTotal}${hardTotal ? ' or ' + hardTotal : ''}`
}

const calculateHandTotalWithoutAces = (currentSum, newCardValue) => {
  return (newCardValue === 'J' || newCardValue === 'Q' || newCardValue === 'K') ? currentSum + 10
      : newCardValue = 'A' ? currentSum
      : currentSum + Number(newCardValue);
}



const calculateTotalCardsValue = (playerCards) => {

  let [sum, aceQuarantine] = totalWithoutAcesAndQuarantineAces(playerCards);

  if (aceQuarantine.length) {
    //if total sum is
  }
}

const totalWithSoftAces = (cards) => {
  return cards.reduce((total, currentCard) => {

  }, 0)
}