const router = require('express').Router();
const authService = require('../services/authService');
router.get('/', (req, res) => {
  res.send('authController');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  authService.register(username, password)
    .then(createdUser => {
      res.redirect('/auth/login');
    })
    .catch(next);

});


module.exports = router;