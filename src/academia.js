const calcular_promedio = () =>{
    let nombre = prompt("Nombre: ");
    let taller = parseFloat(prompt("Taller: "));
    let examen = parseFloat(prompt("Examen: "));
    let proyecto = parseFloat(prompt("Proyecto: "));
    let promedio= (taller+examen+proyecto)/3;

    if (promedio >=7) {
        console.log(`El alumno ${nombre} tiene un promedio de ${promedio} por lo que aprueba la asignatura`);
    
    } else{
        console.log(`El alumno ${nombre} tiene un promedio de ${promedio} por lo que reprueba la asignatura`);
    }
}

calcular_promedio();