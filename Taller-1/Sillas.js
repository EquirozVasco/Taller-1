const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * ¿De cuentos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 */

const obtenerUbicaciones = () => {
    let nrosillas = argumentos.sillas;
    let nropersonas = argumentos.personas;
    console.log("Nro de sillas:", nrosillas);
    console.log("Nro de personas:", nropersonas);
    let contador = 0;
    for (let iSillas = 0; iSillas < nrosillas; iSillas++) {
      for (let iPersonas = 0; iPersonas < nropersonas; iPersonas++) {
        console.log(
          contador,
          `Combinación: Silla ${iSillas} - Persona ${iPersonas}`
        );
        contador++;
      }
    }
  };
  console.time("tiempo");
  obtenerUbicaciones();
  console.timeEnd("tiempo");