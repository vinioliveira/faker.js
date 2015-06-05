var cpf = (function () {

  var format = function (number) {
    return strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  };

  var strip = function(number) {
    return (number || "").toString().replace(/[^\d]/g, "");
  };

  var verifierDigit = function(numbers) {
    numbers = numbers
              .split("")
              .map(function(number){ return parseInt(number, 10); });

    var modulus = numbers.length + 1;

    var multiplied = numbers.map(function(number, index) {
      return number * (modulus - index);
    });

    var mod = multiplied.reduce(function(buffer, number){
      return buffer + number;
    }) % 11;

    return (mod < 2 ? 0 : 11 - mod);
  };

  return function(formatted) {
    var numbers = "";

    for (var i = 0; i < 9; i++) {
      numbers += Math.floor(Math.random() * 9);
    }

    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);

    return (formatted ? format(numbers) : numbers);
  };
})();

module.exports = cpf;
