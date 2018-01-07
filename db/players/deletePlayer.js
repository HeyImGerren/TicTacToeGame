// const database = require("../index");
// const DELETE_CARD_QUERY = 'DELETE FROM deck WHERE id = $1';
// const deleteCard = id => database.none(DELETE_CARD_QUERY, [id]);

// module.exports = deleteCard;

const database = require("../index");

const DELETE_PLAYER_QUERY = 'DELETE FROM players WHERE id = $1';

const deletePlayer = id => {
  return database
    .none( DELETE_PLAYER_QUERY, [ id ] )
    .catch( error => console.log( "ERROR: ", error )); 
};

module.exports = deletePlayer; 