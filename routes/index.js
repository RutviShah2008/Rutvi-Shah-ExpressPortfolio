var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Rutvi Shah' });
});

router.get('/about', (req, res, next) => {
  res.render('about', {title: 'Rutvi Shah'});
});

router.get('/project', (req, res, next) => {
  res.render('project', {title: 'Have a look at my work!!!'});
});

router.get('/service', (req, res, next) => {
  res.render('service', {title: 'Services'});
});

router.get('/contact', (req, res, next) => {
  res.render('contact', {title: 'ContactMe'});
});

module.exports = router;
