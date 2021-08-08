import React from 'react';
import DealerCards from './DealerCards.jsx'
import PlayerCards from './PlayerCards.jsx'
import Chips from './Chips.jsx'
import Deck from './Deck.jsx'

const Table = ( {player1, actionButtons, gameConditionals, deck} ) => {
  let hands = player1.hands
  return (
    <div id="table">
      <DealerCards/>
      <Deck/>
      <Chips/>
      <PlayerCards hands={hands} deck={deck} actionButtons={actionButtons} gameConditionals={gameConditionals}/>
    </div>
  )
}

export default Table