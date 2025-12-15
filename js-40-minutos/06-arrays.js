// ===============================================
// SESIÓN 06 - Arrays y Métodos Fundamentales
// Duración: 40 minutos
// Objetivos de hoy:
// • Dominar la creación y manipulación de arrays
// • Aprender los métodos más importantes: push, pop, map, filter, find
// • Entender la diferencia entre métodos que modifican y los que no
// • Usar arrays para resolver problemas prácticos
// ===============================================

// ===============================================
// 1. ¿QUÉ ES UN ARRAY?
// ===============================================
// Un array es como una lista ordenada de elementos
// Puede contener diferentes tipos de datos y se accede a ellos por índice (posición)

// Creación de arrays
let frutas = ["manzana", "banana", "naranja"];
let numeros = [1, 2, 3, 4, 5];
let mezclado = ["texto", 42, true, null];
let vacio = [];

console.log("Array de frutas:", frutas);
console.log("Array de números:", numeros);
console.log("Array mezclado:", mezclado);
console.log("Array vacío:", vacio);

// ===============================================
// 2. ACCEDER A ELEMENTOS
// ===============================================
// Los arrays usan índices que empiezan en 0

console.log("=== Accediendo a elementos ===");
console.log("Primera fruta:", frutas[0]); // "manzana"
console.log("Segunda fruta:", frutas[1]); // "banana"
console.log("Última fruta:", frutas[frutas.length - 1]); // "naranja"

// Modificar elementos
frutas[1] = "pera";
console.log("Array modificado:", frutas);

// Agregar elemento en una posición específica
frutas[3] = "uva";
console.log("Con elemento agregado:", frutas);

// ===============================================
// 3. PROPIEDADES BÁSICAS
// ===============================================

// length - número de elementos
console.log("=== Propiedades básicas ===");
console.log("Cantidad de frutas:", frutas.length);
console.log("Cantidad de números:", numeros.length);

// Verificar si es un array
console.log("¿frutas es array?", Array.isArray(frutas));
console.log("¿texto es array?", Array.isArray("hola"));

// ===============================================
// 4. MÉTODOS QUE MODIFICAN EL ARRAY ORIGINAL
// ===============================================

// push() - agregar al final
console.log("\n=== Métodos que modifican ===");
console.log("Array original:", frutas);
frutas.push("sandía");
console.log("Después de push:", frutas);

// pop() - eliminar del último elemento
let eliminado = frutas.pop();
console.log("Elemento eliminado con pop:", eliminado);
console.log("Después de pop:", frutas);

// unshift() - agregar al principio
frutas.unshift("fresa");
console.log("Después de unshift:", frutas);

// shift() - eliminar del principio
let eliminadoPrincipio = frutas.shift();
console.log("Elemento eliminado con shift:", eliminadoPrincipio);
console.log("Después de shift:", frutas);

// splice() - agregar/eliminar en cualquier posición
console.log("\n=== Usando splice ===");
let colores = ["rojo", "verde", "azul", "amarillo"];
console.log("Array original:", colores);

// Eliminar elementos (posición, cantidad)
colores.splice(1, 2); // Elimina desde posición 1, 2 elementos
console.log("Después de splice (eliminar):", colores);

// Agregar elementos
colores.splice(1, 0, "naranja", "morado"); // En posición 1, elimina 0, agrega 2
console.log("Después de splice (agregar):", colores);

// Reemplazar elementos
colores.splice(2, 1, "blanco"); // En posición 2, elimina 1, agrega 1
console.log("Después de splice (reemplazar):", colores);

// ===============================================
// 5. MÉTODOS QUE NO MODIFICAN EL ARRAY ORIGINAL
// ===============================================

// slice() - extraer una porción del array
console.log("\n=== Métodos que no modifican ===");
let paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];
console.log("Array original:", paises);

let primerosTres = paises.slice(0, 3); // Desde índice 0 hasta 3 (sin incluir)
console.log("Primeros tres países:", primerosTres);
console.log("Array original sigue igual:", paises);

let ultimosDos = paises.slice(-2); // Últimos dos elementos
console.log("Últimos dos países:", ultimosDos);

// concat() - unir arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let unido = array1.concat(array2);
console.log("Arrays unidos:", unido);

// join() - convertir array a string
let palabras = ["Hola", "mundo", "JavaScript"];
let frase = palabras.join(" "); // Une con espacio
console.log("Frase:", frase);

