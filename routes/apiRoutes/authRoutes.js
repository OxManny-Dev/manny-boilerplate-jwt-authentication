const router = require('express').Router();

const authController = require('./../../controllers/authController');

router.route('/signup')
  .post(authController.signUp);

module.exports = router;