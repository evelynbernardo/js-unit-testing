var assert = require('assert');

var media = function (a, b, c) {
    return (a + b + c)/3;
}

try {

    var expected = 10;

    assert.equal(expected, media(5, 10, 15));

} catch(e) {
    console.log(e);
}
