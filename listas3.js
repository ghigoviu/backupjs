//Iterar los valores de una lista

const array = ["a", "b", "c", 1, 2, undefined, "d", "e", false]

 //Forma tradicional
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

//Forma moderna (ES6)
array.forEach(valor =>{
    console.log(valor)
});

let suma = 0
const arrayNums = [3, 6, 2, 77, 93, 19]
arrayNums.forEach(valor =>{
    suma += valor
    console.log(suma)
});

console.log(suma)

//Encontrar un valor
const variable = array.find(valor => {
    if(valor === 90){
        return true
    }
});

console.log(variable)

let listaObjetos = [
    {nombre : "Leire", edad: 35},
    {nombre : "Gorka", edad: 40},
    {nombre : "Leslie", edad: 45},
    {nombre : "Arnold", edad: 45},
    {nombre : "Jesse", edad: 50}
]

//Encontrar un objeto en una lista
const objeto = listaObjetos.find(o => {
    if(o.edad == 50)
        return true
});

console.log(objeto)

const objeto2 = listaObjetos.find(o => {
    return o.edad == 35
});

console.log(objeto2)

const { edad } = listaObjetos.find(o => o.nombre === "Leire")
console.log(edad)