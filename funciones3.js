//Sobrecarga de funciones

function saludar() {
    hola();
}

function hola() {
    console.log("Hola...");
}

saludar();

/* 
    Cómo funciona la carga de funciones

    1.- global()
    2.- saludar() global()
    3.- hola() saludar() global()
    4.- saludar() global() 
    5.- global()
*/