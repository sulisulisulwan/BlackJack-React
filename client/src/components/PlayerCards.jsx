import React from 'react';
import utils from '../utils.js'
import Hand from './Hand.jsx'

const PlayerCards = ( {hands, actionButtons, gameIsAlive} ) => {
  return (
    <div id="player-area">
      <div id="hands">
        {hands.map((hand, i) => <Hand
          key={`hand${i}`}
          id={`hand${i}`}
          hand={hand}
          actionButtons={actionButtons}
          gameIsAlive={gameIsAlive}
          />)}
      </div>
    </div>
  )
}

export default PlayerCards