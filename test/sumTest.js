var assert = require('assert');
var sum = require('./sum')

describe('Math in JS', function () {
    it('should support addition', function (done) {
    	setTimeout( function() {
    		assert.equal( sum(1, 1 ), 2);
    		done();
    	}, 100);
    });
});