var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Rutvi Shah' });
});
//get about page
router.get('/about', (req, res, next) => {
  res.render('about', {title: 'Rutvi Shah'});
});
//get project page
router.get('/project', (req, res, next) => {
  res.render('project', {title: 'Have a look at my work!!!'});
});
//get service page
router.get('/service', (req, res, next) => {
  res.render('service', {title: 'Services'});
});
//get contact page
router.get('/contact', (req, res, next) => {
  res.render('contact', {title: 'ContactMe'});
});

module.exports = router;
