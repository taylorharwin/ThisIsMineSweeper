
var START_GAME = require('./actions').actionTypes.START_GAME,
    END_GAME = require('./actions').actionTypes.END_GAME,
    UNCOVER = require('./actions').actionTypes.UNCOVER,
    BoardModel = require('./BoardModel.js'),
    _ = require('lodash');

var initialState = ({
  gameStarted: true,
  gameWon: false,
  gameLost: false,
  board: new BoardModel(3,3,3)
});

function gameReducer(state, action) {
  state = state || initialState;
  switch (action.type) {

    case START_GAME:
    var size = Math.sqrt(action.config.gameSize);
    var numBombs = Math.floor(action.config.gameSize * action.config.difficulty);
      return Object.assign({}, state, {gameStarted: true, gameLost: false, gameWon: false, board: new BoardModel(size, size, numBombs)});

    case END_GAME:
      return Object.assign({}, state, {gameStarted: false});

    case UNCOVER:
      var winLossState = {};
      var coords = action.coords;
      var cells = state.board.cells;
      var cell = _.find(cells, {xPos: coords.xPos, yPos: coords.yPos})
      if (cell){
        cell.covered = false;
      }

      if (cell.adjacentBombs === 0){
        var neighbors = state.board.getNonBombNeighbors(coords.xPos, coords.yPos, state.board.cells);
      _.each(neighbors, function(cell){
        cell.covered = false;
      });
      }
      if(cell.bomb){
        _.each(state.board.cells, function(cell){
          cell.covered = false;
        });
        winLossState = {gameLost: true}
      }
      var coveredCells = _.filter(cells, function(cell){
        return cell.covered
      });
      if (_.every(coveredCells, {bomb: true}) && !cell.bomb){
        winLossState = {gameWon: true}
      }

      newState = Object.assign({}, state.board.cells, cells);

      return Object.assign({}, state, newState, winLossState);

    default:
      return state;
  }
}

module.exports = gameReducer;