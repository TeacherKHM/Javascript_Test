// ===============================================
// SCRIPT DE AUTO-EVALUACIÓN
// ===============================================
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m"
};

console.log(`${colors.blue}=== INICIANDO AUTO-EVALUACIÓN ===${colors.reset}\n`);

let ejerciciosCorrectos = 0;
let totalEjercicios = 4;

try {
    // Importar el código del estudiante
    // Usamos una ruta relativa para encontrar el archivo retos.js
    const retos = require('./retos.js');

    // -------------------------------------------------
    // TEST 1: Variables
    // -------------------------------------------------
    console.log(`${colors.yellow}1. Verificando Variables...${colors.reset}`);
    try {
        if (retos.nombre === "" || typeof retos.nombre !== 'string') throw new Error("La variable 'nombre' está vacía o no es un texto.");
        if (retos.edad <= 0 || typeof retos.edad !== 'number') throw new Error("La variable 'edad' no es un número válido.");
        if (typeof retos.esEstudiante !== 'boolean') throw new Error("La variable 'esEstudiante' no es un booleano.");
        
        console.log(`  ${colors.green}✓ Pasado${colors.reset}`);
        ejerciciosCorrectos++;
    } catch (e) {
        console.log(`  ${colors.red}✗ Fallo: ${e.message}${colors.reset}`);
    }

    // -------------------------------------------------
    // TEST 2: Funciones
    // -------------------------------------------------
    console.log(`\n${colors.yellow}2. Verificando Funciones...${colors.reset}`);
    try {
        if (retos.calcularAreaRectangulo(5, 4) !== 20) throw new Error("calcularAreaRectangulo(5, 4) debería resultar 20.");
        if (retos.calcularAreaRectangulo(10, 10) !== 100) throw new Error("calcularAreaRectangulo(10, 10) debería resultar 100.");
        
        if (retos.esMayorDeEdad(18) !== true) throw new Error("esMayorDeEdad(18) debería ser true.");
        if (retos.esMayorDeEdad(17) !== false) throw new Error("esMayorDeEdad(17) debería ser false.");
        
        console.log(`  ${colors.green}✓ Pasado${colors.reset}`);
        ejerciciosCorrectos++;
    } catch (e) {
        console.log(`  ${colors.red}✗ Fallo: ${e.message}${colors.reset}`);
    }

    // -------------------------------------------------
    // TEST 3: Arrays
    // -------------------------------------------------
    console.log(`\n${colors.yellow}3. Verificando Arrays...${colors.reset}`);
    try {
        const input = [-2, 5, 0, 10, -5];
        const output = retos.filtrarPositivos(input);
        
        if (!Array.isArray(output)) throw new Error("filtrarPositivos debe retornar un array.");
        if (output.length !== 2) throw new Error(`El array retornado tiene ${output.length} elementos, se esperaban 2 (5 y 10).`);
        if (!output.includes(5) || !output.includes(10)) throw new Error("El array no contiene los números positivos correctos.");
        if (output.includes(0)) throw new Error("El array no debería incluir el 0 (no es mayor que 0).");
        
        console.log(`  ${colors.green}✓ Pasado${colors.reset}`);
        ejerciciosCorrectos++;
    } catch (e) {
        console.log(`  ${colors.red}✗ Fallo: ${e.message}${colors.reset}`);
    }

    // -------------------------------------------------
    // TEST 4: Objetos
    // -------------------------------------------------
    console.log(`\n${colors.yellow}4. Verificando Objetos...${colors.reset}`);
    try {
        const persona = retos.crearPersona("Ana", 30, "Madrid");
        
        if (typeof persona !== 'object' || persona === null) throw new Error("crearPersona debe retornar un objeto.");
        if (persona.nombre !== "Ana") throw new Error("La propiedad 'nombre' no es correcta.");
        if (persona.edad !== 30) throw new Error("La propiedad 'edad' no es correcta.");
        if (persona.ciudad !== "Madrid") throw new Error("La propiedad 'ciudad' no es correcta.");
        
        console.log(`  ${colors.green}✓ Pasado${colors.reset}`);
        ejerciciosCorrectos++;
    } catch (e) {
        console.log(`  ${colors.red}✗ Fallo: ${e.message}${colors.reset}`);
    }

    // -------------------------------------------------
    // RESULTADOS
    // -------------------------------------------------
    console.log("\n-------------------------------------------------");
    if (ejerciciosCorrectos === totalEjercicios) {
        console.log(`${colors.green}¡FELICIDADES! HAS COMPLETADO TODOS LOS RETOS CORRECTAMENTE (4/4) 🎉${colors.reset}`);
    } else {
        console.log(`${colors.yellow}Has completado ${ejerciciosCorrectos} de ${totalEjercicios} retos.${colors.reset}`);
        console.log("Revisa los errores y vuelve a intentarlo.");
    }

} catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
        console.log(`${colors.red}ERROR CRÍTICO: No se encuentra el archivo 'retos.js'. Verifica que esté en la misma carpeta.${colors.reset}`);
    } else {
        console.log(`${colors.red}ERROR DE SINTAXIS EN TU CÓDIGO:${colors.reset}`);
        console.error(error);
    }
}
