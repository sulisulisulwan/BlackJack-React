import React from 'react';

class Hand extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      handData: []
    }
  }
  render () {
    return (
      <div>
        This is a hand
      </div>
    )
  }
}

export default Hand