const router = require('express').Router();
const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config');
// const { body, validationResult } = require('express-validator');
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/register',
  (req, res, next) => {
    const { username, password, passwordRepeat } = req.body;
    authService.register(username, password)
      .then(createdUser => {
        res.redirect('/auth/login');
      })
      .catch(next);

  });

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  authService.login(username, password)
    .then(token => {
      res.cookie(COOKIE_NAME, token, { httpOnly: true });
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      next(err);
    });

});

router.get('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect('/');
});


module.exports = router;