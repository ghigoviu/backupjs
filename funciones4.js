// Funciones asíncronas y promesas

function miAsync(){
    //Hace una llamada de datos externa
    //Puede darnos un error
}

const miPromise = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    if (i==1){
        resolve();
    }
    else {
        reject();
    }
});

miPromise
    .then(() => console.log("Se ha ejecutado de forma correctamente"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Yo me ejecuto siempre"));
