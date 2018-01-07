const database = require("../index"); 

const DELETE_GAME_QUERY = 'DELETE FROM games WHERE id = $1';

const deleteGame = id => {
  return database
    .none( DELETE_GAME_QUERY, [ id ] )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = deleteGame; 