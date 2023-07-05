// Sesión de programación orientada a Objetos
// Forma sin POO
const persona = {
    nombre: 'Rodrigo',
    edad: 25,
    isDev: true,
    saludo: function (){
        console.log('Wenas');
    }
}

console.log(persona);
persona.saludo();

const persona2 = {
    nombre: 'Ronaldo',
    edad: 24,
    isDev: false,
    saludo: function (){
        console.log('Queonda');
    }
}

persona2.saludo();

// Utilizando función Factory
const crearPersona =  (nombre, edad, isDev) => {
    return {
        nombre,
        edad,
        isDev,
        saludo: function (){
            console.log("Saludo predeterminado");
        }
    }
}

// Ahora creas una persona de forma mas sencilla
const nueva_persona = crearPersona("Juan", 23, true);
console.log(nueva_persona);