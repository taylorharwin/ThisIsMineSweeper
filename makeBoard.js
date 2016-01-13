var _ = require('lodash');

var boardCells = [
{xPos: 0, yPos: 0, bomb: false},
{xPos: 0, yPos: 1, bomb: false},
{xPos: 0, yPos: 2, bomb: false},
{xPos: 1, yPos: 0, bomb: true},
{xPos: 1, yPos: 1, bomb: false},
{xPos: 1, yPos: 2, bomb: false},
{xPos: 2, yPos: 0, bomb: false},
{xPos: 2, yPos: 1, bomb: false},
{xPos: 2, yPos: 2, bomb: false}
]
getBombsAroundCellCount = function(xCoord,yCoord, boardCells){
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
      )   && cell.bomb
    });
  return neighborsWhichAreBombs.length;
  };


  console.log(getBombsAroundCellCount(1, 1, boardCells));