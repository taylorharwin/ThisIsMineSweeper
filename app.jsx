var render = require('react-dom').render;
var Provider = require('react-redux').Provider,
    Container = require('./Container'),
    gameStore = require('./gameStore');

var root = document.getElementById('root');

render(
    <Provider 
    store = {gameStore}
    >
      <Container />
    </Provider>
  , root);