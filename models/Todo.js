const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: String,
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    ref: 'User',
    type: Schema.Types.ObjectId
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;