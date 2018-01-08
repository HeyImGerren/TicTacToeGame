const database = require("../index");

const UPDATE_SYMBOL_QUERY = 'UPDATE players SET symbol = $1 WHERE id = $2';

const updateSymbol = ( symbol, id ) => {
  return database 
    .none( UPDATE_SYMBOL_QUERY, [ symbol, id ] )
    .catch( error => console.log( "ERROR: ", error ) );
};

module.exports = updateSymbol;