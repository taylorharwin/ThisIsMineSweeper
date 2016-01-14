var gameReducer = require('./gameReducer');
var createStore = require('redux').createStore;

var START_GAME = require('./actions').actionTypes.START_GAME,
    END_GAME = require('./actions').actionTypes.END_GAME,
    startGame = require('./actions').startGame,
    endGame = require('./actions').endGame;

var gameStore = createStore(gameReducer);

module.exports = gameStore;

