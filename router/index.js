const express = require('express');
const router = express.Router();
const {fetchToDo} = require('../controller/todoCotroller');

//to use another router file
router.get('/api/v1/fetchToDo/:id',fetchToDo);

//exports the router
module.exports = router;