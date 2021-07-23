const axios = require('axios');

const getToDoById = async (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}

module.exports = { getToDoById }