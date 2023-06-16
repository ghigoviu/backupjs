// Gestión de errores en proyectos de JS

const miFuncion = val => {
    if (typeof val === "number") //typeof devuelve un string
        return 2 * val
    // else return "No es numero";
    throw new Error("Error en la función: No es un número");
}

console.log(miFuncion(1)); 

try{
    //Código que puede fallar
    const numero = "ocho"; // Incita a que se ejecte el error
    console.log("Se ejecuta de manera correcta");
    console.log(miFuncion(numero));
}catch(e){
    //Ejecutar esto dentro de las llaves
    console.log("Error en catch: " + e.message);
}finally{
    //Se ejectua haya o no haya error
    console.log("Finalizar");
}

// InternalError, cuando se crea un overflow
// SyntaxError, cuando no se escribe bien una expresión 
// TypeError, cuando se trata de convertir un tipo de dato en otro
// RangeError, cuando se intenta acceder a un elemento de una lista que no existe
// ReferenceError, cuando no existe la referencia de una variable o expresión