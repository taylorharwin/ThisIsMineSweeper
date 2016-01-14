var _ = require('lodash');

var Board = function Board(height, width, numBombs){
   this.cells = [];
   this.height = height || 3;
   this.width = width || 3;
   this.numBombs = numBombs || 3;

  this.getBoardCells();
  this.mapBombsToCells();
  this.getCounts();

  return this.board;
};

Board.prototype.getBoardCells =  function(){
  _.times(this.width, _.bind(function(x){
    _.times(this.height, _.bind(function(y){
      this.cells.push(this.makeCell(x, y));
    }, this));
  }, this));
};

Board.prototype.getBombCells = function(){
  var bombArray = new Array(this.cells.length);
  _.times(this.numBombs, function(idx){
        bombArray[idx] = true;
  });
  return _.shuffle(bombArray);
};

Board.prototype.mapBombsToCells = function(){
  _.each(this.getBombCells(), _.bind(function(isBomb, idx){
    this.cells[idx].bomb = isBomb || false;
  }, this));
};

Board.prototype.getBombsAroundCellCount = function(xCoord,yCoord, boardCells){
  var neighborsWhichAreBombs =  boardCells.filter(function(cell){
      return (
        cell.xPos === xCoord && cell.yPos ===  yCoord + 1 ||
        cell.xPos === xCoord && cell.yPos === yCoord - 1  ||
        cell.yPos === yCoord && cell.xPos === xCoord + 1 ||
        cell.yPos === yCoord && cell.xPos === xCoord - 1 ||
        cell.xPos === xCoord + 1 && cell.yPos === yCoord + 1 ||
        cell.xPos === xCoord - 1 && cell.yPos === yCoord - 1 ||
        cell.xPos === xCoord + 1 && cell.yPos === yCoord - 1 ||
        cell.xPos === xCoord - 1 && cell.yPos === yCoord + 1
      )   && cell.bomb;
    });
  return neighborsWhichAreBombs.length;
  };

Board.prototype.getCounts = function(){
  _.each(this.cells, _.bind(function(cell, index, boardCells){
      cell.adjacentBombs = this.getBombsAroundCellCount(cell.xPos, cell.yPos, boardCells);
    }, this));
};

Board.prototype.makeCell = function MakeCell(xPos, yPos){
  return {
    xPos: xPos,
    yPos: yPos,
    bomb: false,
    covered: true
  };
};

module.exports = Board;


