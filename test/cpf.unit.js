if (typeof module !== 'undefined') {
  var assert = require('assert');
  var faker = require('../index');
};

describe("cpf.js", function () {
  it("generates formatted number", function () {
    var randomCPF = faker.cpf(true);
    var CPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;    
    assert.ok(CPF.test(randomCPF));
  });

  it("generates unformatted number", function () {
    var randomCPF = faker.cpf(false);
    var CPF = /^\d{3}\d{3}\d{3}\d{2}$/;
    assert.ok(CPF.test(randomCPF));;
  });
});
