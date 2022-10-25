var express = require('express');
var router = express.Router();

//TODO: Need to implement the database and data model
//TODO: Remove mock objects once the database is active

const items = {
  "name":"xyz",
  "description":"xyz@123",
  "image":"xyz@xyz.com"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Burger', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Home', function(req, res, next) {
  res.render('index', { title: 'Express Burger', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Burgers', function(req, res, next) {
  res.render('burgers', { title: 'Burgers', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Sides', function(req, res, next) {
  res.render('sides', { title: 'Sides', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Desserts', function(req, res, next) {
  res.render('desserts', { title: 'Desserts', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Directions', function(req, res, next) {
  res.render('directions', { title: 'Directions', products: [items] });
  //return res.redirect('/Home');
});

router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', products: [items] });
  //return res.redirect('/Home');
});

module.exports = router;
