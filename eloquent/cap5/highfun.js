let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
//reduce((flat, current) => flat.concat(current), []) faz uma array de arrays virar  unico array

/**
 * Map
 */

function map(array, transform) {
  let mapped = [];
  for (let i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  }
  return mapped;
}
let overNinety = ancestry.filter(function (person) {
  return person.died - person.born > 90;
});
console.log(
  map(overNinety, function (person) {
    return person.name;
  })
);
// → ["Clara Aernoudts", "Emile Haverbeke",
//    "Maria Haverbeke"]

let roseDragon = "🌹🐉asdadsasdasdasdasdasdasdasdasd";
for (let char of roseDragon) {
  //for of para cara item da variavel passada
  console.log(char);
}

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

function every(array, test) {
  for (const iterator of array) {
    if (!test(iterator)) return false;
  }
  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
