// Iterar los valores de una lista
const array  = ["hola", 2, 5, 7, 90, false, undefined];

//Forma poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Forma S6
let suma = 0;
const arrayNums = [1, 12, 3, 23, 5, 9, 7, 10];
arrayNums.forEach(valor => {
   suma += valor;
   console.log(valor);
});

console.log(suma);

//Buscar un valor dentro de una lista con .find()
const variable = array.find(valor => {
    if (valor === 90) return true;
});

//Búsqueda avanzada
const listaObjetos = [
    { name: 'Rodrigo', age:36}, 
    { name: 'Julian', age:34},
    { name: 'Ramiro', age:29},
    { name: 'Lucia', age:33},
    { name: 'Reggie', age:30}
];

const objeto = listaObjetos.find( objeto => objeto.name == "Reggie");
console.log(objeto);

const {edad } = listaObjetos.find( objeto => objeto.name == "Reggie");
console.log(edad);