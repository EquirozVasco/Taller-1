const yargs = require("yargs");
const argumentos = yargs.argv;
/**
 * Veinte países mantienen relaciones diplomáticas, cada país tiene un embajador en los otros países. Indique la cantidad de embajadores que hay en total.
 */

const Embajadores = () => {
  let Paises = argumentos.paises;
  let Embajadores = argumentos.embajadores;
  let contador = 1;
  console.log("Numero de paises:", Paises);
  console.log("Numero de Embajadores:", Embajadores);

  for (let i = 1; i <= Paises; i++) {
      for (let j = 1; j <= Embajadores; j++) {
          if(i != j){
              console.log(contador, "Embajador", i, "del pais:", j)
              contador++;
          }
      }      
  }
  contador=contador-1;
  console.log("Cantidad de embajadores: "+ contador);
}

console.time("tiempo");
Embajadores();
console.timeEnd("tiempo");