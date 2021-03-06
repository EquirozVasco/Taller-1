const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arregloAleatorios=[];


rl.question("Por favor ingrese la dimensión del arreglo: ",function(answer){
    console.time("tiempo");
    console.log(llenadoArreglo(parseInt(answer)));
    console.timeEnd("tiempo");
    rl.close();
});


function llenadoArreglo(tamanio) {
    if (tamanio==arregloAleatorios.length) {
        console.log(arregloAleatorios);
    } else {
        if(arregloAleatorios.length == 0){
            arregloAleatorios.push(crearAleatorio());
            llenadoArreglo(tamanio);
            
        }else{
            nuevoNumero=crearAleatorio();
            tamArray=arregloAleatorios.length;
            verificarRepetidos(nuevoNumero,tamArray);
            llenadoArreglo(tamanio);
        }       
    }
}

function crearAleatorio (){
    x = Math.floor(Math.random()*100);
    return x;
}

function verificarRepetidos(numero,tamArray){
    if(tamArray<0){
        arregloAleatorios.push(numero);
    }else if(numero == arregloAleatorios[tamArray]){

    }else{
        verificarRepetidos(numero,tamArray-1);
    }

}
