var express = require('express'),
    router  = express.Router();

/* GET users listing. */
router.get('/', function (request, response, next) {
  response.json('respond with a resource');
});

module.exports = router;
