// Declaración de la variable calificación 
let calificacion = 85; // Valor inicial de la calificación

// Opcional: Generar una nota aleatoria entre 0 y 100
// nota = Math.floor(Math.random() * 101);

// Verificar que la nota sea un valor válido (entre 0 y 100)
if (calificacion >= 0 && calificacion <= 100) {
    console.log(`El estudiante obtuvo una nota de: ${nota}`);
    
    // Evaluar la nota y mostrar el mensaje correspondiente
    if (calificacion >= 90) {
        console.log("Resultado: Excelente - ¡Aprobado!");
    } else if (calificacion >= 75 && calificacion <= 89) {
        console.log("Resultado: Bien - Aprobado");
    } else if (calificacion >= 60 && calificacion <= 74) {
        console.log("Resultado: Suficiente - Aprobado");
    } else {
        console.log("Resultado: No aprobado");
    }
} else {
    console.log("Error: La calificacion debe estar entre 0 y 100");
}
