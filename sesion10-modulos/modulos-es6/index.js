//Forma de importar funciones según la ES6
//No olvidar que en el archivo de package.json se debe agregar
//  "type": "module",
import { suma, exponente} from './modulos/math.js';

console.log(suma(4,12));
console.log(exponente(4,12));

import * as letras from './modulos/literacy.js';
const autor = letras.default.getAutor();
console.log(autor);

// Ejecutar usando npm start si el json está bien configurado.