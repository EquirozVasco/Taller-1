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
    arregloAleatorios.push(tamanio);
    if(tamanio==1){
        return console.log(arregloAleatorios); 
    }
    else{
        return llenadoArreglo(tamanio-1)
    }
}