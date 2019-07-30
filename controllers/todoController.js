const db = require('./../models');

module.exports = {
  getTodos: async (req, res) => {
    try {
      const user = await db.User.findById(req.user._id).populate('todos');
      console.log(user.todos);
      res.json({ todos: user.todos });
    } catch(e) {
      res.json(e);
    }
  },
  createTodo: async (req, res) => {
    const { description } = req.body;
    try {
      const newTodo = new db.Todo({description});
      await newTodo.save();
      console.log(newTodo);
      const user = await db.User.findById(req.user._id);
      user.todos.push(newTodo);
      await user.save();
      res.json({ success: true });
    } catch(e) {
      res.status(403).json(e);
    }
  }
}