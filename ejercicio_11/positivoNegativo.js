function positivoONegativo(numero) {
    if (numero > 0) {
        return ("positivo");
    }
    else if (numero < 0) {
        return ("negativo");
    }
    else {
        return "cero";
    }
}

let numero = parseInt(prompt("Dame un numero: "));
const resultado = positivoONegativo(numero);
alert("El numero es " + resultado);