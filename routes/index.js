var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function(request, response, next) {
    response
      .render('./account-forms/login', { title: 'Login' });
});

router
  .get('/registration', function( request, response, next ) {
    response
      .render('./account-forms/registration', { title: 'Registration'});
});

module.exports = router;
