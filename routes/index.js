var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

const usersTable = require("../db/users");

/* GET home page. */
router
  .get( '/', function( request, response, next ) {
    response
      .render('./account-forms/login', { title: 'Login' });
});

router
  .get( '/registration', function( request, response, next ) {
    response
      .render('./account-forms/registration', { title: 'Registration'});
});

router  
  .post( '/register-user', function( request, response, next ) {
    request
      .checkBody("userName", "Username cannot be empty!" ).notEmpty(); 
    
    //any errors caught in the above checks are stored into this variable.
    const validationErrors = request.validationErrors();

    let userObject = {
      email: request.body.email,
      username: request.body.userName,
      password: request.body.password
    };

    usersTable
      .addUser( userObject )
      .then( () => { 
        response
          .render( './account-forms/login');
      })
  });

module.exports = router;
