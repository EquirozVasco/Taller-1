const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * Lucia tiene en su ropero cuatro vestidos y cinco conjuntos deportivos. 
 * Sofia trabaja en una tienda de ropa. Se le ha asignado la tarea de vestir a un maniquí con una falda, una blusa y un par de zapatos de una exposición de faldas, blusas y zapatos 
 * que hacen juego. Ya que todas las prendas combinan, ella puede elegir cualquier blusa, cualquier falda y cualquier par de zapatos y el atuendo se verá bien. 
 * Si hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir al maniquí?\
 */

const tienda_ropa = () => {
    let faldas = argumentos.nrofaldas;
    let blusas = argumentos.nroblusas;
    let zapatos = argumentos.nrozapatos;
    let contador = 1;
 
    for (let i = 1; i <= faldas; i++) {
        for (let j = 1; j <= blusas; j++) {
            for (let k = 1; k <= zapatos; k++) {
                console.log(contador, "falda", i, "blusa", j,"zapatos",k)
                contador++;            
            }
        }      
    }
    contador=contador-1;
    console.log("Cantidad de formas distintas de vestir al maniquí es: "+ contador);
  }

console.time("tiempo");
tienda_ropa();
console.timeEnd("tiempo");