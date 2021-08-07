import React from 'react';
import DealerCards from './DealerCards.jsx'
import PlayerCards from './PlayerCards.jsx'
import Chips from './Chips.jsx'
import Deck from './Deck.jsx'

const Table = ( {player1} ) => {
  return (
    <div id="table">
      <DealerCards/>
      <Deck/>
      <Chips/>
      <PlayerCards hands={player1}/>
    </div>
  )
}

export default Table