//Ejercicio 7

/*
    Crea un archivo llamado conjuntos.js que contenga las siguientes líneas:

    - Un nuevo Set con los nombres de tu familia
    - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
    - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

let familia = new Set([ "Blanca", "Rodrigo", "Emi", "Said" ]);
familia.add("Rodrigo");

console.log(familia)

familia.add("Javascript");
console.log(familia)

/*
    Crea un archivo llamado fechas.js que contenga las siguientes líneas:

    - La fecha de hoy
    - La fecha de tu nacimiento
    - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
    - Una variable que contenga el día de tu nacimiento
    - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
    - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const today = new Date();
console.log(today)

const nacimiento = new Date(1997, 10, 03)
const mayorque = today > nacimiento
console.log(mayorque)
console.log(nacimiento.getMonth())
console.log(nacimiento.getFullYear())

//Una ventana que pregunta al usuario su edad y la almacena.
const edad = prompt("Cuál es tu edad?")