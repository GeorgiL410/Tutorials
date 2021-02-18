const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');

router.get('/', (req, res) => {
  res.render('home');
  })

  
module.exports = router;