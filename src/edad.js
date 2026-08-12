let nombre = prompt("Cual es tu name? ");
console.log(`Hola ${nombre}`);
alert(`Hola ${nombre}`);
document.writeln(`Hola ${nombre}`)

const edad = parseInt(prompt("¿Cúal es tu edad? "));

#funciondeclarada - Hoisting

function calcular_edad (nombre, edad){
    

    if(edad >= 18){
    console.log(`${nombre} es mayor de edad`);
    } else{
    console.log(`${nombre} es menor de edad`)
    }
}


calcular_edad(nombre, edad)

