console.log("Bienvenido a Gloss Accesorio");

const boton = document.querySelector("button");

if (boton) {
    boton.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Gracias por contactarnos. Pronto responderemos tu mensaje.");
    });
}