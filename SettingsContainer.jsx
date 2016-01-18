var react = require('react');
var startGame = require('./actions').startGame;
var connect = require('react-redux').connect;


   function select(state){
      return state;
    }

	var options = {
	  easy: 0.2,
	  medium: 0.5,
	  hard: 0.8
	};
	var boardSizes = [9, 16, 36, 49];

	var SettingsContainer = react.createClass({

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
  getInitialState: function(){
    return {
      gameSize: boardSizes[0],
      difficulty: options.easy
    };
  },

  getGameStatus: function(){
    var text = 'Start New Game';
    if (this.props.hasWon || this.props.hasLost){
      text = 'Play again?'
    }
      return (<button 
        onClick = {_.bind(function(e){
          e.preventDefault()
           this.props.dispatch(startGame(this.state));
      }, this)}>{text}</button>)
  },

  onSelectBoardSize: function(e){
    e.preventDefault();
    this.setState({
      gameSize: e.target.value
    }, function(){
         this.props.dispatch(startGame(this.state));
    });
  },
  onSelectDifficulty: function(e){
    e.preventDefault();
    this.setState({
      difficulty: e.target.value
    }, function(){
          this.props.dispatch(startGame(this.state));
    });
  },

	render: function(){
		return (
			<form className="settings_container">
				<div className="board_settings">Board Size:
				<select onChange={this.onSelectBoardSize}>
            	{this.getBoardSizeInputs()}
          		</select>
				</div>
				<div className="board_settings">
				{this.getGameStatus()}
				</div>
				<div className="board_settings">Difficulty:
				<select onChange={this.onSelectDifficulty}>
            	{this.getDifficultyInputs()}
          		</select>
				</div>
			</form>
			);
	}

});


module.exports = connect(select)(SettingsContainer);