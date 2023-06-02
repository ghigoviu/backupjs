// Identificar si un valor existe
// .some()

const array = [4, 6, 1, 3, 12, 56, 7, 9, 10, 11, -4];

const res = array.some(valor => valor == 0 )

console.log(array.some(valor => valor == 1 ));
console.log(array.some(valor => valor == 11 ));
console.log(array.some(valor => valor == 111 ));

console.log(res);

const listaObjetos = [
    { name: 'Rodrigo', age:36}, 
    { name: 'Julian', age:34},
    { name: 'Ramiro', age:29},
    { name: 'Lucia', age:33},
    { name: 'Reggie', age:30}
];

console.log(listaObjetos.some(valor => valor.name == 'Rodrigo' ));

//Como obtener una lista de un objeto iterable
const str = "Hola mundo cruel"
console.log(str[5]);

const ar_str = Array.from(str)
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
console.log(Array.from(set));

const keys = array.keys();
console.log(keys);

console.log(Array.from(keys));