const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resultadoSuma=0;


rl.question("Por favor ingrese la dimensión del arreglo: ",function(answer){
    if(parseInt(answer)%2 != 0){
        console.log("El número ingresado no es es par");
    }else{
        console.time("tiempo");
        console.log(sumaPares(parseInt(answer)));
        console.timeEnd("tiempo");
    }
    rl.close();
});


function sumaPares(n) {
    if(n<2){
        return console.log("El resultado de la suma de los pares es: " + resultadoSuma); 
    }
    else{
        resultadoSuma+=n;
        return sumaPares(n-2);
    }
}