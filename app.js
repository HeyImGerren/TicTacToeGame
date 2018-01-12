if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var bcrypt = require('bcrypt');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( expressValidator() );

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//TEST CODE FOR TESTING DATABASE 
const playersTable = require("./db/players");
const gamesTable = require("./db/games");
const playerMovesTable = require("./db/playermoves");

let gameObject = {
  numberofplayers: 2
};



//TESTING ADD
//Here is how you create a game row and create a player row that links to the game row
// gamesTable
//   .addGame( gameObject )
//   .then( result => {
//     let playerObject = {
//       gamesfk: result.id, 
//       winner: true,
//       symbol: 'x',
//       myturn: true
//     };
//     playersTable
//       .addPlayer( playerObject )
//       .then( playerResult => {
//         console.log( playerResult.id );
//       })
//       .catch( error => console.log( "ERROR: ", error ));
//   })
//   .catch((error) => {
//     console.log(error); 
//   });

// playersTable
//   .readPlayer(1)
//   .then( playerResult => {
//     let playerMoveObject = {
//       rowPosition: 1,
//       columnPosition: 1,
//       playerfk: playerResult.id
//     };
    
//     playerMovesTable
//       .addPlayerMove( playerMoveObject )
//       .then( ( result ) => console.log( "Here is the addPlayMoveResult: " + result.id ) )
//       .catch( error => console.log( "ERROR: ", error ) );
//   })
//   .catch( error => console.log( "Error: ", error ) );

//TESTING DELETE
// playersTable.deletePlayer(3)
// .catch(error => console.log(error)); 
// gamesTable.deleteGame(5)
// .catch(error => console.log(error));

//TESTING UPDATE 
// playersTable
//   .updateWinner( true, 4 )
//   .then(() => console.log("updated winner successfully!!"))
//   .catch( error => console.log(error));
// playersTable
//   .updateSymbol( 'o', 4 )
//   .then( () => console.log("Updated symbol successfully!" ) )
//   .catch( error => console.log( "ERROR: ", error ) );
// playersTable
//   .updatePlayerTurn( false, 4 )
//   .then( () => console.log("Updated myturn successfully!" ) )
//   .catch( error => console.log( "ERROR: ", error ) );
//gamesTable.updateNumberOfPlayers(8, 6);
// gamesTable
//   .readGame( 6 )
//   .then( gameResult => console.log( "id: " + gameResult.id + ", # of Players: " + gameResult.numberofplayers)); 


//TESTING READ
// playersTable
//   .readPlayer( 4 )
//   .then( ( playerResult ) => 
//     console.log("Games fk: " + playerResult.gamesfk + 
//       " Winner?: " + playerResult.winner + 
//       " Player Symbol: " + playerResult.symbol +
//       " Player Turn?: " + playerResult.myturn ));

//TESTING RETURNING MULTIPLE ROWS 
// playerMovesTable
//   .getPlayerMoves( 1 )
//   .then( result => console.log( result.length ) )
//   .catch( error => console.log( "couldn't return player moves!" ) );

module.exports = app;