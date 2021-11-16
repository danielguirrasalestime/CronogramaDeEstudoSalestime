var square = function (x) {
  return x * x;
};

console.log(square(12));
// → 144
var makeNoise = function () {
  console.log("Pling!");
};

makeNoise();
// → Pling!

var power = function (base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024
var x = "outside";

var f1 = function () {
  var x = "inside f1";
};
f1();
console.log(x);
// → outside

var f2 = function () {
  x = "inside f2";
};
f2();
console.log(x);
// → inside f2

function power(base, exponent) {
  if (exponent == undefined) exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

function multiplier(factor) {
  //Funções assim precisam de dupla chamada
  return function (number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8

function min(a, b) {
  if (a < b) {
    return a;
  }
  if (b < a) {
    return b;
  } else {
    return a;
  }
}
console.log(min(1, 2));
//1

function isEven(a) {
  if (a % 2) {
    return false;
  } else {
    return true;
  }
}

console.log(isEven(-1));

function countBs(string) {
  let valor = string.length;
  let retorno = 0;
  for (let index = 0; index < valor; index++) {
    if (string.charAt(index) === "B") {
      retorno++;
    }
  }
  return retorno;
}
console.log(countBs("BBBBAAAAA"));
//4

function count(string, letra) {
  let valor = string.length;
  let retorno = 0;
  for (let index = 0; index < valor; index++) {
    if (string.charAt(index) === letra) {
      retorno++;
    }
  }
  return retorno;
}

console.log(
  count(
    "BBBBAAAAAldfkdlfkjsdflkjsdlfjsdflkfajlkjlaksdjalskdjasldjsadlkjasdlkhdjfhakjfh",
    "f"
  )
);
