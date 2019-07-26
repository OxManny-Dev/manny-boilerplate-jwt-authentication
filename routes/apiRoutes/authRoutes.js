const router = require('express').Router();

const authController = require('./../../controllers/authController');

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');


router.route('/signup')
  .post(authController.signUp);

router.route('/signin')
  .post(authMiddleware.requireSignIn, authController.signIn);

module.exports = router;