// ===============================================
// SESIÓN 02 - Tipos de Datos y Coerción
// Duración: 40 minutos
// Objetivos de hoy:
// • Conocer los tipos de datos básicos en JavaScript
// • Entender qué es la coerción de tipos
// • Dominar las diferencias entre == y ===
// • Aprender sobre valores truthy y falsy
// ===============================================

// ===============================================
// TIPOS DE DATOS BÁSICOS EN JAVASCRIPT
// ===============================================
// JavaScript tiene varios tipos de datos fundamentales
// Aquí explicaremos cada uno con ejemplos claros

// 1. STRING - Texto entre comillas
let texto = "Hola mundo";
let textoConComillasSimples = 'JavaScript es genial';
let textoConBackticks = `Podemos usar ${texto} con template literals`;

console.log("Ejemplos de strings:");
console.log(texto);
console.log(textoConComillasSimples);
console.log(textoConBackticks);

// 2. NUMBER - Números (enteros y decimales)
let numeroEntero = 42;
let numeroDecimal = 3.1416;
let numeroNegativo = -10;

console.log("\nEjemplos de numbers:");
console.log("Entero:", numeroEntero);
console.log("Decimal:", numeroDecimal);
console.log("Negativo:", numeroNegativo);

// 3. BOOLEAN - Solo dos valores: true o false
let esVerdadero = true;
let esFalso = false;

console.log("\nEjemplos de booleans:");
console.log("Verdadero:", esVerdadero);
console.log("Falso:", esFalso);

// 4. UNDEFINED - Variable declarada pero sin valor
let variableSinValor;
console.log("\nEjemplo de undefined:");
console.log("Variable sin valor:", variableSinValor);

// 5. NULL - Ausencia intencional de valor
let variableNula = null;
console.log("\nEjemplo de null:");
console.log("Variable nula:", variableNula);

// Pregunta para la clase: ¿cuál es la diferencia entre undefined y null?

// ===============================================
// CÓMO SABER EL TIPO DE DATO
// ===============================================
// Usamos el operador typeof para saber qué tipo de dato tenemos

console.log("\n=== USANDO TYPEOF ===");
console.log("typeof 'Hola':", typeof 'Hola');
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);  // ¡Cuidado! Esto dice "object"

// Aquí explicaremos por qué typeof null es "object"
// Es un error histórico de JavaScript que nunca se corrigió

// ===============================================
// COERCIÓN DE TIPOS
// ===============================================
// La coerción es cuando JavaScript automáticamente convierte un tipo a otro
// En clase veremos el error típico de no entender la coerción

console.log("\n=== COERCIÓN DE TIPOS ===");

// Coerción implícita (automática)
console.log("5 + '5':", 5 + '5');        // "55" (convierte 5 a string)
console.log("5 * '5':", 5 * '5');        // 25 (convierte '5' a number)
console.log("5 - '3':", 5 - '3');        // 2 (convierte '3' a number)
console.log("true + 1:", true + 1);     // 2 (convierte true a 1)
console.log("false + 1:", false + 1);    // 1 (convierte false a 0)

// Cuidado con este error común: sumar un número y un string
let precio = 100;
let ivaTexto = "21";
let resultado = precio + ivaTexto;  // "10021" en lugar de 121
console.log("\nError común con coerción:");
console.log("precio + ivaTexto:", resultado);
console.log("typeof resultado:", typeof resultado);

// Solución: convertir explícitamente
let resultadoCorrecto = precio + Number(ivaTexto);
console.log("Solución correcta:", resultadoCorrecto);

// ===============================================
// DIFERENCIAS ENTRE == Y ===
// ===============================================
// == compara valores (con coerción)
// === compara valores y tipos (sin coerción)

console.log("\n=== DIFERENCIAS ENTRE == Y === ===");

// Comparaciones con ==
console.log("5 == '5':", 5 == '5');        // true (coerce string a number)
console.log("0 == false:", 0 == false);    // true (coerce false a 0)
console.log("1 == true:", 1 == true);      // true (coerce true a 1)
console.log("null == undefined:", null == undefined); // true

// Comparaciones con ===
console.log("\nCon ===:");
console.log("5 === '5':", 5 === '5');      // false (tipos diferentes)
console.log("0 === false:", 0 === false);  // false (tipos diferentes)
console.log("1 === true:", 1 === true);    // false (tipos diferentes)
console.log("null === undefined:", null === undefined); // false

// En clase veremos por qué siempre debemos usar ===
// Es más seguro y predecible

// ===============================================
// VALORES TRUTHY Y FALSY
// ===============================================
// En JavaScript, algunos valores se comportan como true o false en contextos booleanos

console.log("\n=== VALORES TRUTHY Y FALSY ===");

// Valores FALSY (se comportan como false)
console.log("Falsy values:");
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));

