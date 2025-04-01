// Declaración de la variable nota (puedes cambiar este valor para probar diferentes casos)
let calificación = 85; // Valor inicial, puedes cambiarlo o hacerlo aleatorio

// Opcional: Generar una nota aleatoria entre 0 y 100
// nota = Math.floor(Math.random() * 101);

// Verificar que la nota sea un valor válido (entre 0 y 100)
if (calificación >= 0 && calificación <= 100) {
    console.log(`El estudiante obtuvo una nota de: ${nota}`);
    
    // Evaluar la nota y mostrar el mensaje correspondiente
    if (calificación >= 90) {
        console.log("Resultado: Excelente - ¡Aprobado!");
    } else if (calificación >= 75 && calificación <= 89) {
        console.log("Resultado: Bien - Aprobado");
    } else if (calificación >= 60 && calificación <= 74) {
        console.log("Resultado: Suficiente - Aprobado");
    } else {
        console.log("Resultado: No aprobado");
    }
} else {
    console.log("Error: La nota debe estar entre 0 y 100");
}

// Pruebas con diferentes valores (descomenta para probar)
/*
console.log("\nPruebas con diferentes notas:");
testNota(95);   // Excelente
testNota(85);   // Bien
testNota(65);   // Suficiente
testNota(45);   // No aprobado
testNota(0);    // No aprobado
testNota(100);  // Excelente
testNota(-5);   // Error
testNota(110);  // Error
*/

// Función auxiliar para pruebas (opcional)
function testNota(notaTest) {
    console.log(`\nProbando con nota: ${notaTest}`);
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