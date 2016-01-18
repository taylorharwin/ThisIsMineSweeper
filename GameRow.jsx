var react = require('react');
var	Cell = require('./Cell.jsx');
var _ = require('lodash');
var	connect = require('react-redux').connect;
var uncover = require('./actions.js').uncover;

var select = function(state){
	return state;
};

var GameRow = react.createClass({
	propTypes: function(){
		return {
			row: react.PropTypes.array,
			size: react.PropTypes.number
		};
	},

	handleClick: function(x, y){
		this.props.dispatch(uncover({
			xPos: x,
			yPos: y
			})
		);
	},
	componentDidMount: function(){
		var node = react.findDOMNode(this);
		node.style.height = this.props.size + '%';
	},

	componentDidUpdate: function(){
		var node = react.findDOMNode(this);
		node.style.height = this.props.size + '%';
	},

	getCells: function(){
		var hasWon = this.props.hasWon,
          hasLost = this.props.hasLost;
          console.log(hasWon, hasLost);
		var handleClick = this.handleClick;
		return _.map(this.props.row, function(cell, index, rows){
			return (
				<Cell
				handleCellClick = {function(){handleClick.call( this, cell.xPos, cell.yPos)}}
				key = {index}
				bomb = {cell.bomb}
				covered = {cell.covered}
				adjacentBombs = {cell.adjacentBombs}
				size = {(1 / rows.length) * 100}
				hasWon = {hasWon}
          		hasLost = {hasLost}
				>
				</Cell>
				);
		}, this)
	},
	render: function(){
		return (
			<div className="row">
			{this.getCells()}
			</div>
			)
	}
});

module.exports = connect(select)(GameRow);