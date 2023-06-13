//Trabajando Fechas con JS

const fecha = new Date()
console.log(fecha)

// 0 = Enero
const fecha2 = new Date(1997, 0, 20, 12)

console.log(fecha2)
//Wed Jan 01 1997 00:00:00 GMT-0600 (GMT-06:00)

const fecha3 = new Date(1000000000000)
console.log(fecha3)
//Sat Sep 08 2001 19:46:40 GMT-0600 (GMT-06:00)

const fecha4 = new Date("October 13, 1997 12:15:15")
console.log(fecha4)
//Mon Oct 13 1997 12:15:15 GMT-0600 (GMT-06:00)

//Comparar fechas
console.log(fecha > fecha2) //true
console.log(fecha2.getDate())  //20 

console.log(fecha.getTime()) //Conversión a milisec
console.log(fecha.getTime() === fecha2.getTime())  //false

// Obtener el dia, mes, año y hora de una fecha
console.log(fecha2.getMonth() +1 ) //1, se suma 1 porque los meses empizan en 0
console.log(fecha2.toLocaleDateString()) //   20/01/1997