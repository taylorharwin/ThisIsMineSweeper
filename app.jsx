var react = require('react');
var Provider = require('react-redux').Provider,
    Container = require('./Container.jsx'),
    gameStore = require('./gameStore');

var root = document.getElementById('root');

react.render(
    <Provider 
    store = {gameStore}
    >
      <Container />
    </Provider>
  , root);