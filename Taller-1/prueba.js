let listaRandom = Array(0)

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function PointUn(n) {

    listaRandom.push(RandomInt(0, 100))
    if(n==1){
        return console.log(listaRandom); 
    }
    else{
        return PointUn(n-1)
    }
}

console.time("PuntoUn");
console.log(PointUn(100));
console.timeEnd("PuntoUn");

//--------------------------------------------------------------------------

const { array } = require("yargs");
const yargs = require("yargs");
const argumentos = yargs.argv;

let arregloAleatorio = Array(0);
let arreglo=[];

function RandomInt() {
    return Math.floor(Math.random() * 100);
}

const numeroAleatorio = () =>{
    var x = Math.floor(Math.random()*tamano);
    return x;
}
let tamano = 10;
arregloAleatorio.push(1);
arregloAleatorio.push(numeroAleatorio);
console.log(arregloAleatorio);
/*
const arregloAleatorios = () => {
    let tamano = argumentos.tamArray;
    arregloAleatorio.push(numeroAleatorio);
    if(tamano==1){
        console.log(aleatorios); 
    }
    else{
        arregloAleatorios(tamano-1);
    }
}

*/
//console.time("arregloAleatorios");
//arregloAleatorios();
//console.timeEnd("arregloAleatorios");
//numeroAleatorio();