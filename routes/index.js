var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var passport = require('passport');

var bcrypt = require('bcrypt');
const saltRounds = 10; 

const usersTable = require("../db/users");
const gamesTable = require("../db/games");
const playersTable = require("../db/players");
const playerMoveTable = require("../db/playermoves");

/* GET home page. */
router
  .get( '/', function( request, response, next ) {
    // console.log( request.user );
    // console.log( request.isAuthenticated() );
    response
      .render('../views/home', { title: 'Home' });
});

//DELETE THIS EVENTUALLY, JUST TRYING TO TEST THE GAME ROOM!!!
router
  .get( '/gametester', function( request, response, next ) {
    response
      .render('../views/game/game-board', { title: 'Game Test' });
  });

//ALSO DELETE THIS POSSIBLY
//so now that we figured out to access the database from the client side
//we need to figure out how to access the data being sent over 
//nvm it's in request.body
router
  .post( '/playermove', function( request, response, next ) {
    // let row = request.body.rowPosition;
    // let column = request.body.columnPosition;
    let boxClicked = request.body.box;
    const userID = request.session.passport.user;

    const playerMoveObject = {
      box: boxClicked,
      playerfk: userID,
    };

    playerMoveTable
      .addPlayerMove(playerMoveObject);
  });

  //ADDING IN THE GAME ROOM
  router
    .post( '/gamestart', function( request, response, next ) {
      console.log("made it into the game room"); 
      const userID = request.session.passport.user;
      console.log(userID);

      const gameObject = {
        numberofplayers: 1
      };

      gamesTable
        .addGame( gameObject )
        .then( gameResult => {
          console.log(gameResult.id);
          const gameID = gameResult.id; 
          const playerObject = {
            gamesfk: gameID,
            winner: false,
            symbol: 'x',
            myturn: true
          };
          playersTable
            .addPlayer( playerObject )
            .then( playerResult => {
              console.log("Added in player and created game!");
              // return response
              //   .redirect("/game");
        
            })
            .catch( error => console.log(error));
        })
        .catch( error => console.log(error));
     
        
    });

  router  
    .get('/game', function( request, response, next ){
      //window.location.href = 1600;
      //console.log("ATTEMPTING TO RENDER THE GAME BOARD");
      response
      .render("../views/game/game-board", { title: 'Game Test' });
      
    });

router
  .get( '/login', function( request, response, next ) {
    response  
      .render('../views/account-forms/login', { title: 'Login' });
  });

router  
  .post( '/login', passport.authenticate( 'local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

router  
  .get( '/logout', function( request, response ) {
    request.logout();
    request.session.destroy( () => {
      response.clearCookie( "connect.sid" );
      response.redirect('/');
    });
});
  

router
  .get( '/registration', function( request, response, next ) {
    response
      .render('./account-forms/registration', { title: 'Registration'});
});

router
  .get( '/profile', function( request, response, next ) {
    response.render('./profile', { title: 'Profile' }); 
  });

router
  .post( '/profile', authenticationMiddleware(), function( request, response, next ) {
    // console.log(request.body.username);
    // console.log(request.body.password);
    response
      .render('./profile', { title: 'Profile' });
  });

router  
  .post( '/register-user', function( request, response, next ) {
    request
      .checkBody( "email", "Please enter a valid email address (ex.janedoe@gmail.com)!" )
      .isEmail();
    request
      .checkBody( "email", "Email address must be between 4-100 characters! Please enter a valid email address!" )
      .len( 4, 100 ); 
    request
      .checkBody( "userName", "Username cannot be empty!" )
      .notEmpty(); 
    request 
      .checkBody( "userName", "Username must be between 4-15 characters long!" )
      .len( 4, 15 );
    request
      .checkBody( "password", "Password must be between 6-100 characters long!" )
      .len( 6, 100 );
    request
      .checkBody( "confirmPassword", "Passwords do not match! Please try again." )
      .equals( request.body.password );   
      
    //any errors caught in the above checks are stored into this variable.
    const validationErrors = request.validationErrors();
    const email = request.body.email;
    const username = request.body.userName;
    const password = request.body.password;

    if( validationErrors ) {
      //console.log( `ERRORS: ${JSON.stringify( validationErrors )}` );
      response 
        .render( './account-forms/registration', {
          errors: validationErrors
        });
    } else {
      bcrypt
        .hash( password, saltRounds, function( error, hash ) {
          let userObject = {
            email: email,
            username: username,
            password: hash
          };
      
          usersTable
            .addUser( userObject )
            .then( ( userResult ) => {
              const userID = userResult.id; 
              request.login( userID, function( error ) {
                response  
                  .redirect( '/' );
              });
              //console.log( "This is the user's ID: ", userResult.id ); 
              // response
              //   .render( './account-forms/login');
            })
            .catch( error => console.log( "ERROR: ", error ));   
        })
    }
  });

passport.serializeUser( function( userID, done ) {
  done( null, userID );
});

passport.deserializeUser( function( userID, done ) {
  done( null, userID );
}); 

function authenticationMiddleware() {  
	return( request, response, next ) => {
		console.log(`request.session.passport.user: ${JSON.stringify(request.session.passport)}`);

    if( request.isAuthenticated() ) {
      return next();
    }
    //think of this as the else statement, so it'll go here if the user is not authenticated
    response
      .redirect('/registration');
  };
};

module.exports = router;