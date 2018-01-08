const database = require("../index");

const UPDATE_TURN_QUERY = 'UPDATE players SET myturn = $1 WHERE id = $2';

const updatePlayerTurn = ( isMyTurn, id ) => {
  return database
    .none( UPDATE_TURN_QUERY, [ isMyTurn, id ] )
    .catch( error => console.log( "ERROR: ", error ) );
};

module.exports = updatePlayerTurn;