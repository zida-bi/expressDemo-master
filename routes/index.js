var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "expressDemo", firstHeadline: "Here's my first headline" });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('index', { title: "About Me", firstHeadline: "Example About Me BIO" });
});

/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact Me", firstHeadline: "Please enter your info" });
});

module.exports = router;
