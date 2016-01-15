var react = require('react'),
	connect = require('react-redux').connect;



var GameContainer = React.createClass({


	render: function(){
		return <div>GameContainer</div>
	}
});

function select(state){
	return state;
}

module.exports = connect(select(GameContainer));