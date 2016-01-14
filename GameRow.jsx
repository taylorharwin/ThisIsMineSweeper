var react = require('react');
var	Cell = require('./Cell.jsx');


var GameRow = react.createClass({
	propTypes: function(){
		return {
			row: react.propTypes.array
		}
	},

	getCells: function(){
		return _.map(this.props.row, function(cell, index){
			return (
				<Cell
				bomb = {cell.bomb}
				className = 'row'
				covered = {cell.covered}
				adjacentBombs = {cell.adjacentBombs}
				>
				</Cell>
				)
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