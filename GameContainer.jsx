var react = require('react'),
	connect = require('react-redux').connect;

function select(state){
	return state;
}

var GameContainer = react.createClass({
	render: function(){
		return (<div>GameContainer</div>)
	}
});


module.exports = connect(select(GameContainer));