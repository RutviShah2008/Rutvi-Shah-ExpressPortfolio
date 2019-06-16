var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/about', (req, res, next) => {
  res.render('about', {});
});

router.get('/projects', (req, res, next) => {
  res.render('project', {});
});

router.get('/service', (req, res, next) => {
  res.render('service', {});
});

router.get('/contact', (req, res, next) => {
  res.render('contact', {});
});

// router.get('/:name',(req, res, next) => {
//   const name = req.params.name;
//   //Search our persons array and find where the name variable is equal 
//   const navName = portfolio.find(per => per.path === name);
//   //if no person generate an  error and pass to next function
//   if (!navName){
//     return next(new Error('You are not my family member - LOL!!!'));
//   }
//   //console.log(person);
//   //Pass our found person to the person view
//   res.render('navName',navName);
// });
module.exports = router;
