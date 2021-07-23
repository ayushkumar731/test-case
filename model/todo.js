const  mongoose = require('mongoose');
const { Schema } = mongoose;

const ToDoSchema = new Schema({
  title: String,
});

const Todo = mongoose.model('Todo', ToDoSchema);
module.exports = Todo;