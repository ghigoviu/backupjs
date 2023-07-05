// Ámbito o alcance de métodos y atributos

class Persona{
    // Atributos privados
    #nombre;
    #edad;
    // Atributos protegidos
    _isDev;
    // También se pueden proteger funciones

    constructor(nombre, edad, isDev){
        this.#nombre = nombre;
        this.#edad = edad;
        this.isDev = isDev;
    }

    saludo(){
        console.log("Saludo predeterminado");
        console.log(this.#nombre, "tengo ", this.#edad);
    }

    getNombre(){
        console.log(this.#nombre);
    }
}

const persona1 = new Persona("Roy", 24, true);
console.log(persona1);
persona1.getNombre();