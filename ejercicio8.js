// Ejercicio 8

/*
    Crea un archivo JS que contenga las siguientes líneas:

    - Una función sin parámetros que devuelva siempre "true"
    - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
    - Una función generadora de índices pares automáticos
*/

function sinParametros(){
    return true;
}

setTimeout(function asíncrona() {
    console.log("Hola, soy una promesa");
}, 5000);

function* generatePairsId(id=0) {
    id=2;
    while(true) {
        id++;
        id++;
        yield id;
        // Se queda esperando hasta que se vuelva a llamar.
        if(id > 6 ){
            return;
        }
    }
}

const gen = generatePairsId()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
