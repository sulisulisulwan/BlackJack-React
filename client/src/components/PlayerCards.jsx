import React from 'react';
import utils from '../utils.js'
import Hand from './Hand.jsx'

const PlayerCards = ( {hands, actionButtons, gameConditionals, deck} ) => {
  let handKeys = Object.keys(hands);
  return (
    <div id="player-area">
      <div id="hands">
        {handKeys.map((handKey, i) => <Hand
          key={`hand${i}`}
          id={`hand${i}`}
          deck={deck}
          hand={hands[handKey]}
          actionButtons={actionButtons}
          gameConditionals={gameConditionals}
          />)}
      </div>
    </div>
  )
}

export default PlayerCards