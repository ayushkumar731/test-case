const Todo = require('../model/todo');
const {getToDoById} = require('../axios/todo');

const ToDoService = {
  fetchToDoById: async (id, res) => {
    const data = await getToDoById(id);
    return res.status(200).json({ status: true, data })
  },
};

module.exports = { ToDoService };
