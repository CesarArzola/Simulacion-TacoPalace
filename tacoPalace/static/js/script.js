console.log("Conexión exitosa...");

function iniciar() {
    let correo = document.getElementById("email").textContent;
    if (correo === ""){
        alert(`Porfavor ingresa un correo`);
    } else {
        alert(`Bienvenido/a ${correo}`);
    }
};

let cantidadCarrito = 0;
function agregarAlCarrito() {
    cantidadCarrito++
    document.getElementById(`contador`).textContent = cantidadCarrito;
}