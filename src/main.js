/*VARIABLES  */
let nombre = 'Manuel';
let apellido = 'Toasa';
let edad = 15;

/* CONSTANRE */
const carrera = 'Manicure y Pedicure';

//CONCATENACIÓN DE CADENAS
console.log("Mi nombr es: ", nombre);
//TEMPLATE O INTERPOLACIÓN DE CADENAS
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
//alert(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

//declarar dos numero y dividir el numero uno y el dos en la consola

let n1 = 45;
let n2 = 5;
let resultado = n1/n2;

console.log(`El primer numero es ${n1} y El segundo numero es ${n2}`)
console.log("La división es: ", resultado);

//ARREGLOS - LISTAS
const alumnos =['Dennys','Addi', 'Missi', 'Calvin', 'Esteban'];

console.log(alumnos[1]);
console.log(alumnos)

for(const alumno of alumnos){
  console.log(alumno);
}

//OBJETOS
const persona ={
  nombre: 'Don Quito',
  edad: 177,
  ciudad: 'Quito'
}
console.log(persona);
console.log(persona.nombre);

const person ={
  nombre: 'Juanito',
  edad: 7,
  ciudad: 'LATACUNGA'
}
console.log(person);
console.log(person.nombre);