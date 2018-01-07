const database = require("../index");

const READ_GAME_QUERY = 'SELECT * FROM games WHERE id = $1';

const readGame = id => {
  return database
    .one( READ_GAME_QUERY, id )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = readGame;