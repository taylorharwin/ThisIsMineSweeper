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

	getInitialState: function(){
		return {flagged: false}
	},
	componentDidMount: function(){
		var node = react.findDOMNode(this);
		node.style.width = this.props.size + '%';
	},

	componentDidUpdate: function(){
		var node = react.findDOMNode(this);
		node.style.width = this.props.size + '%';
	},

	handleCellClick: function(){
		if (!this.timeout){
			this.props.handleCellClick()
		}
	},

	handleMouseDown: function(){
		var state = this.state;
		var toggleFlagged = _.bind(function(){
			this.setState({flagged: !this.state.flagged})
		}, this);

		this.timeOut = setTimeout(function(){
			toggleFlagged()
		}, 1000);
	},

	handleMouseUp: function(){
		clearTimeout(this.timeOut);
		this.timeout = null;
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
			onMouseDown = {this.handleMouseDown}
			onMouseUp = {this.handleMouseUp}
			onClick = {this.handleCellClick}
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