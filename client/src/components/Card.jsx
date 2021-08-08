import React from 'react';

const Card = ({ card }) => {
  let { displayString } = card;
  return(
    <div className="card">
      {displayString}
    </div>
  )
}

export default Card