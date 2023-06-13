// Sets (o conjuntos) 1

const numeros = [1, 2, 3, 6, 5, "cinco"]

let miSet = new Set(numeros)
console.log(numeros)
console.log(miSet)
//Sets: conjunto no ordenado de objetos únicos

// .add()
miSet.add(9)
console.log(miSet)

// .delete()
miSet.delete(3)
console.log(miSet)

// .clear() que elimina todos
miSet.clear()
console.log(miSet)

miSet = new Set(numeros)

// .has() para averiguar si el elemento existe
console.log(numeros.includes(2))
console.log(miSet.has(2))

console.log(miSet.size) //.size no es una función

const it_miset = miSet.values()
console.log(it_miset)

// Factor de propagación
const ar_miset = [...it_miset]
console.log(ar_miset)
