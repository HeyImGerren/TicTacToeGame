const database = require("../index");

const READ_PLAYER_QUERY = 'SELECT * FROM players WHERE id = $1';

const readPlayer = id => {
  return database 
    .one( READ_PLAYER_QUERY, id )
    .catch( error => console.log( "ERROR: ", error ) );
};

module.exports = readPlayer;