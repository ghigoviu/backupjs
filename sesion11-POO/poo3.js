// Utilizando getters y setters

class Persona{
    // Atributos privados
    #nombre;
    // Atributos públicos
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
    getEdad(){
        console.log(this.#edad);
    }
    getIsDev(){
        console.log(this._isDev);
    }

    setNombre(){
        console.log(this.#nombre);
    }
    setEdad(){
        console.log(this.#edad);
    }
    setIsDev(){
        console.log(this._isDev);
    }
}

const roy = new Persona("Roy", 23, false);

roy.getNombre();
roy.getEdad();
roy.getIsDev();