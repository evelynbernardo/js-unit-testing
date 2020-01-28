var assert = require('assert');
var processamento = function (a) {
    return a * 2;
}

try {

    var expected = 20;
    var actual   = 10;

    assert.equal(expected, processamento(actual));

} catch(e) {
    console.log(e);
}
