const yargs = require("yargs");
const argumentos = yargs.argv;

/**
 * En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado hay disponibles seis tiendas, en el segundo cuatro y en el tercer mercado cinco tiendas. 
 * ¿De cuántas maneras puede realizarse la compra de un bulto de arroz?
 */

const Mercados = () => {
  let mercado1 = argumentos.nroTiendas1;
  let mercado2 = argumentos.nroTiendas2;
  let mercado3 = argumentos.nroTiendas3;
  let contador = 1;
  for (let index = 0; index < mercado1; index++) {
    console.log(
        contador,
        `Mercado1-Tienda ${index+1}`
      );
      contador++;  
  }
  for (let index = 0; index < mercado2; index++) {
    console.log(
        contador,
        `Mercado2-Tienda ${index+1}`
      );
      contador++; 
  }
  for (let index = 0; index < mercado3; index++) {
    console.log(
        contador,
        `Mercado3-Tienda ${index+1}`
      );
      contador++; 
  }
  contador=contador-1;
  console.log("La compra se puede realizar de "+ contador +" formas");
};

console.time("tiempo");
Mercados();
console.timeEnd("tiempo");
