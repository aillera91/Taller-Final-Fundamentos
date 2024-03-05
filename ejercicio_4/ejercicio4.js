function numParOImpar (numero) {
    if (numero % 2 === 0){
        return "El numero es par";
    }
    else {
        return "El numero no es par";
    }
}

let numero = 3;
console.log (numParOImpar(numero));