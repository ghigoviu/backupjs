// Instalar axios para hacer llamadas a servicios externos
// !npm i axios

// Axios permite hacer promesas de peticiones HTTP

import axios from 'axios';

// Hacer una petición desde PokeAPI
console.log(axios.isCancel('https://pokeapi.co/api/v2/pokemon/ditto'));

//Mostrar informacion de la petición con una promesa
axios.get('https://pokeapi.co/api/v2/pokemon/eevee')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

