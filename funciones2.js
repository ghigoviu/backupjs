// Funciones de tipo flecha y funcione anómimas

const array = [1, 2, 3, 4, 5, 6];

let array2 = array.map(function(valor){
    return valor*2;
});
array2 = array.map((valor) => valor*2);
//Ambas dan el mismo resultado.

//Con map() modificamos cada valor.
console.log(array2);

const valorDoble = valor => valor*2;

console.log(valorDoble(2))

// Una función que no tiene nombre es una función anónima:

console.log(array2 = array.map((valor) => valor*2));