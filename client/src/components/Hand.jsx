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
    this.actionHandler = this.actionHandler.bind(this);
  }

  actionHandler(e) {
    let [action, handId] = e.target.id.split('-')
    action === 'hit' ? this.props.actionButtons.hit(this.props.deck, this.props.hand)
      : action === 'stay' ? this.props.actionButtons.stay(this.props.hand)
      : action === 'doubleDown' ? this.props.actionButtons.doubleDown(this.props.deck, this.props.hand)
      : this.props.actionButtons.split(this.props.deck, this.props.hand, this.props.handId)
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
    console.log(this.props)
    let handId = this.props.id
    let gameConditionals = this.props.gameConditionals
    gameConditionals.isBust = this.state.isBust;

    return (
      <>
        <div id={`hand-${handId + 1}-cards`}>
          {this.state.cardsData.map((card, i) => <Card key={Math.random()} card={card}/>)}
        </div>
        <div id="player-action">
          {!utils.isHitPossible(gameConditionals) ? null : <ActionButton key={'hit'} action={[`hit-hand${handId + 1}`, this.actionHandler, 'HIT']}/>}
          {!gameConditionals.isGameAlive ? null : <ActionButton key={'stay'} action={[`stay-hand${handId + 1}`, this.actionHandler, 'STAY']}/>}
          {!gameConditionals.isGameAlive ? null : <ActionButton key={'double-down'} action={[`doubledown-hand${handId + 1}`, this.actionHandler, 'DOUBLE DOWN']}/>}
          {!gameConditionals.isGameAlive ? null : <ActionButton key={'split'} action={[`split-hand${handId + 1}`, this.actionHandler, 'SPLIT']}/>}
        </div>
      </>
    )
  }
}


export default Hand