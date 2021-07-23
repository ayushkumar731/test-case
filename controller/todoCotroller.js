const { ToDoService } = require('../service/todo');

const fetchToDo = async (req, res) => {
  const { id } = req.params;
  await ToDoService.fetchToDoById(id,res);
};

module.exports = { fetchToDo };