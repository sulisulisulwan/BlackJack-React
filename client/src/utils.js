const translateCardStringToData = (cardString) => {
  const suits = {
    S: 'spades',
    C: 'clubs',
    D: 'diamonds',
    H: 'hearts'
  }
  let [cardValue, cardSuit] = cardString.split('.')
  return cardData = {
    displayString: `${cardValue} of ${suits[cardSuit]}`,
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

const isHitPossible = (conditionals) => {
  let { isDealersTurn, isBust, isGameAlive } = conditionals;
  return !isDealersTurn && !isBust && isGameAlive ? true : false;
}

const isStayPossible = (conditionals) => {

}

const isSplitPossible = (conditionals) => {

}

const isDoubleDownPossible = (conditionals) => {

}

module.exports = {
  translateCardStringToData,
  checkIfBust,
  calculatePossibleSoftAndHardTotals,
  calculateHandTotalWithoutAces,
  isHitPossible,
  isStayPossible,
  isSplitPossible,
  isDoubleDownPossible
}