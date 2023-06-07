// Quokka = ctrl + k, j

//Unir dos cadenas

const lista1 = ["Hello", false, 2]
const lista2 = ["Bye", 8, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)
console.log([lista1, lista2])

//Unir los listas con el factor de propagación
//Esto va tratando cada valor por separado, no tanto como parte de una lista.
console.log(...lista3)
console.log(...lista1, ...lista1)
lista4 = [...lista1, ...lista2]
console.log(...lista4)

//Obtner una lista a partir de otra lista con .slide()
const array = ["a", "b", "c", 1, 2, 3, 4]

//El método slice no modifica el los array originales
console.log(lista4.slice(3))
console.log(lista4.slice(3, 5))

