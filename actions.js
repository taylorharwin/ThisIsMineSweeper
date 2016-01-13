var actionTypes = {
  START_GAME: "START_GAME",
  END_GAME: "END_GAME",
  UNCOVER: "UNCOVER"
};

 function startGame(){
  return {type: actionTypes.START_GAME};
}

 function endGame(){
  return {type: actionTypes.END_GAME};
}



module.exports = {
  actionTypes: actionTypes,
  startGame: startGame,
  endGame: endGame
};