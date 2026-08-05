//pedir nombres, carrera,calificaciones,  tres calificaciones,calcular promedio, salga nombre del alumno, la carrera, el promedio y si aprueba, promedio 35<= reprobado 

const nombre = prompt("Ingrese el nombre del estudiante:");
const carrera = prompt("Ingrese la carrera:");

const nota1 = parseFloat(prompt("Ingrese la primera calificación:"));
const nota2 = parseFloat(prompt("Ingrese la segunda calificación:"));
const nota3 = parseFloat(prompt("Ingrese la tercera calificación:"));

const promedio = (nota1 + nota2 + nota3) / 3;

console.log(`Estudiante: ${nombre}`);
console.log(`Carrera: ${carrera}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);

// Verificar si aprueba o reprueba Reprobado si promedio es <= 35
if (promedio <= 35) {
    console.log("Estado: Reprobado");
} else {
    console.log("Estado: Aprobado");
}