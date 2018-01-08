const database = require("../index");

const UPDATE_WINNER_QUERY = 'UPDATE players SET winner = $1 WHERE id = $2';

const updateWinner = ( isWinner, id ) => {
  return database
    .none( UPDATE_WINNER_QUERY, [ isWinner, id ] )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = updateWinner; 
