  var react = require('react'),
      cx = require('react-classset'),
  _ = require('lodash');
  var GameRow = require('./GameRow.jsx');
  var SettingsContainer = require('./SettingsContainer.jsx');


  var GameBoard = react.createClass({
  
    createRows: function(){
      return _.map(_.groupBy(this.props.boardCells, 'yPos'), function(row, index, rows){
        var size = (1 / _.size(rows)) * 100;
        return (<GameRow 
          row = {row}
          key = {index}
          size = {size}
          > 
          </GameRow>)
      }, this);
    },

    getGameStatusClasses: function(){
      var classes = {
      "gameLost": this.props.hasLost,
      "gameWon": this.props.hasWon,
      "newGame": !this.props.hasLost && !this.props.hasWon,
      "board_container": true
      };
      return cx(classes);
    },

    render: function(){
      return (
        <div className="game_container">
          <SettingsContainer 
            hasWon = {this.props.hasWon}
            hasLost = {this.props.hasLost}
          />
          <div className={this.getGameStatusClasses()}>
            {this.createRows()}
          </div>
        </div>
        )
    }
  });


module.exports = GameBoard;