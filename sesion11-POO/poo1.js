class Persona{
    nombre;
    edad;
    isDev;

    constructor(nombre, edad, isDev){
        this.nombre = nombre;
        this.edad = edad;
        this.isDev = isDev;
    }

    saludo(){
        console.log("Saludo predeterminado");
        console.log(this.nombre, "tengo ", this.edad);
    }
}

const persona1 = new Persona("Roy", 24, true);
console.log(persona1);
persona1.saludo();

let numero = 60
let persona2 = new Persona("Marias", 34, false);

//Instanceof -> similar a typeof pero con clases
console.log(persona1 instanceof Persona);    //true

