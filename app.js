if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
// const deckTable = require("./db/deck");
// let cardObject = {
//   pipvalue: deckContent.deck[0].pipvalue,
//   pipface: deckContent.deck[0].pipface,
//   pipsuit: deckContent.deck[0].pipsuit, 
//   image: deckContent.deck[0].image,
//   imageBack: "blackjack/assets/cardsImages/red_back.png"
// };
//deckTable.addCard(cardObject); 
//deckTable.deleteCard(7);

const playerTable = require("./db/players");
const gamesTable = require("./db/games");

let gameObject = {
  numberofplayers: 2
};

// Here is how you create a game row and create a player row that links to the game row
// gamesTable
//   .addGame( gameObject )
//   .then( result => {
//     let playerObject = {
//       gamesfk: result.id, 
//       winner: true,
//       symbol: 'x',
//       myturn: true
//     };
//     playerTable
//       .addPlayer( playerObject )
//       .then( playerResult => {
//         console.log( playerResult.id );
//       })
//       .catch( error => console.log( "ERROR: ", error ));
//   })
//   .catch((error) => {
//     console.log(error); 
//   });

//TESTING DELETE
// playerTable.deletePlayer(3)
// .catch(error => console.log(error)); 

// gamesTable.deleteGame(5)
// .catch(error => console.log(error));

module.exports = app;
