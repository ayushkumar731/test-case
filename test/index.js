const sinon = require('sinon');
const nock = require('nock');
const { ToDoService } = require('../service/todo');
const {getToDoById} = require('../axios/todo');

describe('ToDo', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000
    nock('https://jsonplaceholder.typicode.com').get('/todos/1').reply(200, {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    });
  })
  afterEach(() => {
    nock.cleanAll();
  });

  describe('GET getToDoById',() => {
    it('should fetch toDo by Id', (done) => {
      // getToDoById(1).then((res) => {
      //   expect(res.id).toBe(1);
      // });
  
      sinon
        .stub(ToDoService, "fetchToDoById")
        .withArgs(1)
        .returns({
          'status': true,
          'data': {
            'userId': 1,
            'id': 1,
            'title': "delectus aut autem",
            'completed': false
          }
        });
  
      const toDo = ToDoService.fetchToDoById(1);
  
      expect(toDo).toEqual({
        "data": {
          "completed": false,
          "id": 1,
          "title": "delectus aut autem",
          "userId": 1
        },
        "status": true
      });
      done();
    });
  })
 
});