let csv = palabras.join(","); // Une con coma
console.log("CSV:", csv);

// ===============================================
// 6. MÉTODOS DE BÚSQUEDA
// ===============================================

// indexOf() - encontrar índice de un elemento
console.log("\n=== Métodos de búsqueda ===");
let animales = ["perro", "gato", "pájaro", "pez", "gato"];
console.log("Array de animales:", animales);

console.log("Índice de 'gato':", animales.indexOf("gato")); // Primera ocurrencia
console.log("Índice de 'pájaro':", animales.indexOf("pájaro"));
console.log("Índice de 'no existe':", animales.indexOf("no existe")); // -1 si no encuentra

// lastIndexOf() - última ocurrencia
console.log("Último índice de 'gato':", animales.lastIndexOf("gato"));

// includes() - verificar si existe un elemento
console.log("¿Incluye 'perro'?", animales.includes("perro"));
console.log("¿Incluye 'elefante'?", animales.includes("elefante"));

// find() - encontrar el primer elemento que cumple una condición
let numerosFind = [5, 12, 8, 130, 44];
let primerMayor10 = numerosFind.find(numero => numero > 10);
console.log("Primer número mayor a 10:", primerMayor10);

// findIndex() - encontrar el índice del primer elemento que cumple condición
let indiceMayor10 = numerosFind.findIndex(numero => numero > 10);
console.log("Índice del primer número mayor a 10:", indiceMayor10);

// ===============================================
// 7. MÉTODOS DE TRANSFORMACIÓN (FUNCIONALES)
// ===============================================
// Estos métodos crean nuevos arrays basados en el original

// map() - transformar cada elemento
console.log("\n=== Métodos de transformación ===");
let numerosMap = [1, 2, 3, 4, 5];
console.log("Array original:", numerosMap);

let duplicados = numerosMap.map(numero => numero * 2);
console.log("Números duplicados:", duplicados);

let cuadrados = numerosMap.map(numero => numero ** 2);
console.log("Números al cuadrado:", cuadrados);

// Ejemplo práctico: extraer propiedades de objetos
let usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
];

let nombres = usuarios.map(usuario => usuario.nombre);
console.log("Nombres de usuarios:", nombres);

// filter() - filtrar elementos que cumplen condición
let numerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numerosFilter.filter(numero => numero % 2 === 0);
console.log("Números pares:", pares);

let mayores5 = numerosFilter.filter(numero => numero > 5);
console.log("Números mayores a 5:", mayores5);

// Ejemplo práctico: filtrar usuarios por edad
let mayores25 = usuarios.filter(usuario => usuario.edad > 25);
console.log("Usuarios mayores de 25:", mayores25);

// ===============================================
// 8. MÉTODOS DE REDUCCIÓN
// ===============================================

// reduce() - reducir array a un solo valor
console.log("\n=== Métodos de reducción ===");
let numerosReduce = [1, 2, 3, 4, 5];

let suma = numerosReduce.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Suma total:", suma);

let producto = numerosReduce.reduce((acumulador, actual) => acumulador * actual, 1);
console.log("Producto total:", producto);

// Encontrar el máximo
let maximo = numerosReduce.reduce((max, actual) => actual > max ? actual : max);
console.log("Número máximo:", maximo);

// ===============================================
// 9. MÉTODOS DE ORDENACIÓN
// ===============================================

// sort() - ordenar array
console.log("\n=== Métodos de ordenación ===");
let desordenado = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Array desordenado:", desordenado);

// Cuidado: sort() sin función ordena como strings
desordenado.sort();
console.log("Ordenado como strings (incorrecto para números):", desordenado);

// Orden correcto para números
let numerosSort = [3, 1, 4, 1, 5, 9, 2, 6];
numerosSort.sort((a, b) => a - b);
console.log("Ordenado numéricamente (ascendente):", numerosSort);

// Orden descendente
numerosSort.sort((a, b) => b - a);
console.log("Ordenado numéricamente (descendente):", numerosSort);

// Ordenar strings
let palabrasSort = ["banana", "manzana", "naranja", "uva"];
palabrasSort.sort();
console.log("Palabras ordenadas:", palabrasSort);

// reverse() - invertir orden
console.log("Array invertido:", palabrasSort.reverse());

// ===============================================
// 10. RECORRER ARRAYS
// ===============================================

// forEach() - ejecutar función para cada elemento
console.log("\n=== Recorrer arrays ===");
let recorrer = [10, 20, 30, 40, 50];

