const assert = require('assert')
const containsDuplicate = require('Array/contains-duplicate.js')
describe('Array', function () {
    describe('#contains duplicate', function () {
        it('should return true when it contains duplicate', function () {
            assert.equal(containsDuplicate([1, 2, 3,1]), true);
        });
    });
    describe('#do not contains duplicate', function () {
        it('should return true when it contains duplicate', function () {
            assert.equal(containsDuplicate([1, 2, 3]), false);
        });
    });
});