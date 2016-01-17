var react = require('react'),
    _ = require('lodash'),
    startGame = require('./actions').startGame,
    GameBoard = require('./GameBoard'),
    connect = require('react-redux').connect;

    function select(state){
      return state;
    }

var options = {
  easy: 0.2,
  medium: 0.5,
  hard: 0.8
};

var boardSizes = [9, 16, 36, 49];


var Container = react.createClass({

  getInitialState: function(){
    return {
      gameSize: boardSizes[0],
      difficulty: options.easy
    };
  },

  handleFormSubmit: function(e){
    e.preventDefault();
    this.props.dispatch(startGame(this.state));
  },

  onSelectBoardSize: function(e){
    e.preventDefault();
    this.setState({
      gameSize: e.target.value
    });
  },
  onSelectDifficulty: function(e){
    e.preventDefault();
    this.setState({
      difficulty: e.target.value
    });
  },

  getBoardSizeInputs: function(){
    return _.map(boardSizes, function(option, index){
      return (
        <option
          key={index}
          value={option}
          >
          {option}
          </option>
        )});
  },

  getDifficultyInputs: function(){
    return _.map(options, function(option, label){
      return (
        <option
          key={label}
          value={option}
          >
          {label}
          </option>
      )});
  },


  render: function(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
        Board Setup:
          <select onChange={this.onSelectBoardSize}>
            {this.getBoardSizeInputs()}
          </select>
          <br></br>
          <select onChange={this.onSelectDifficulty}>
            {this.getDifficultyInputs()}
          </select>
          <input type="submit" value="Start" />
        </form>
        <GameBoard board={this.props.board}>
        </GameBoard>
      </div>
      )
  }

});


module.exports = connect(select)(Container);