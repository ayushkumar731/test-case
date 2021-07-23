const sinon = require('sinon');
const nock = require('nock');
const { ToDoService } = require('../service/todo');
const {getToDoById} = require('../axios/todo');

describe('ToDo', () => {
  describe('GET getToDoById', () => {
    beforeEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
      nock('https://jsonplaceholder.typicode.com').get('/todos/1').reply(200, {
        "userId": 2,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      });
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('should fetch toDo by Id', async (done) => {
      const response = await getToDoById(1);
      expect(response.id).toEqual(1);
      expect(response.userId).toEqual(2);
      expect(response.title).toEqual("delectus aut autem");
      done();
    });
  })
  describe('with mocks', () => {
    beforeEach(() => {
      sinon
        .stub(ToDoService, "fetchToDoById")
        .withArgs(1)
        .returns({
          'status': true,
          'data': {
            'userId': 1,
            'id': 1,
            'title': "Ronak aut autem",
            'completed': false
          }
        });
    });

    afterEach(() => {
    });

    it('with mocks', () => {
      const response = ToDoService.fetchToDoById(1);
      expect(response.status).toEqual(true);
      expect(response.data.userId).toEqual(1);
      expect(response.data.id).toEqual(1);
      expect(response.data.title).toEqual('Ronak aut autem');
      expect(response.data.completed).toEqual(false);
    })
  });
});
