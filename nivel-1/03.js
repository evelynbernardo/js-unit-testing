var assert = require('assert');

var jurosSimples = function(c, i, n) {
    return c * (i/100) * n;
}

try {
    assert.equal(2560 , jurosSimples(16000, 4, 4));
} catch(e) {
    console.log(e);
}
