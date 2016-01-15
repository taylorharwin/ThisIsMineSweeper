var board = {
  cells: 
   [ { xPos: 0, yPos: 0, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 1, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 2, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 1, yPos: 0, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 1, yPos: 1, bomb: false, covered: true, adjacentBombs: 3 },
     { xPos: 1, yPos: 2, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 2, yPos: 0, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 1, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 2, bomb: false, covered: true, adjacentBombs: 1 } ],
  height: 3,
  width: 3,
  numBombs: 3 };

  var react = require('react'),
  _ = require('lodash');

      var GameRow = require('./GameRow.jsx');

  var root = document.getElementById('root');

  var GameBoard = react.createClass({

    createRows: function(){
      return _.map(_.groupBy(board.cells, 'yPos'), function(row, index, rows){
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
        {this.createRows()}
        </div>
        )
    }
  });


  react.render(<GameBoard />, root);