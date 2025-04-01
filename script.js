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

console.log("\nPruebas con diferentes notas:");
testCalificacion(95);   // Excelente
testCalificacion(85);   // Bien
testCalificacion(65);   // Suficiente
testCalificacion(45);   // No aprobado
testCalificacion(0);    // No aprobado
testCalificacion(100);  // Excelente
testCalificacion(-5);   // Error
testCalificacion(110);  // Error


// Función auxiliar para pruebas (opcional)
function testCalificacion(calificacionTest) {
    console.log(`\nProbando con calificacion: ${calificacionTest}`);
    if (notaTest >= 0 && notaTest <= 100) {
        if (notaTest >= 90) {
            console.log("Resultado: Excelente - ¡Aprobado!");
        } else if (notaTest >= 75) {
            console.log("Resultado: Bien - Aprobado");
        } else if (notaTest >= 60) {
            console.log("Resultado: Suficiente - Aprobado");
        } else {
            console.log("Resultado: No aprobado");
        }
    } else {
        console.log("Error: La nota debe estar entre 0 y 100");
    }
}