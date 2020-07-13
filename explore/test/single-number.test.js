const assert = require('assert')
const singleNumber = require('Array/single-number.js')
describe('Array', function () {
    describe('#single number', function () {
        it('should return the single number', function () {
            assert.equal(singleNumber([4,1,2,1,2]), 4);
        });
    });
});