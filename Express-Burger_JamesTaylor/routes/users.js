var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.set('Token-Auth', '123bhv1h2j3vh123v123h')
  res.send('hit login handler');
});

module.exports = router;
