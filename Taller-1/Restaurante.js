const yargs = require("yargs");
const argumentos = yargs.argv;

/**
*Un restaurante de fideos ofrece 5 tipos de fideos para elegir. Cada plato viene con una de 4 carnes y una de 6 salsas diferentes a elección. ¿Cuántas combinaciones se pueden hacer?
 */

const Restaurante = () => {
    let fideos = argumentos.nrofideos;
    let carnes = argumentos.nrocarnes;
    let salsas = argumentos.nrosalsas;
    let contador = 1;
 
    for (let i = 1; i <= fideos; i++) {
        for (let j = 1; j <= carnes; j++) {
            for (let k = 1; k <= salsas; k++) {
                console.log(contador, "Fideos", i, "Carnes", j,"Salsas",k)
                contador++;            
            }
        }      
    }
    contador=contador-1;
    console.log("Cantidad de combinaciones distintas es: "+ contador);
  }

console.time("tiempo");
Restaurante();
console.timeEnd("tiempo");