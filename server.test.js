var request = require('supertest');
var app = require('./server');

var test = require('tape');


test('Correct items returned: ',  (t) => {
    request(app)
      .get('/api/items')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        var expectedUserName = 'John Smith';
        res.body.forEach((item, index) => {
            t.same(item.name, expectedUserName,'Name as expected');
        })
        t.error(err, 'No error');
        t.end();
      });
  });