//Listas 1
let arrayDeclare = new Array();

let arrayInit = [1, 2, "Hola", 'a', 'b', false, {id : 5}, null, undefined];

console.log(arrayDeclare);
console.log(arrayInit); 

console.log(arrayInit[0]);
console.log(arrayInit[1]);
console.log(arrayInit[2]);
console.log(arrayInit[3]);
console.log(arrayInit[4]);
console.log(arrayInit[5]);
console.log(arrayInit[6]);

//Métodos para introducir valores
//push(valor) y unshift(valor) para mutar el array.

arrayInit.push("final");
console.log(arrayInit);

arrayDeclare.unshift("inicio");
console.log(arrayDeclare);
arrayDeclare.unshift(arrayInit);
console.log(arrayDeclare);

//Métodos para introducir valores
//pop() y shift() para mutar el array.

arrayDeclare.shift(arrayInit);
console.log(arrayDeclare);

arrayInit.pop();
console.log(arrayInit);

//Método para eliminar, modificar o añadir valores con 
//splice(x, y, z)

//Eliminar valores con  splice(indice, numValoresAEliminar)

let array1 = [1, 2, 3, 4, 5];
console.log(array1);

array1.splice(2,3);
console.log(array1);

// Añadir valores con splice(indice, 0, [valores]...)

array1.splice(2, 0, "Hola", "Adios");
console.log(array1);

//Modificar valores con splice(indice, NumValoresAModificar, [valores]...)

array1.splice(2, 2, "Adios", "Hola");
console.log(array1);