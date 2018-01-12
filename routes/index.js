var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var bcrypt = require('bcrypt');
const saltRounds = 10; 

const usersTable = require("../db/users");

/* GET home page. */
router
  .get( '/', function( request, response, next ) {
    response
      .render('./account-forms/login', { title: 'Home' });
});

router
  .get( '/registration', function( request, response, next ) {
    response
      .render('./account-forms/registration', { title: 'Registration'});
});

router
  .post( '/profile', function( request, response, next ) {
    console.log(request.body.username);
    console.log(request.body.password);
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
            .then( () => { 
              response
                .render( './account-forms/login');
            });  
        })
    }
  });

module.exports = router;