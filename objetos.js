//Trabajando con objetos

const obj = {
    id : 1,
    nombre : "Jhon",
    apellido : "Rodríguez",
    isDeveloper : false,
    libros_favoritos : ["El método", "El código de la manifestación"],
    "4-juegos" : [1, 2, 3, 4, 5, 6]
}

console.log(obj.libros_favoritos);
console.log(obj["4-juegos"]);

const prop = "isDeveloper"
console.log(obj[prop]); //Acceder a propiedades a través de variables

const obj2 = obj

console.log(obj2.nombre)

obj2.nombre = "Iñago"
console.log(obj2.nombre)
//Cuando se asigna un valor de un objeto a otro en realidad se hace una copia de la dirección de memoria.

//Para solamente duplicar, 
const obj3 = {...obj }
obj3.nombre = "Rodrigo"
console.log(obj3.nombre)
console.log(obj.nombre) 
//Ahora cambiar el valor en un lado no cambia el otro.


// Ordenar listas de objetos en función de una propiedad
let listaPelis = [
    {titulo: "Intensamente", director: "Pete Docter", fecha: 2015},
    {titulo: "Lego 2", director: "Mike Mitchell", fecha: 2019},
    {titulo: "Eterno resplandor de una mente sin recuerdos", director: "Michel Gondry", fecha: 2004},
    {titulo: "Shrek", director: "Vicky Jenson", fecha: 2001},
    {titulo: "Escritores de libertad", director: "Richard LaGravenese", fecha: 2007}
]

console.log(listaPelis)
listaPelis.sort((a, b) => a.fecha - b.fecha)
console.log(listaPelis)
