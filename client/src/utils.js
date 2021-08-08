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

const calcHandTotalWithoutAces = (totalWithoutAce, newCardValue) => {
  if (newCardValue === 'J' || newCardValue === 'Q' || newCardValue === 'K') {
    return totalWithoutAce + 10
  } else if (newCardValue === 'A') {
    return totalWithoutAce
  } else {
    return totalWithoutAce + Number(newCardValue);
  }
}

const calcSoftAndHardTotals = (totalWithoutAces, aceCount) => {
  if (aceCount === 0) {
    return [totalWithoutAces, totalWithoutAces]
  }
  let hardTotal, softTotal;
  if (11 + aceCount - 1 + totalWithoutAces <= 21) {
    hardTotal = totalWithoutAces + 11 + (aceCount - 1)
  }
  softTotal = totalWithoutAces + aceCount
  return [softTotal, hardTotal]
}

const updateAceCount = (currentAceCount, newCardValue) => {
  return newCardValue === 'A' ? currentAceCount + 1 : currentAceCount;
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
  calcSoftAndHardTotals,
  calcHandTotalWithoutAces,
  updateAceCount,
  isHitPossible,
  isStayPossible,
  isSplitPossible,
  isDoubleDownPossible
}