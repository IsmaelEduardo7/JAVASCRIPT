const nombre = prompt("Cual es tu name? ");
console.log(`Hola ${nombre}`)

const edad = parseInt(prompt("¿Cúal es tu edad? "));

if(edad >= 18){
    console.log(`${nombre} es mayor de edad`);
} else{
    console.log(`${nombre} es menor de edad`)
}

//pedir nombres, carrera,calificaciones,  tres calificaciones,calcular promedio, salga nombre del alumno, la carrera, el promedio y si aprueba, promedio 35<= reprobado 