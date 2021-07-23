const Todo = require('../model/todo');
const {getToDoById} = require('../axios/todo');

const ToDoService = {
  fetchToDoById: async (id,res) => {
    const data = await getToDoById (id);
    const ToDo = new Todo({
      title: data.title,
    });
    await ToDo.save();
    return res.status(200).json({
      status: true,
      data,
    })
  },
};

module.exports = { ToDoService };
