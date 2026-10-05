console.log("Conexión exitosa...");

function iniciar() {
    let correo = document.getElementById("email").textContent;
    if (correo === ""){
        alert(`Porfavor ingresa un correo`);
    } else {
        alert(`Bienvenido/a ${correo}`);
    }
};