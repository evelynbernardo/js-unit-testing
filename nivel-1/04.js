var assert = require('assert');

var reajuste = function(salario, reajuste){
    return salario * (reajuste/100);
}

try {
    assert.equal(150, reajuste(1000, 15));
}
catch(e){
    console.log(e);
}
