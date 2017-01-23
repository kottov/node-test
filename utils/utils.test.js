const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');    
        });
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(3, 4, (sum) => {
            expect(sum).toBe(7);
            done();
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9).toBeA('number');
            done();
        });
    });

    // it('should expect some values', () => {
    //     expect({ name: 'John', age: 35 }).toInclude({ age: 35 });
    //     //expect([1,2,3]).toInclude(2);
    //     // expect({name: 'Jane'}).toEqual({name: 'John'});
    //     // expect(12).toNotBe(1);
    // });

    it('should set first name and last name for user object', () => {
        var user = { age: 25, location: 'Kiev' };
        utils.setName(user, 'John Doe');
        expect(user).toInclude({ firstName: 'John', lastName: 'Doe' });
    });

});
