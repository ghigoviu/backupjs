//Ejercicio tema 6

//Una variable con la lista de compras
const listaCompras = [
    "Papel higiénico",
    "Tomates",
    "Videos de Michael Jackson",
    "Palomitas",
    "Calzones"
];

//Añadir
listaCompras.push("Aceite de girasol");
console.log(listaCompras);

//Quitar
listaCompras.pop();
console.log(listaCompras);

//Lista de 3 pelis favoritas

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

console.log(listaFiltrada)

//Lista de 3 pelis favoritas
let listaPelis = [
    {titulo: "Intensamente", director: "Pete Docter", fecha: 2015},
    {titulo: "Lego 2", director: "Mike Mitchell", fecha: 2019},
    {titulo: "Eterno resplandor de una mente sin recuerdos", director: "Michel Gondry", fecha: 2004},
    {titulo: "Shrek", director: "Vicky Jenson", fecha: 2001},
    {titulo: "Escritores de libertad", director: "Richard LaGravenese", fecha: 2007}
]

//Lista de películas de antes del 2010
let pelisAntes2010 = listaPelis.filter(obj => obj.fecha > 2010)
console.log(pelisAntes2010);

const directores = listaPelis.map((objeto, indice) => `${indice + 1}- ${objeto.director}` );
console.log(directores);

const titulos = listaPelis.map((objeto, indice) => `${indice + 1}- ${objeto.titulo}` );
console.log(titulos);

//Me ha faltado hacer los ejercicios de:
/*
    - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
    - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

const res = (array_1, array_2) => {
    let indice = 0;
    array_1.forEach(element => {
        element.concat(array_2[indice++]);
    });
};
console.log(res(titulos, directores));

let resultado = titulos.every(valor => {
    return valor.concat(directores.filter(obj => obj.index === valor.index));
});

console.log(resultado)

