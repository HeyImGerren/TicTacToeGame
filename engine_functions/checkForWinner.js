const playerMovesTable = require("../db/playermoves");

const winningConditionsMap = new Map();

winningConditionsMap.set(0, [1,2,3] );
winningConditionsMap.set(1, [4,5,6] );
winningConditionsMap.set(2, [7,8,9] );
winningConditionsMap.set(3, [1,4,7] );
winningConditionsMap.set(4, [2,5,8] );
winningConditionsMap.set(5, [3,6,9] );
winningConditionsMap.set(6, [1,5,9] );
winningConditionsMap.set(7, [3,5,7] );

const checkForWinner = playerMovesArray => {
  //FOUND THE PROBLEM!!!
  //For some reason the size for playerMovesArray is undefined.
  //The issue is that you treat playerMovesArray as an object, so call length on it
  //instead of calling .size on it in the for loop
  //console.log(playerMovesArray.length);
  let winCounter = 0;
  for( let key = 0; key < winningConditionsMap.size; key++ ) {
    for( let number = 0; number < playerMovesArray.length; number++ ) {
      if(winningConditionsMap.get(key).includes(playerMovesArray[number])){
        winCounter++;
      }
    }

    if( winCounter === 3 ){
      return true;
    } else {
      winCounter = 0;
    }
  }
  
  return false;
};

module.exports = checkForWinner;