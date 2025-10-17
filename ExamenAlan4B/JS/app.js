const btnEnviar = document.querySelector(".enviar");
const nombre = document.querySelector(".nombre");
const correo = document.querySelector(".correo");
const pais = document.querySelector(".pais");
const edad = document.querySelector(".edad");
const mensaje = document.getElementById("mensaje");

btnEnviar.addEventListener("click", () => {
    const Nombre = nombre.value
    const Correo = correo.value
    const Pais = pais.value
    const Edad = edad.value

    if (Nombre && Correo && Pais && Edad) {
        mensaje.textContent = "Datos enviados correctamente";
        localStorage.setItem("nombre", Nombre);
    } else {
        mensaje.textContent = "Por favor llena todos los campos";
    }
});

const nombreGuardado = localStorage.getItem("nombre");
if (nombreGuardado) {
    mensaje.textContent = `Hola ${nombreGuardado} bienvenido nuevamente`;
}
