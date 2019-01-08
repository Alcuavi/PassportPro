var express = require('express');
var router = express.Router();
const Passport = require('../helpers/passportHelper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login'
  })
});

router.post ('/login',Passport.authenticate('local', {
  failureRedirect: '/login', failureFlash: true
}),(req, res, next) => {
  res.send(200).json(req.user.id);
});

module.exports = router;
