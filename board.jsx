var board = {
  cells: 
   [ { xPos: 0, yPos: 0, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 1, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 2, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 0, yPos: 3, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 0, yPos: 4, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 5, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 0, yPos: 6, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 1, yPos: 0, bomb: true, covered: false, adjacentBombs: 1 },
     { xPos: 1, yPos: 1, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 1, yPos: 2, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 1, yPos: 3, bomb: false, covered: false, adjacentBombs: 0 },
     { xPos: 1, yPos: 4, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 1, yPos: 5, bomb: true, covered: true, adjacentBombs: 0 },
     { xPos: 1, yPos: 6, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 2, yPos: 0, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 1, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 2, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 3, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 4, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 5, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 2, yPos: 6, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 3, yPos: 0, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 3, yPos: 1, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 3, yPos: 2, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 3, yPos: 3, bomb: false, covered: true, adjacentBombs: 3 },
     { xPos: 3, yPos: 4, bomb: true, covered: true, adjacentBombs: 1 },
     { xPos: 3, yPos: 5, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 3, yPos: 6, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 4, yPos: 0, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 4, yPos: 1, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 4, yPos: 2, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 4, yPos: 3, bomb: true, covered: true, adjacentBombs: 2 },
     { xPos: 4, yPos: 4, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 4, yPos: 5, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 4, yPos: 6, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 5, yPos: 0, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 5, yPos: 1, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 5, yPos: 2, bomb: false, covered: true, adjacentBombs: 2 },
     { xPos: 5, yPos: 3, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 5, yPos: 4, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 5, yPos: 5, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 5, yPos: 6, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 6, yPos: 0, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 6, yPos: 1, bomb: true, covered: true, adjacentBombs: 0 },
     { xPos: 6, yPos: 2, bomb: false, covered: true, adjacentBombs: 1 },
     { xPos: 6, yPos: 3, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 6, yPos: 4, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 6, yPos: 5, bomb: false, covered: true, adjacentBombs: 0 },
     { xPos: 6, yPos: 6, bomb: false, covered: true, adjacentBombs: 0 } ],
  height: 7,
  width: 7,
  numBombs: 7 }

  var react = require('react'),
  _ = require('lodash');
  var GameRow = require('./GameRow.jsx');
  var SettingsContainer = require('./SettingsContainer.jsx');
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
          <SettingsContainer />
          <div className="board_container"s>
            {this.createRows()}
          </div>
        </div>
        )
    }
  });


  react.render(<GameBoard />, root);