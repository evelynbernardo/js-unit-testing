var assert = require('assert');


var soma = function (a, b) {
    return a + b;
}

var subtracao = function (a, b) {
    return a - b;
}

var multiplicacao = function (a, b) {
    return a * b;
}

var divisao = function (a, b) {
    return a / b;
}
try {

    var expected = 9;
    assert.equal(expected, soma(6, 3));

    var expected = 3;
    assert.equal(expected, subtracao(6, 3));

    var expected = 18;
    assert.equal(expected, multiplicacao(6, 3));

    var expected = 2;
    assert.equal(expected, divisao(6, 3));

} catch(e) {
    console.log(e);
}
