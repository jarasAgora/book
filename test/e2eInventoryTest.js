const request = require('supertest');
const app = require('../index');

describe('Book inventory', function () {
    it('allows to stock up the items', function (done) {
        request(app)
            .post('/stock')
            .send({ isbn: '0123456789', count: 10 })
            .expect({ isbn: '0123456789', count: 10 }, done);
    });
});