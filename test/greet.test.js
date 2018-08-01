var greet = require('../greet');
var assert = require("assert");

describe('The greet function', function(){

    it('should greet Lihle correctly', function(){
        assert.equal('Hello, Lihle', greet('Lihle'));
    });
    it('should greet Karen correctly', function(){
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it('should not greet if is not a name', function(){
        // assert.notEqual(56464, greet('This is not a name'));
        assert.notEqual(greet(16556), 'This is not a name')
    });
});
