
var START_GAME = require('./actions').actionTypes.START_GAME,
    END_GAME = require('./actions').actionTypes.END_GAME

var initialState = ({
  gameStarted: false,
  board: {}
});

function gameReducer(state, action) {
  state = state || initialState;
  switch (action.type) {

    case START_GAME:
      return Object.assign({}, state, {gameStarted: true});

    case END_GAME:
      return Object.assign({}, state, {gameStarted: false});

    default:
      return state;
  }
}

module.exports = gameReducer;