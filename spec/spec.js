const sinon = require('sinon');
const nock = require('nock');
const { ToDoService } = require('../service/todo');
const todos = require('../axios/todo');
const httpMocks = require('node-mocks-http');

describe('ToDo', () => {
  let req = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter
  });

  describe('GET getToDoById', () => {
    beforeEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
      nock('https://jsonplaceholder.typicode.com').get('/todos/1').reply(200, {
        "userId": 2,
        "id": 1,
        "title": "Ronak aut autem",
        "completed": false
      });
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('should fetch toDo by Id', async (done) => {
      const response = await ToDoService.fetchToDoById(1, req);
      const json = response._getJSONData();
      expect(response.statusCode).toEqual(200);
      expect(json.status).toEqual(true);
      expect(json.data.id).toEqual(1);
      expect(json.data.userId).toEqual(2);
      expect(json.data.title).toEqual("Ronak aut autem");
      done();
    });
  });

  // describe('with mocks', () => {
  //   beforeEach(() => {
  //     sinon
  //       .stub(todos, 'getToDoById')
  //       .returns({
  //         "userId": 2,
  //         "id": 1,
  //         "title": "Yo aut autem",
  //         "completed": false
  //       });
  //   });
  //
  //   afterEach(() => {
  //   });
  //
  //   it('with mocks', async () => {
  //     const response = await ToDoService.fetchToDoById(1, req);
  //     const json = response._getJSONData();
  //     console.log(json);
  //     expect(response.statusCode).toEqual(200);
  //     expect(json.status).toEqual(true);
  //     expect(json.data.id).toEqual(1);
  //     expect(json.data.userId).toEqual(2);
  //     expect(json.data.title).toEqual("Yo aut autem");
  //   })
  // });
});
