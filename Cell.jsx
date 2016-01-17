var react = require('react'),
cx = require('react-classset');

var Cell = react.createClass({
	getCellContent: function(){
		if (!this.props.covered){
			if (this.props.bomb){
				return 'X';
			} else {
				return this.props.adjacentBombs;
			}
		}
	},

	componentDidMount: function(){
		var node = react.findDOMNode(this);
		node.style.width = this.props.size + '%';
	},

	getCellClasses: function(){
		var classes = {
			"cell": true,
			"bomb": this.props.bomb,
			"covered": this.props.covered,
			"showCount": !this.props.bomb && !this.props.covered
		}
		return cx(classes);
	},

	render: function(){
		return (
			<div
			className = {this.getCellClasses()}
			bomb = {this.props.bomb}
			adjacentBombs = {this.props.adjacentBombs}
			covered = {this.props.covered}
			> 
			<div className = {'cellContent'}
			>
			{this.getCellContent()}
			</div>
			 </div>
			)
	}


});


module.exports = Cell;