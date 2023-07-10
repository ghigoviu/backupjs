// Inheritance
class Persona {

    constructor (nombre, edad, isDev){
        this.nombre = nombre;
        this.edad = edad;
        this.isDev = isDev;
    }

    saludo(){
        console.log("Saludo predeterminado");
        console.log(this.#nombre, "tengo ", this.#edad);
    }

    
}

class Developer extends Persona {

    constructor (nombre, edad, puesto){
        super(nombre, edad, true);
       this.puesto = puesto;
    }

    saludo(){
        console.log("Saludo de developer");
        console.log(this.nombre, "tengo ", this.puesto);
    }
}

const Rodrigo = new Developer("Rodrigo", 25, "inge");
Rodrigo.saludo();

// Polimorfismo