// Valores TRUTHY (se comportan como true)
console.log("\nTruthy values:");
console.log("Boolean(true):", Boolean(true));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean('hola'):", Boolean('hola'));
console.log("Boolean('0'):", Boolean('0'));  // ¡Cuidado! '0' es truthy
console.log("Boolean('false'):", Boolean('false'));  // ¡Cuidado! 'false' es truthy
console.log("Boolean([]):", Boolean([]));    // Los arrays vacíos son truthy
console.log("Boolean({}):", Boolean({}));    // Los objetos vacíos son truthy

// ===============================================
// EJEMPLOS PRÁCTICOS CON TRUTHY/FALSY
// ===============================================

// Ejemplo 1: Validar si un usuario tiene nombre
let nombreUsuario = "";
if (nombreUsuario) {
  console.log("Bienvenido,", nombreUsuario);
} else {
  console.log("Por favor, introduce tu nombre");
}

// Ejemplo 2: Validar si hay productos en stock
let productosEnStock = 0;
if (productosEnStock) {
  console.log("Tenemos productos disponibles");
} else {
  console.log("No hay stock disponible");
}

// Ejemplo 3: Validar si un array tiene elementos
let listaCompras = [];
if (listaCompras.length) {
  console.log("Tu lista de compras tiene:", listaCompras.length, "elementos");
} else {
  console.log("Tu lista de compras está vacía");
}

// ===============================================
// CONVERSIÓN EXPLÍCITA DE TIPOS
// ===============================================
// A veces necesitamos convertir tipos manualmente

console.log("\n=== CONVERSIÓN EXPLÍCITA ===");

// Convertir a número
let textoNumero = "123";
let numeroConvertido = Number(textoNumero);
console.log("Number('123'):", numeroConvertido);
console.log("typeof numeroConvertido:", typeof numeroConvertido);

// Convertir a string
let numeroAString = 456;
let stringConvertido = String(numeroAString);
console.log("String(456):", stringConvertido);
console.log("typeof stringConvertido:", typeof stringConvertido);

// Convertir a booleano
let valorABooleano = "hola";
let booleanConvertido = Boolean(valorABooleano);
console.log("Boolean('hola'):", booleanConvertido);
console.log("typeof booleanConvertido:", typeof booleanConvertido);

// ===============================================
// ERRORES COMUNES Y SOLUCIONES
// ===============================================

// Error 1: Sumar números que vienen como strings
let num1 = "10";
let num2 = "20";
let sumaIncorrecta = num1 + num2;  // "1020"
let sumaCorrecta = Number(num1) + Number(num2);  // 30

console.log("\nErrores comunes:");
console.log("Suma incorrecta:", sumaIncorrecta);
console.log("Suma correcta:", sumaCorrecta);

// Error 2: Usar == en lugar de ===
let resultadoComparacion = ("0" == false);  // true (con coerción)
let resultadoComparacionEstricta = ("0" === false);  // false (sin coerción)

console.log("Comparación con ==:", resultadoComparacion);
console.log("Comparación con ===:", resultadoComparacionEstricta);

// Error 3: No validar undefined
let variableOpcional;
if (variableOpcional) {
  console.log("La variable tiene valor");
} else {
  console.log("La variable es undefined, null, 0, '' o false");
}

// ===============================================
// EJERCICIOS PARA HACER EN CLASE
// ===============================================

// Ejercicio 1 → Declara variables de cada tipo de dato básico y muestra su tipo con typeof
// TODO: Crea variables para string, number, boolean, undefined, null
// TODO: Usa console.log(typeof variable) para cada una

// Ejercicio 2 → Prueba la coerción sumando un número y un string
// TODO: let num = 10; let txt = "5"; console.log(num + txt);
// TODO: ¿Qué tipo de dato resulta? Usa typeof para verificar

// Ejercicio 3 → Compara valores usando == y ===
// TODO: Compara 10 con "10" usando ambos operadores
// TODO: Compara true con 1 usando ambos operadores
// TODO: Explica las diferencias

// Ejercicio 4 → Identifica qué valores son truthy y falsy
// TODO: Usa Boolean() para verificar: "", "0", [], {}, 0, -1, null, undefined
// TODO: Anota cuáles son truthy y cuáles falsy

// Ejercicio 5 → Convierte tipos explícitamente
// TODO: Convierte "123.45" a número
// TODO: Convierte 0 a string
// TODO: Convierte "false" a booleano (¡cuidado con este!)

// Ejercicio 6 → Crea una función que sume dos números que vengan como strings
// TODO: function sumarStrings(num1, num2) { return Number(num1) + Number(num2); }
// TODO: Prueba con "100" y "200"

// Ejercicio 7 → Valida si una variable tiene un valor útil
// TODO: Crea una variable que pueda ser undefined, null, "", 0, o un valor válido
// TODO: Usa if para verificar si tiene un valor útil (no falsy)

// Ejercicio 8 → Resuelve este problema práctico
// TODO: Un formulario envía la edad como string ("25") y el precio como string ("100")
// TODO: Calcula el precio con descuento del 10% si es mayor de 18 años
// TODO: Muestra el resultado usando template literals

console.log("\n¡Fin de la sesión 02! ¡Practiquen la coerción y los tipos de datos!");