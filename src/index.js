const divDatos = document.getElementById("imprimir_datos");
/*FUNCION MOSTRAR DATOS  */
const mostrar_datos =()=>{
    /*Juan */
    const inputNombre = document.getElementById("email-alternative").value;
    const inputDireccion = document.querySelector("#password-alternative").value;

    divDatos.innerHTML= `
        <h2>Datos del cliente</h2>
        <p>Nombre: ${inputNombre}</p>
        <p>Direccion: ${inputDireccion}</p>`;

};

window.mostrar_datos=mostrar_datos;