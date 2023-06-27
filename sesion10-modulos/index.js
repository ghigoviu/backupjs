/*  Formas de importar o exportar módulos
    1, CommonJS - require
    2, Import - ES6 - import
*/

// 1.- De la manera de CommonJS
const moduleMath = require('./modulos/math.js');
//console.log(moduleMath);

let resultado = moduleMath.factorial(5);
console.log(resultado);


// También se puede exportar módulos en bloque
const { factorial, suma} = require('./modulos/math.js');
//const { factorial, suma} = moduleMath;

console.log(suma(100, 20));
resultado = factorial(5);
console.log(resultado);


// 2.- De la manera de ES6


