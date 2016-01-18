var gameReducer = require('./gameReducer.js');
var createStore = require('redux').createStore;

var START_GAME = require('./actions').actionTypes.START_GAME,
    END_GAME = require('./actions').actionTypes.END_GAME,
    UNCOVER = require('./actions').actionTypes.UNCOVER,
    startGame = require('./actions').startGame,
    uncover = require('./actions').uncover,
    endGame = require('./actions').endGame;

var gameStore = createStore(gameReducer);

module.exports = gameStore;

