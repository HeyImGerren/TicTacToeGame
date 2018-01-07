const database = require("../index"); 

const UPDATE_NUMBER_OF_PLAYERS_QUERY = 'UPDATE games SET numberofplayers = $1 WHERE id = $2'; 

const updateNumberOfPlayers = ( numberOfPlayers, id ) => {
  return database
    .none( UPDATE_NUMBER_OF_PLAYERS_QUERY, [ numberOfPlayers, id ] )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = updateNumberOfPlayers; 