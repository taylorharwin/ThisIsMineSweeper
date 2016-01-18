  var react = require('react'),
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
      });
    },

    render: function(){
      return (
        <div className="game_container">
          <SettingsContainer 
            hasWon = {this.props.hasWon}
            hasLost = {this.props.hasLost}
          />
          <div className="board_container"s>
            {this.createRows()}
          </div>
        </div>
        )
    }
  });


module.exports = GameBoard;