var assert = require('assert');

var media = function (a, b, c) {
    return (a);
}

var sucessor = function (a){
    return a + 1;
}
try {

    var expectedAntecessor = 9;
    var expectedSucessor = 11;

    assert.equal(expectedAntecessor, antecessor(10));
    assert.equal(expectedSucessor, sucessor(10));

} catch(e) {
    console.log(e);
}
