const database = require("../index");
//THE ERROR IS AT OR NEAR COLUMN IN THIS FILE
//^^ FIXED, the problem was that "column" is a reserved word so you can't
//just name a column "column"
const INSERT_PLAYER_MOVE_QUERY = `INSERT INTO playermoves
  (box,playerfk,"createdAt","updatedAt")
  VALUES($1,$2,$3,$4)
  RETURNING id`;

const addPlayerMove = playerMoveObject => {
  let currentDate = new Date();
  playerMoveObject[ "createdAt" ] = currentDate;
  playerMoveObject[ "updatedAt" ] = currentDate;

  const VALUES = [ playerMoveObject.box,
    playerMoveObject.playerfk,
    playerMoveObject.createdAt,
    playerMoveObject.updatedAt ];
  
  return database
    .one( INSERT_PLAYER_MOVE_QUERY, VALUES )
    .catch( error => console.log( "ERROR" , error ) );
}; 

module.exports = addPlayerMove;