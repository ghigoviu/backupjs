// Funciones 1
//Qué son funciones, cómo se declaran y cómo se usan?

function nombreFuncion(parámetro1, parámetro2){
    console.log("Esa es una función " + parámetro1 + parámetro2);
}
nombreFuncion("Hola ", "Adiós");

const nombrePersona = "Diana";

function saludo(persona){
    console.log("Hola " + persona);
}
saludo(nombrePersona);

function despedir(persona){
    console.log(`Adiós  ${persona}`);
}

despedir(nombrePersona);

let persona = {
    nombre : "Diana",
    apellido : "Rodríguez",
}
function saludarPersona(objeto){
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
saludarPersona(persona);

//Se pueden inicializar los parámetros.
function imprimirNumero(numero = 7){
    console.log(numero);
}
imprimirNumero();


// Factor de porpagación en los parámetros
function print1(...parametros){
    console.log(parametros);
}
print1(1, "Hola", persona, persona.apellido);

function suma(...numeros){
    console.log(
        numeros.reduce((a, b) => a + b)     //-> 80
    );
}
suma(1, 4, 7, 2, 12, 45, 9);

//Retorno de una función.
function producto(a=1, b=2){
    return a*b;
}
console.log(producto());