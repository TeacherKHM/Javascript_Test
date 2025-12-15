// ===============================================
// SESIÓN 01 - Variables y Console.log
// Duración: 40 minutos
// Objetivos de hoy:
// • Entender qué es una variable y por qué la necesitamos
// • Aprender las diferencias entre let, const y var
// • Usar console.log para depurar y ver nuestros resultados
// • Dominar los template literals para concatenar texto
// ===============================================

// ===============================================
// ¿QUÉ ES UNA VARIABLE?
// ===============================================
// Una variable es como una caja donde guardamos información
// Podemos cambiar lo que hay dentro (si es let) o dejarlo fijo (si es const)

// Aquí explicaremos la diferencia fundamental entre let y const
// let = podemos cambiar el valor después
// const = el valor es constante, no puede cambiar

// Ejemplo con let (valor que puede cambiar)
let edad = 25;
console.log("Mi edad es:", edad);

// Ahora podemos cambiarla
edad = 26;
console.log("El año que viene mi edad será:", edad);

// Ejemplo con const (valor que NO puede cambiar)
const nombre = "Ana";
console.log("Mi nombre es:", nombre);

// Si intentamos cambiar una constante, dará error
// nombre = "María";  // Esto daría error, descomenten para verlo

// ===============================================
// ¿Y QUÉ ES VAR?
// ===============================================
// var es la forma antigua de declarar variables
// En clase veremos el error típico de usar var en lugar de let/const

var apellido = "García";
console.log("Mi apellido es:", apellido);

// Problema de var: se puede redeclarar (esto puede causar bugs)
var apellido = "López";  // Esto no da error, pero es confuso
console.log("Ahora mi apellido es:", apellido);

// Pregunta para la clase: ¿por qué creen que let y const son mejores que var?

// ===============================================
// TEMPLATE LITERALS (COMO CONCATENAR TEXTO FÁCIL)
// ===============================================
// Los template literals usan comillas invertidas (``) en lugar de comillas normales
// Nos permiten meter variables directamente con ${variable}

// Forma antigua (con +)
let mensajeAntiguo = "Hola, me llamo " + nombre + " y tengo " + edad + " años";
console.log(mensajeAntiguo);

// Forma moderna (con template literals)
let mensajeModerno = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(mensajeModerno);

// Aquí explicaremos por qué los template literals son mejores:
// 1. Más legibles
// 2. No hay que preocuparse por espacios
// 3. Podemos hacer cálculos dentro

let ciudad = "Madrid";
let presentacion = `Soy ${nombre} de ${ciudad} y el año que viene cumpliré ${edad + 1} años`;
console.log(presentacion);

// ===============================================
// EJEMPLOS PRÁCTICOS PARA CLASE
// ===============================================

// Ejemplo 1: Calculadora de edad futura
let añoActual = 2025;
let añoNacimiento = 1998;
let edadCalculada = añoActual - añoNacimiento;

console.log(`Nací en ${añoNacimiento} y en ${añoActual} tengo ${edadCalculada} años`);

// Ejemplo 2: Información de un producto
const nombreProducto = "iPhone 15";
let precioProducto = 999;
let stockProducto = 50;

console.log(`Producto: ${nombreProducto}`);
console.log(`Precio: ${precioProducto}€`);
console.log(`Stock disponible: ${stockProducto} unidades`);

// Ejemplo 3: Cálculo de descuento
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioFinal = precioOriginal - (precioOriginal * porcentajeDescuento / 100);

console.log(`Precio original: ${precioOriginal}€`);
console.log(`Descuento: ${porcentajeDescuento}%`);
console.log(`Precio final: ${precioFinal}€`);

// ===============================================
// ERRORES COMUNES QUE VEREMOS EN CLASE
// ===============================================

// Error 1: Intentar cambiar una constante
// const PI = 3.1416;
// PI = 3.14;  // Esto daría error

// Error 2: Usar var y tener problemas de scope
// if (true) {
//   var x = 10;
// }
// console.log(x);  // Con var esto funciona, con let daría error

// Error 3: Olvidar declarar una variable
// miVariable = 5;  // Esto crea una variable global (mala práctica)

// Cuidado con este error común: usar const para objetos que sí pueden modificar sus propiedades
const persona = {
  nombre: "Carlos",
  edad: 30
};

// Esto SÍ se puede hacer (cambiar una propiedad del objeto)
persona.edad = 31;
console.log(`Ahora ${persona.nombre} tiene ${persona.edad} años`);

// Esto NO se puede hacer (cambiar el objeto completo)
// persona = { nombre: "Otro", edad: 25 };  // Esto daría error

// ===============================================
// EJERCICIOS PARA HACER EN CLASE
// ===============================================

// Ejercicio 1 → Crea una variable llamada "puntuacion" que empiece en 0
// TODO: Declara la variable puntuacion con valor inicial 0

// Ejercicio 2 → Incrementa la puntuación en 10 puntos y muéstrala en consola
// TODO: Suma 10 a puntuacion y muestra el resultado con console.log

// Ejercicio 3 → Crea una constante con tu nombre y otra con tu edad
// TODO: Declara const miNombre y const miEdad

// Ejercicio 4 → Usa template literals para presentar tu nombre y edad
// TODO: Crea un mensaje que diga "Me llamo [nombre] y tengo [edad] años"

// Ejercicio 5 → Crea variables para un coche: marca (const), modelo (const), año (let)
// TODO: Declara las variables del coche

// Ejercicio 6 → Actualiza el año del coche al año siguiente y muestra la información
// TODO: Cambia el año y muestra toda la info del coche en consola

// Ejercicio 7 → Calcula el precio con IVA de un producto
// TODO: Crea variable precioSinIva (const), iva (const), calcula precioConIva

// Ejercicio 8 → Crea un mensaje de bienvenida personalizado
// TODO: Usa template literals para crear un mensaje que incluya nombre, día y mes
// Pista: puedes usar new Date().getDay() y new Date().getMonth() + 1

console.log("¡Fin de la sesión 01! ¡Repasen los ejercicios en casa!");