const database = require("../index");

const INSERT_USER_QUERY = `INSERT INTO users
  (username,password,"createdAt","updatedAt")
  VALUES($1,$2,$3,$4)`;

const addUser = userObject => {
  let currentDate = new Date();
  userObject[ "createdAt" ] = currentDate;
  userObject[ "updatedAt" ] = currentDate;

  const VALUES = [ userObject.username,
    userObject.password,
    userObject.createdAt,
    userObject.updatedAt ];
  
  return database 
    .none( INSERT_USER_QUERY, VALUES )
    .catch( error => console.log( "ERROR: ", error ) ); 
};

module.exports = addUser; 