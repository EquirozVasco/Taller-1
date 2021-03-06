const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * Entre Manizales y Armenia hay 3 carreteras ¿ De cuantos modos puede viajarse de Manizales a Armenia?
 */

const obtenerResultados = () => {
  let rutas = argumentos.ruta;

  for (let index = 0; index < rutas; index++) {
    console.log("Ruta Manizales-Armenia", index + 1);
  }
};

console.time("tiempo");
obtenerResultados();
console.timeEnd("tiempo");
