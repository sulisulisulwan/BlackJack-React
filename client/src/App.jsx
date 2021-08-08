import React from 'react';
import Table from './components/Table.jsx'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      deck: [
        'A.S', 'A.C', 'A.D', 'A.H',
        '2.S', '2.C', '2.D', '2.H',
        '3.S', '3.C', '3.D', '3.H',
        '4.S', '4.C', '4.D', '4.H',
        '5.S', '5.C', '5.D', '5.H',
        '6.S', '6.C', '6.D', '6.H',
        '7.S', '7.C', '7.D', '7.H',
        '8.S', '8.C', '8.D', '8.H',
        '9.S', '9.C', '9.D', '9.H',
        '10.S', '10.C', '10.D', '10.H',
        'J.S', 'J.C', 'J.D', 'J.H',
        'Q.S', 'Q.C', 'Q.D', 'Q.H',
        'K.S', 'K.C', 'K.D', 'K.H'
      ],
      player1: {
        hands: {
          hand1: {
            id: 'hand1',
            cardsStrings: [],
            aceCount: 0,
            total: 0
          }
        }
      },
      dealerHand: {
        id: 'dealerHand',
        cardsStrings: [],
        aceCount: 0,
        total: 0
      },
      playerName: '',
      chips: 1000,
      gameConditionals: {
        isGameAlive: false,
        isDealerTurn: false
      }
    }
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.hit = this.hit.bind(this);
    this.stay = this.stay.bind(this);
    this.doubleDown = this.doubleDown.bind(this);
    this.split = this.split.bind(this);
  }

  shuffleDeck (deck) {
    let shuffledDeck = [];
    while (deck.length > 0) {
      let randomIndex = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck.splice(randomIndex, 1)[0]);
    }
    return shuffledDeck;
  }

  handleStartGame () {
    let deck = this.shuffleDeck(this.state.deck);
    let player1 = this.state.player1;
    let hand1 = player1.hands.hand1
    let dealerHand = this.state.dealerHand;
    for (let i = 0; i < 2; i++) {
      this.hit(deck, hand1);
      this.hit(deck, dealerHand);
    }
    this.setState({
      deck: deck,
      player1: player1,
      dealerHand: dealerHand,
      gameConditionals: {
        isGameAlive: true,
        isDealerTurn: false
      }
    })
  }

  hit(deck, hand) {
    console.log(hand)
    hand.cardsStrings.push(deck.pop());
    if (this.state.gameConditionals.isGameAlive) {
      if (hand.id === 'dealerHand') {
        //deal the dealer
      } else {
        let player1 = this.state.player1
        player1.hands[hand.id] = hand;
        this.setState({
          player1: player1
        })
      }
    }
    return deck;
  }

  stay() {
    this.setState({
      gameConditionals: {
        isDealersTurn: true
      }
    })
  }

  split() {

  }

  doubleDown() {

  }

  componentDidMount() {
  }

  render () {
    let gameConditionals = this.state.gameConditionals
    return (
      <>
        <Table
          player1={this.state.player1}
          deck={this.state.deck}
          actionButtons={
            {
              hit: this.hit,
              stay: this.stay,
              doubleDown: this.doubleDown,
              split: this.split
            }
          }
          gameConditionals={gameConditionals}
        />
        {gameConditionals.isGameAlive ? null : <button id="deal-cards" onClick={this.handleStartGame}>Deal Cards</button>}
      </>
    )
  }
}

export default App;