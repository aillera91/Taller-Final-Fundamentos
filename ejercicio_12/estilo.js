function colorAleatorio() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const botonCambiarColor = document.getElementById("cambiarColor");

botonCambiarColor.addEventListener("click", function () {

    const aleatorio = colorAleatorio();

    document.body.style.backgroundColor = aleatorio;

})