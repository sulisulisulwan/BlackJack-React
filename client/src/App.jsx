import React from 'react';
import Table from './components/Table.jsx'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gameIsAlive: false,
      dealerTurn: false,
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
        hands: [
          {
            cardsStrings: [],
            aceCount: 0,
            total: 0
          }
        ]
      },
      dealerHand: [],
      playerName: '',
      chips: 1000
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
    let dealerHand = this.state.dealerHand;
    for (let i = 0; i < 2; i++) {
      this.hit(deck, player1.hands[0].cardsStrings);
      this.hit(deck, dealerHand);
    }
    this.setState({
      deck: deck,
      player1: player1,
      dealerHand: dealerHand,
      gameIsAlive: true,
      dealerTurn: false
    })
  }

  hit(deck, hand) {
    hand.push(deck.pop());
    return deck;
  }

  stay() {
    this.setState({
      dealerTurn: true
    })
  }

  split() {

  }

  doubleDown() {

  }

  componentDidMount() {
  }

  render () {
    let gameIsAlive = this.state.gameIsAlive
    return (
      <>
        <Table
          player1={this.state.player1}
          actionButtons={
            {
              hit: this.hit,
              stay: this.stay,
              doubleDown: this.doubleDown,
              split: this.split
            }
          }
          gameIsAlive={gameIsAlive}
        />
        {gameIsAlive ? null : <button id="deal-cards" onClick={this.handleStartGame}>Deal Cards</button>}
      </>
    )
  }
}

export default App;