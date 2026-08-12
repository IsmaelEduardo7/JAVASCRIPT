let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let descuento = parseFloat(prompt("Ingrese el descuento: "));

/*Funcion flecha - arrow function */
const calcular_total = (precio, descuento)=>{
    /*variable local */
    let precio_final;
    precio_final= precio - ((precio * descuento) / 100);
    console.log(`El precio final es ${precio_final}`);
    alert(`Usted debe cancelar ${precio_final}`);
}
calcular_total(precio, descuento);

