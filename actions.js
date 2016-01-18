var actionTypes = {
  START_GAME: "START_GAME",
  END_GAME: "END_GAME",
  UNCOVER: "UNCOVER"
};

 function startGame(config){
    return {
  	type: actionTypes.START_GAME,
  	config: config
  };
}
 function endGame(){
  return {
    type: actionTypes.END_GAME
  };
}

 function uncover(coords){
 	return {
 		type: actionTypes.UNCOVER,
 		coords: coords
 	};
 }


module.exports = {
  actionTypes: actionTypes,
  startGame: startGame,
  endGame: endGame,
  uncover: uncover
};