import React from 'react';
import utils from '../utils.js'
import Card from './Card.jsx'
import ActionButton from './ActionButton.jsx'
class Hand extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cardsData: [],
      isBust: false
    }
  }

  componentDidUpdate() {
    let cardsData = this.state.cardsData;
    let {cardsStrings, aceCount, total} = this.props.hand;
    if (cardsStrings.length !== cardsData.length) {
      if (cardsData.length === 0) {
        cardsStrings.forEach(card => {
          cardsData.push(utils.translateCardStringToData(card))
        })
      } else {
        cardsData.push(utils.translateCardStringToData(cardsStrings[cardsStrings.length - 1]))
      }
      this.setState({
        cardsData: cardsData
      })
    }


  }

  render () {
    let isBust = this.state.isBust
    let gameIsAlive = this.props.gameIsAlive
    let id = this.props.id
    const { hit, stay, doubleDown, split } = this.props.actionButtons
    return (
      <>
        <div id={`hand-${id + 1}-cards`}>
          {this.state.cardsData.map((card, i) => <Card key={Math.random()} card={card}/>)}
        </div>
        <div id="player-action">
          {!gameIsAlive || isBust ? null : <ActionButton key={'hit'} action={['HIT', hit]}/>}
          {!gameIsAlive || isBust ? null : <ActionButton key={'stay'} action={['STAY', stay]}/>}
          {!gameIsAlive || isBust ? null : <ActionButton key={'double-down'} action={['DOUBLE DOWN', doubleDown]}/>}
          {!gameIsAlive || isBust ? null : <ActionButton key={'split'} action={['SPLIT', split]}/>}
        </div>
      </>
    )
  }
}


export default Hand