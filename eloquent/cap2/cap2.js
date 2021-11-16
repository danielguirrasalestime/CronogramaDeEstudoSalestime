/**
 * Variaveis
 */

var caught = 5 * 5;
console.log(caught);
// 25
var ten = 10;
console.log(ten * ten);
// 100
var mood = "light";
console.log(mood);
// light
mood = "dark";
console.log(mood);
// dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105

/**
 * Funções
 */

alert("Good morning!");

var x = 30;
console.log("o valor de x é ", x);
// o valor de x é 30

console.log(Math.max(2, 4));
//4

console.log(Math.min(2, 4));
//2

confirm("Shall we, then?");

/**
 * Fluxo de Controle
 */

var theNumber = Number(prompt("Pick a number", "")); //Pega um numero
alert("Your number is the square root of " + theNumber * theNumber); //Retorna a o valor que numero é raíz quadrada

/**
 * Condições
 */

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  //Se o valor for um número
  alert("Your number is the square root of " + theNumber * theNumber);

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " + theNumber * theNumber);
else alert("Hey. Why didn't you give me a number?"); //Caso o valor não foi um número

var num = Number(prompt("Pick a number", "0"));

if (num < 10) alert("Small");
else if (num < 100)
  //Caso o ocorra a necessidade de mais de uma condição
  alert("Medium");
else alert("Large");

/**
 * Loops While e Do
 */

var number = 0;
while (number <= 12) {
  //Executa em repetição até que os valores passado no () sejam false
  console.log(number);
  number = number + 2;
}
// → 0
// → 2

do {
  var name = prompt("Who are you?");
} while (!name); //Executa uma vez depois em repetição até que os valores passado no () sejam false
console.log(name);

for (
  var number = 0;
  number <= 12;
  number = number + 2 //Faz a repetição semelhante a while diferença que os valores são passado dentro do ()
)
  console.log(number);
// → 0
// → 2

for (var current = 20; ; current++) {
  if (current % 7 == 0) break; //É possivel usar o 'break' para parar uma função
}
console.log(current);
// → 21

/**
 * Switch
 */

switch (
  prompt("What is the weather like?") //Envia uma caixa com possiveis soluções se nenhuma for escolida ou valor passado errado retorna o default
) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
