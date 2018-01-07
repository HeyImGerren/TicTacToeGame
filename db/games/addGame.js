const database = require("../index");

const INSERT_GAME_QUERY = `INSERT INTO games 
  (numberofplayers,"createdAt","updatedAt")
  VALUES($1,$2,$3)
  RETURNING id`;

const addGame = gameObject => {
  let currentDate = new Date(); 
  gameObject[ "createdAt" ] = currentDate;
  gameObject[ "updatedAt" ] = currentDate;

  const VALUES = [ gameObject.numberofplayers,
    gameObject.createdAt,
    gameObject.updatedAt ];
  
  return database 
    .one( INSERT_GAME_QUERY, VALUES )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = addGame;