//Indetifircar si un elemento existe dentro de la lista
// .some()

const array = [3, 4, 5, 6, 7, 2348, -2, 5, 789456]

const res = array.some(valor => valor < 0);
console.log(res);

const existe = array.some(valor => valor === 7)
console.log(existe);

//En listas de objetos
let listaObjetos = [
    {nombre : "Leire", edad: 35},
    {nombre : "Gorka", edad: 40},
    {nombre : "Leslie", edad: 45},
    {nombre : "Arnold", edad: 45},
    {nombre : "Jesse", edad: 50}
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel); //false

//Cómo obtener una lista a partir de un objeto iterable
const str = "Wenas noches bro"
console.log(str[3]); //

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([3, 4, 5, "Bye", 7, "Hola", -2, 789456]) //Elimina valores repetidos.
const ar_set = Array.from(set);

console.log(ar_set)

const keys = array.keys()
console.log(keys)

console.log(Array.from(keys))