var react = require('react'),
cx = require('react-classset');

var Cell = react.createClass({


	getCellContent: function(){
		if (this.props.bomb){
			return "Bomb"
		}
		return this.props.adjacentBombs;
	},

	getCellClasses: function(){
		var classes = {
			"cell_content": true,
			"bomb": this.props.bomb,
			"covered": false,
			"showCount": !this.props.bomb && !this.props.covered
		}
	},



	render: function(){
		return (
			<div
			className="cell"
			bomb = {this.props.bomb}
			adjacentBombs = {this.props.adjacentBombs}
			covered = {this.props.covered}
			> 
			<div
			className = "cell_content"
			>
			{this.getCellContent()}
			</div>
			 </div>
			)
	}


});


module.exports = Cell;