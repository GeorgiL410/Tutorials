const router = require('express').Router();
const authService = require('../services/authService');
// const { body, validationResult } = require('express-validator');
router.get('/', (req, res) => {
  res.send('authController');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/register',
  // body('repeat-Password')
  //   .trim()
  //   .custom((value, { req }) => {
  //     if (value == req.body.password) {
  //       return Promise.reject('Passwords do not match!');
  //     }
  //   }),
  (req, res, next) => {
    // const errors = validationResult(req).array();
    // if (errors.length > 0) {
    //   let error = errors[0];
    //   return next(error);
    // }
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
      .then(user => {
        res.redirect('/');
      })
      .catch(err =>{
        console.log(err);
        next(err);
      });

  });

module.exports = router;