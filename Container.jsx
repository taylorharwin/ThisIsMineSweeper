var react = require('react'),
    _ = require('lodash'),
    SettingsContainer = require('./SettingsContainer.jsx'),
    GameContainer = require('./GameContainer.jsx'),
    connect = require('react-redux').connect;

    function select(state){
      return {
        cells: JSON.stringify(state.board.cells),
        hasWon: state.gameWon,
        hasLost: state.gameLost
      }
    }

var Container = react.createClass({

  render: function(){
    return (
        <GameContainer 
        boardCells = {JSON.parse(this.props.cells)}
        hasWon = {this.props.hasWon}
        hasLost = {this.props.hasLost}
        >
        </GameContainer>
      )
  }

});


module.exports = connect(select)(Container);