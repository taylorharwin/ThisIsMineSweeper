var react = require('react'),
    _ = require('lodash'),
    startGame = require('./actions').startGame
    connect = require('react-redux').connect;

    function select(state){
      return state;
    }


var Container = react.createClass({

  getInitialState: function(){
    return {
      gameSize: 9
    };
  },

  handleFormSubmit: function(e){
    e.preventDefault();
    dispatch(startGame(e.target.value));
  },

  getFormInputs: function(){
    var options = [9, 16, 36, 49];

    return _.map(options, function(option){
      return (
        <option  
          value={option} 
          >
          {option}
          </option>
        )});
  },


  render: function(){
    return (
      <div>Board size:
        <select onChange={this.handleFormSubmit}>
          {this.getFormInputs()}
        </select>
      </div>
      )
  }





});


module.exports = connect(select)(Container);