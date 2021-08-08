import React from 'react'

const ActionButton = ( {action} ) => {
  return (
    <button id={action[0]} onClick={action[1]}>{action[2]}</button>
  )
}

export default ActionButton