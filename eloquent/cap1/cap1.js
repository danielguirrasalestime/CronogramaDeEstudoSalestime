/**
 * Operadores
 */
console.log(typeof 4.5);
// → number
console.log(typeof "x");
// → string
/**
 * Comparação
 */
console.log(3 > 2);
// → true
console.log(3 < 2);
// → false
/**
 * Operador Lógico
 */

console.log(true && false);
// → false
console.log(true && true);
// → true
console.log(false || true);
// → true
console.log(false || false);
// → false
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

/**
 * Autoconversão de tipo
 */

console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true

console.log(null || "user");
// → user
console.log("Karl" || "user");
// → Karl
