const database = require("../index");

const READ_USER_QUERY = `SELECT * FROM users WHERE username = $1`;

const readUserByUsername = username => {
  return database   
    .one( READ_USER_QUERY, username )
    .catch( error => console.log( "ERROR: ", error ));
};

module.exports = readUserByUsername; 