// Listas 4: Obtención de listas a partir de listas
// .map() .filter() .reduce() 

const ciudades = ["Cuernavaca", "Jiutepec", "Zacatepec", "Yautepec"]

const valor = ciudades.forEach( v => {
    console.log(v)
    return 4
});

console.log(valor)

const newCiudades = ciudades.map((valor, indice) => `${indice + 1}- ${valor}` );
console.log(newCiudades)

let listaObjetos = [
    {nombre : "Leire", edad: 35},
    {nombre : "Gorka", edad: 40},
    {nombre : "Leslie", edad: 45},
    {nombre : "Arnold", edad: 45},
    {nombre : "Jesse", edad: 50}
]

let listaFiltrada = listaObjetos.filter(obj => {
    if (obj.edad >  40){
        return true  
        //Devolvemos true en caso de haber encontrado el objeto, 
        //pero la función no devuelve true, si no que true sirve para 
        //decidir si retornar o no el objeto.
    } else {
        return false
    }
});

//Obejtos retornados
console.log(listaFiltrada)

//Otra forma de escribir lo mismo es
let listaFiltrada2 = listaObjetos.filter(obj => obj.edad > 30)
console.log(listaFiltrada)

const nuevaLista = listaObjetos.filter(obj => obj.nombre != "Jesse")
console.log(nuevaLista)

//Obtener un objeto a partir de una lista con 
//.reduce(anterior o acumulado, current, i, original)
const valores = [3, 56, 23, 100]

const suma = valores.reduce((acumulado, cur, i, original) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(original)
    return acumulado + cur
});

console.log(suma)