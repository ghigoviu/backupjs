// Ordenamiento de listas o arrays

// .sort()
const array = [1, 2, 3, 4, 6, 12, 9, 8];

console.log(array);

array.sort((a, b) =>{
    if (a < b){
        return -1;
    }
    else if (a > b){
        return +1;
    } else {
        return 0;
    }
});

console.log(array);

const arrayNumerico = [4, 7, 1, 20, 12, 76, 43, 11, 5];

arrayNumerico.sort((a, b) => b - a);

console.log(arrayNumerico);

// Arrays de objetos
const listaObjetos = [
    { name: 'Rodrigo', age:36}, 
    { name: 'Julian', age:34},
    { name: 'Ramiro', age:29},
    { name: 'Lucia', age:33},
    { name: 'Reggie', age:30}
];

//Ordenar
listaObjetos.sort((a, b) => {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return +1;
    } else {
        return 0;
    }
});

listaObjetos.sort((a,b) => a.age - b.age);

console.log(listaObjetos);