console.log("Usando forEach:");
recorrer.forEach((elemento, indice) => {
    console.log(`Índice ${indice}: ${elemento}`);
});

// for...of - forma moderna de recorrer
console.log("\nUsando for...of:");
for (let elemento of recorrer) {
    console.log("Elemento:", elemento);
}

// for tradicional - cuando necesitas el índice
console.log("\nUsando for tradicional:");
for (let i = 0; i < recorrer.length; i++) {
    console.log(`Posición ${i}: ${recorrer[i]}`);
}

// ===============================================
// 11. EJEMPLOS PRÁCTICOS
// ===============================================

// Eliminar duplicados de un array
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

let conDuplicados = [1, 2, 2, 3, 4, 4, 5];
let sinDuplicados = eliminarDuplicados(conDuplicados);
console.log("Sin duplicados:", sinDuplicados);

// Comprobar si todos los elementos cumplen condición
let todosPositivos = numerosFilter.every(numero => numero > 0);
console.log("¿Todos son positivos?", todosPositivos);

// Comprobar si algún elemento cumple condición
let hayMayor8 = numerosFilter.some(numero => numero > 8);
console.log("¿Hay algún número mayor a 8?", hayMayor8);

// ===============================================
// EJERCICIOS PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Crea un array de 5 números y muestra el primero y el último
// TODO: let numerosEj1 = [10, 20, 30, 40, 50];
// TODO: console.log("Primero:", numerosEj1[0]);
// TODO: console.log("Último:", numerosEj1[numerosEj1.length - 1]);

// Ejercicio 2 → Usa push para agregar 3 frutas al array y luego muéstralas
// TODO: let frutasEj2 = ["manzana"];
// TODO: frutasEj2.push("banana");
// TODO: frutasEj2.push("naranja");
// TODO: frutasEj2.push("uva");
// TODO: console.log("Frutas:", frutasEj2);

// Ejercicio 3 → Usa map para duplicar todos los números de un array
// TODO: let numerosEj3 = [1, 2, 3, 4, 5];
// TODO: let duplicadosEj3 = numerosEj3.map(num => num * 2);
// TODO: console.log("Duplicados:", duplicadosEj3);

// Ejercicio 4 → Usa filter para obtener solo los números pares
// TODO: let numerosEj4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// TODO: let paresEj4 = numerosEj4.filter(num => num % 2 === 0);
// TODO: console.log("Pares:", paresEj4);

// Ejercicio 5 → Usa find para encontrar el primer número mayor a 5
// TODO: let numerosEj5 = [1, 3, 5, 7, 9];
// TODO: let mayor5 = numerosEj5.find(num => num > 5);
// TODO: console.log("Primer mayor a 5:", mayor5);

// Ejercicio 6 → Usa reduce para sumar todos los números
// TODO: let numerosEj6 = [10, 20, 30, 40];
// TODO: let sumaEj6 = numerosEj6.reduce((total, num) => total + num, 0);
// TODO: console.log("Suma total:", sumaEj6);

// Ejercicio 7 → Ordena un array de palabras alfabéticamente
// TODO: let palabrasEj7 = ["zebra", "manzana", "banana", "árbol"];
// TODO: palabrasEj7.sort();
// TODO: console.log("Palabras ordenadas:", palabrasEj7);

// Ejercicio 8 → Crea un array de objetos usuarios y extrae solo los nombres
// TODO: let usuariosEj8 = [
// TODO:     { id: 1, nombre: "Ana", edad: 25 },
// TODO:     { id: 2, nombre: "Juan", edad: 30 },
// TODO:     { id: 3, nombre: "María", edad: 28 }
// TODO: ];
// TODO: let nombresEj8 = usuariosEj8.map(usuario => usuario.nombre);
// TODO: console.log("Nombres:", nombresEj8);

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy aprendimos:
// • Crear y acceder a elementos de arrays
// • Métodos que modifican: push, pop, shift, unshift, splice
// • Métodos que no modifican: slice, concat, join
// • Métodos de búsqueda: indexOf, includes, find, findIndex
// • Métodos de transformación: map, filter
// • Métodos de reducción: reduce
// • Métodos de ordenación: sort, reverse
// • Formas de recorrer: forEach, for...of, for tradicional

// Pregunta para la clase: ¿Cuándo usarías map en lugar de forEach?
// ¿Por qué es importante saber si un método modifica el array original?