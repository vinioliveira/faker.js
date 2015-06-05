if (typeof module !== 'undefined') {
  var assert = require('assert');
  var faker = require('../index');
};

describe("cnpj.js", function () {
  it("generates formatted number", function () {
    var randomCNPJ = faker.cnpj(true);
    var CNPJ = /^(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})$/;    
    assert.ok(CNPJ.test(randomCNPJ));
  });

  it("generates unformatted number", function () {
    var randomCNPJ = faker.cnpj(false);
    var CNPJ = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
    assert.ok(CNPJ.test(randomCNPJ));;
  });
});