var assert = require('assert');

var custoFinal = function(custoFabrica) {
    var custoDistribuidor = custoFabrica * 0.28;
    var custoImposto = custoFabrica * 0.45;
    return custoFabrica + custoDistribuidor + custoImposto;
}

try {
    assert.equal(17300, custoFinal(10000));
} catch(e) {
    console.log(e);
}
