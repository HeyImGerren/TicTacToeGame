const database = require("../index");

const PLAYER_MOVES_JOIN_QUERY = 'SELECT * FROM playermoves WHERE playerfk = $1';

const getPlayerMoves = playersfk => {
  return database
    .manyOrNone( PLAYER_MOVES_JOIN_QUERY, [ playersfk ] )
    .catch( error => console.log( "ERROR: ", error ) );
};

module.exports = getPlayerMoves; 