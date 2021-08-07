import React from 'react';
import utils from '../utils.js'

const PlayerCards = ( {hands} ) => {
  let {hand1, hand2, hand3, hand4} = hands
  console.log(hand1)


  return (
    <div>
      {JSON.stringify(hand1) || ''} {hand2 || ''} {hand3 || ''} {hand4 || ''}
    </div>
  )
}

export default PlayerCards