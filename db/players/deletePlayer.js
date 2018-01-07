const database = require("../index");

const DELETE_PLAYER_QUERY = 'DELETE FROM players WHERE id = $1';

const deletePlayer = id => {
  return database
    .none( DELETE_PLAYER_QUERY, [ id ] )
    .catch( error => console.log( "ERROR: ", error )); 
};

module.exports = deletePlayer; 