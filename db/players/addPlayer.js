// const database = require("../index");

// const INSERT_CARD_QUERY = `INSERT INTO deck 
//   (pipvalue,pipface,pipsuit,image,"imageBack","createdAt","updatedAt") 
//   VALUES($1,$2,$3,$4,$5,$6,$7) 
//   RETURNING id`;

// const addCard = cardObject => {
//   let currentDate = new Date();
//   cardObject["createdAt"] = currentDate;
//   cardObject["updatedAt"] = currentDate;

//   const VALUES = [cardObject.pipvalue,
//     cardObject.pipface,
//     cardObject.pipsuit,
//     cardObject.image,
//     cardObject.imageBack,
//     cardObject.createdAt,
//     cardObject.updatedAt];

//   return database.one(INSERT_CARD_QUERY, VALUES)
//     .catch((error) => {
//       console.log(error);
//     })
// };

// module.exports = addCard;

const database = require("../index");

const INSERT_PLAYER_QUERY = `INSERT INTO players
  (gamesfk,winner,symbol,myturn,"createdAt","updatedAt")
  VALUES($1,$2,$3,$4,$5,$6)
  RETURNING id`;

  const addPlayer = playerObject => {
    let currentDate = new Date();
    playerObject[ "createdAt" ] = currentDate;
    playerObject[ "updatedAt" ] = currentDate;

    const VALUES = [ playerObject.gamesfk,
      playerObject.winner,
      playerObject.symbol,
      playerObject.myturn,
      playerObject.createdAt,
      playerObject.updatedAt ];

    return database
      .one( INSERT_PLAYER_QUERY, VALUES )
      .catch( error => console.log( "ERROR: " , error ));
  };

module.exports = addPlayer; 