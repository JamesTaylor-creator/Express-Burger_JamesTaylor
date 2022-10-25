var express = require('express');
var router = express.Router();

//TODO: Need to implement the database and data model
//TODO: Remove mock objects once the database is active

const data = {
  "name":"xyz",
  "description":"xyz@123",
  "image":"xyz@xyz.com"
};

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;