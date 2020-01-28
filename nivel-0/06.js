var assert = require('assert');

var mes = function (a) {
    return a*30;
}

try {

    var expected = 90;

    assert.equal(expected, mes(3));

} catch(e) {
    console.log(e);
}
