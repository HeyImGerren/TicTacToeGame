const database = require("../index");
// monsters.readMonster = function( cardPK ) {
// 	return database.one( 
// 'SELECT * FROM "Monsters" 
// INNER JOIN "Doors" ON "Monsters"."doorID_FK" = "Doors"."doorsID" 
// INNER JOIN "Cards" ON "Cards"."cardsID" = "Doors"."cardID_FK" 
// WHERE "cardsID" = $1', [cardPK] );
// };
const PLAYER_MOVES_JOIN_QUERY = 'SELECT * FROM playermoves WHERE playerfk = $1';

const getPlayerMoves = playersfk => {
  return database
    .manyOrNone( PLAYER_MOVES_JOIN_QUERY, [ playersfk ] )
    .catch( error => console.log( "ERROR: ", error ) );
};

module.exports = getPlayerMoves; 