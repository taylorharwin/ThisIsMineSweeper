var react = require('react');
var	Cell = require('./Cell.jsx');


var GameRow = react.createClass({
	propTypes: function(){
		return {
			row: react.PropTypes.array,
			size: react.PropTypes.number
		};
	},

	componentDidMount: function(){
		var node = react.findDOMNode(this);
		node.style.height = this.props.size + '%';
	},

	getCells: function(){
		return _.map(this.props.row, function(cell, index, rows){
			return (
				<Cell
				bomb = {cell.bomb}
				className = 'row'
				covered = {cell.covered}
				adjacentBombs = {cell.adjacentBombs}
				size = {(1 / rows.length) * 100}
				>
				</Cell>
				);
		})
	},
	render: function(){
		return (
			<div className="row">
			{this.getCells()}
			</div>
			)
	}
});

module.exports = GameRow;