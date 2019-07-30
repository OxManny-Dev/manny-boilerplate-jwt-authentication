const router = require('express').Router();
const todoController = require('./../../controllers/todoController');

const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/todo

router.route('/')
  .get(authMiddleware.requireAuth, todoController.getTodos)
  .post(authMiddleware.requireAuth, todoController.createTodo)


module.exports = router;