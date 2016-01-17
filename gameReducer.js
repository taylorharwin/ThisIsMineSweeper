
var START_GAME = require('./actions').actionTypes.START_GAME,
    END_GAME = require('./actions').actionTypes.END_GAME,
    BoardModel = require('./BoardModel');

var initialState = ({
  gameStarted: false,
  board: {}
});

function gameReducer(state, action) {
  state = state || initialState;
  switch (action.type) {

    case START_GAME:
    var size = Math.sqrt(action.config.gameSize);
    var numBombs = Math.floor(size * action.config.difficulty);
      return Object.assign({}, state, {gameStarted: true, board: new BoardModel(size, size, numBombs)});

    case END_GAME:
      return Object.assign({}, state, {gameStarted: false});

    default:
      return state;
  }
}

module.exports = gameReducer;