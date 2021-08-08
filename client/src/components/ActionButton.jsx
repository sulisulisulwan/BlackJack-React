import React from 'react'

const ActionButton = ( {action} ) => {
  console.log(action)
  return (
    <button id={action[0].toLowerCase().replace(' ', '-')} onClick={action[1]}>{action[0]}</button>
  )
}

export default ActionButton