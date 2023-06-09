// Listas 5: Ordenación y comparación entre dos listas

//.sort()
let array = [2, 56, 12, 76, 37, 5, 9, 7, 10]

console.log(array)

array.sort((a, b) => {
    if (a < b) return -1 //Así ordena el array
    else  return +1 
});

console.log(array);

//Ordenar únicamente array numéricos
let array2 = [2, 56, 12, 76, 37, 5, 9, 7, 10]

array2.sort((a, b) => a - b) 
/* Explicación:
    Si a es mayor que b entonces el resultado será positivo
    Si a es menor que b entonces el resultado será negativo
    Si el resultado es negativo los valores en los índices cambiarán.
    Para invertir el orden conviene cambiar a b-a.
*/

console.log(array2);

//Arrays de objetos
let listaObjetos = [
    {nombre : "Leire", edad: 35},
    {nombre : "Gorka", edad: 40},
    {nombre : "Leslie", edad: 45},
    {nombre : "Arnold", edad: 45},
    {nombre : "Jesse", edad: 50}
]

listaObjetos.sort((a, b) => {
    if(a.edad < b.edad) return -1;
    else return 1
});

console.log(listaObjetos)

//Comparar listas
// .every()

let array3 = [2, 56, 12, 76, 37, 5, 9, -7, 10, 4, -8]

array3.every(valor => {
    if (typeof valor === "number") return true;
    else return false;
});

//O de la siguiente manera
let resultado = array3.every(valor => valor > 0)
console.log(resultado)

//Comparación de listas
const ar1 = [1, 2, 3, 4, 5]
const ar2 = [1, 2, 3, 4, 5]

console.log(ar1 === ar2) //Devuelve false

const res = (array_1, array_2) => {
    if (array_1.lenght != array_2.lenght) return false;
    return array_1.every((valor, indice) => valor === array_2[indice] )
}

console.log(res(ar1, ar2));

const ar3 = [1, 2, 3, 4,]

console.log(res(ar1,ar3));