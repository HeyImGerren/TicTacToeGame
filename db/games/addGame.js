// const database = require("../index");

// const INSERT_PLAYER_QUERY = `INSERT INTO players
//   (gamesfk,winner,symbol,myturn,"createdAt","updatedAt")
//   VALUES($1,$2,$3,$4,$5,$6)
//   RETURNING id`;

//   const addPlayer = playerObject => {
//     let currentDate = new Date();
//     playerObject[ "createdAt" ] = currentDate;
//     playerObject[ "updatedAt" ] = currentDate;

//     const VALUES = [ playerObject.gamesfk,
//       playerObject.winner,
//       playerObject.symbol,
//       playerObject.myturn,
//       playerObject.createdAt,
//       playerObject.updatedAt ];

//     return database
//       .one( INSERT_PLAYER_QUERY, VALUES )
//       .catch( error => console.log( "ERROR: " , error ));
//   };

// module.exports = addPlayer; 

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