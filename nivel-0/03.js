var assert = require('assert');

var areaQuadrada = function (a,b) {
    return a * b;
}

try {

    var expected = 27;

    assert.equal(expected, areaQuadrada(3,9));

} catch(e) {
    console.log(e);
}
