const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world! in response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found'
                });
            })
            .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return user with name Kostya and age 36 in users array', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({ name: 'Kostya', age: 36 });
            })
            .end(done);
        });
    });
});



 