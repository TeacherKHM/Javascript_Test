// ===============================================
// SESIÓN 05 - Funciones
// Duración: 40 minutos
// Objetivos de hoy:
// • Entender qué son las funciones y por qué son útiles
// • Aprender a crear funciones declaradas y expresadas
// • Dominar las funciones arrow (flecha)
// • Trabajar con parámetros y valores por defecto
// ===============================================

// ===============================================
// ¿QUÉ ES UNA FUNCIÓN?
// ===============================================
// Una función es como una receta: un conjunto de instrucciones que podemos usar muchas veces
// Nos ayuda a organizar el código y evitar repetición

console.log("=== ¿QUÉ ES UNA FUNCIÓN? ===");

// Aquí explicaremos el concepto de función:
// 1. Reutilizable: la podemos llamar muchas veces
// 2. Organizada: agrupa código relacionado
// 3. Parametrizable: puede aceptar diferentes datos
// 4. Predecible: siempre hace lo mismo con los mismos datos

// Pregunta para la clase: ¿por qué sería útil tener una función para saludar?

// ===============================================
// FUNCIONES DECLARADAS - LA FORMA TRADICIONAL
// ===============================================
// Las funciones declaradas son la forma más clásica de crear funciones
// Sintaxis: function nombreFuncion(parametro1, parametro2) { código }

console.log("\n=== FUNCIONES DECLARADAS ===");

// Ejemplo 1: Función simple sin parámetros
function saludar() {
  console.log("¡Hola! Bienvenido a JavaScript");
}

// Para usar la función, la llamamos así:
saludar();
saludar();  // Podemos llamarla cuantas veces queramos

// Ejemplo 2: Función con parámetros
function saludarPersona(nombre, edad) {
  console.log(`¡Hola ${nombre}! Tienes ${edad} años.`);
}

saludarPersona("Ana", 25);
saludarPersona("Carlos", 30);
saludarPersona("María", 22);

// Ejemplo 3: Función que devuelve un valor (return)
function sumar(a, b) {
  return a + b;  // return devuelve el resultado
}

let resultado1 = sumar(5, 3);
let resultado2 = sumar(10, 20);
console.log("5 + 3 =", resultado1);
console.log("10 + 20 =", resultado2);

// Ejemplo 4: Función con cálculos más complejos
function calcularPrecioConIva(precio, iva = 21) {
  let precioFinal = precio + (precio * iva / 100);
  return precioFinal;
}

let precioProducto = 100;
let precioConIva = calcularPrecioConIva(precioProducto);
console.log(`Precio sin IVA: ${precioProducto}€`);
console.log(`Precio con IVA: ${precioConIva}€`);

// En clase veremos el error típico de olvidar el return
// Si una función no tiene return, devuelve undefined

// ===============================================
// FUNCIONES EXPRESADAS - GUARDADAS EN VARIABLES
// ===============================================
// Las funciones expresadas se asignan a variables
// Son muy comunes en JavaScript moderno

console.log("\n=== FUNCIONES EXPRESADAS ===");

// Ejemplo 1: Función expresada básica
let despedirse = function() {
  console.log("¡Adiós! Gracias por visitarnos");
};

despedirse();
despedirse();

// Ejemplo 2: Función expresada con parámetros
let multiplicar = function(a, b) {
  return a * b;
};

console.log("7 × 8 =", multiplicar(7, 8));
console.log("12 × 3 =", multiplicar(12, 3));

// Ejemplo 3: Función expresada para validar edad
let esMayorDeEdad = function(edad) {
  return edad >= 18;
};

console.log("¿Es mayor de edad 25?", esMayorDeEdad(25));
console.log("¿Es mayor de edad 16?", esMayorDeEdad(16));

// Diferencia clave: las funciones expresadas no se pueden llamar antes de declararlas
// Las funciones declaradas sí se pueden llamar antes (hoisting)

// ===============================================
// FUNCIONES ARROW (FLECHA) - LA FORMA MODERNA
// ===============================================
// Las funciones arrow son una forma más corta y moderna de escribir funciones
// Se introdujeron en ES6 y son muy populares

console.log("\n=== FUNCIONES ARROW ===");

// Ejemplo 1: Arrow function básica
let saludarArrow = () => {
  console.log("¡Hola desde una arrow function!");
};

saludarArrow();

// Ejemplo 2: Arrow function con un parámetro (no necesita paréntesis)
let duplicar = numero => {
  return numero * 2;
};

console.log("Duplicar 5:", duplicar(5));
console.log("Duplicar 10:", duplicar(10));

// Ejemplo 3: Arrow function con return implícito (una sola línea)
let cuadrado = numero => numero * numero;  // No necesita {} ni return

console.log("Cuadrado de 4:", cuadrado(4));
console.log("Cuadrado de 7:", cuadrado(7));

// Ejemplo 4: Arrow function con múltiples parámetros
let calcularDescuento = (precio, porcentaje) => {
  let descuento = precio * porcentaje / 100;
  return precio - descuento;
};

console.log("Precio con 20% descuento:", calcularDescuento(100, 20));
console.log("Precio con 15% descuento:", calcularDescuento(200, 15));

// Ejemplo 5: Arrow function con return implícito y múltiples parámetros
let sumarTres = (a, b, c) => a + b + c;

console.log("Sumar 2 + 3 + 4:", sumarTres(2, 3, 4));

// Aquí explicaremos por qué las arrow functions son populares:
// 1. Más cortas y legibles
// 2. No tienen su propio 'this' (lo veremos más adelante)
// 3. Ideales para funciones cortas y callbacks

// ===============================================
// PARÁMETROS POR DEFECTO
// ===============================================
// Podemos dar valores por defecto a los parámetros
// Si no se proporciona un valor, se usa el valor por defecto

console.log("\n=== PARÁMETROS POR DEFECTO ===");

// Ejemplo 1: Parámetro por defecto básico
function crearUsuario(nombre, rol = "usuario") {
  return `Usuario: ${nombre}, Rol: ${rol}`;
}

console.log(crearUsuario("Ana", "admin"));
console.log(crearUsuario("Carlos"));  // Usa el rol por defecto "usuario"

// Ejemplo 2: Múltiples parámetros por defecto
function configurarServidor(host = "localhost", puerto = 3000, ssl = false) {
  return `Servidor configurado en ${host}:${puerto}, SSL: ${ssl}`;
}

console.log(configurarServidor());
console.log(configurarServidor("example.com"));
console.log(configurarServidor("example.com", 443, true));

// Ejemplo 3: Arrow function con parámetros por defecto
let saludarConIdioma = (nombre, idioma = "español") => {
  let saludos = {
    español: `¡Hola ${nombre}!`,
    inglés: `Hello ${name}!`,
    francés: `Bonjour ${name}!`
  };
  return saludos[idioma] || saludos["español"];
};

console.log(saludarConIdioma("Ana"));
console.log(saludarConIdioma("John", "inglés"));

// ===============================================
// ÁMBITO DE VARIABLES (SCOPE)
// ===============================================
// Las variables tienen diferentes ámbitos: globales y locales

console.log("\n=== ÁMBITO DE VARIABLES ===");

// Variable global
let mensajeGlobal = "Soy una variable global";

function mostrarScope() {
  // Variable local (solo existe dentro de la función)
  let mensajeLocal = "Soy una variable local";
  
  console.log("Dentro de la función:");
  console.log(mensajeGlobal);  // ✅ Podemos acceder a la global
  console.log(mensajeLocal);   // ✅ Podemos acceder a la local
}

mostrarScope();

console.log("\nFuera de la función:");
console.log(mensajeGlobal);  // ✅ Podemos acceder a la global
// console.log(mensajeLocal);  // ❌ Error! No podemos acceder a la local

// Ejemplo 2: Variables con el mismo nombre
let contador = 10;  // Variable global

function incrementarContador() {
  let contador = 0;  // Variable local (no afecta a la global)
  contador++;
  console.log("Contador local:", contador);
}

incrementarContador();
console.log("Contador global:", contador);

// ===============================================
// EJEMPLOS PRÁCTICOS DEL MUNDO REAL
// ===============================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Ejemplo 1: Calculadora de IMC
function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  let categoria;
  
  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Peso normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }
  
  return {
    imc: imc.toFixed(2),
    categoria: categoria
  };
}

let resultadoIMC = calcularIMC(70, 1.75);
console.log(`IMC: ${resultadoIMC.imc} - ${resultadoIMC.categoria}`);

// Ejemplo 2: Generador de contraseñas
let generarContraseña = (longitud = 12) => {
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
  let contraseña = "";
  
  for (let i = 0; i < longitud; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indice];
  }
  
  return contraseña;
};

console.log("Contraseña generada:", generarContraseña());
console.log("Contraseña corta:", generarContraseña(8));

// Ejemplo 3: Validador de email
let validarEmail = function(email) {
  // Validaciones básicas
  if (!email || email.length === 0) {
    return { valido: false, error: "El email es obligatorio" };
  }
  
  if (!email.includes("@")) {
    return { valido: false, error: "El email debe contener @" };
  }
  
  if (email.length < 5) {
    return { valido: false, error: "El email es muy corto" };
  }
  
  return { valido: true, error: null };
};

console.log("Validar email correcto:", validarEmail("usuario@email.com"));
console.log("Validar email incorrecto:", validarEmail("usuarioemail.com"));

// ===============================================
// ERRORES COMUNES Y BUENAS PRÁCTICAS
// ===============================================

console.log("\n=== ERRORES COMUNES ===");

// Error 1: Olvidar el return
function sumarSinReturn(a, b) {
  a + b;  // ❌ No hay return, devuelve undefined
}

let resultadoSinReturn = sumarSinReturn(5, 3);
console.log("Resultado sin return:", resultadoSinReturn);

// Error 2: Llamar a una función antes de declararla (con función expresada)
// saludarTemprano();  // ❌ Error! No se puede llamar antes
let saludarTemprano = function() {
  console.log("Hola");
};

// Error 3: Confundir parámetros
function presentar(nombre, edad) {
  console.log(`Me llamo ${nombre} y tengo ${edad} años`);
}

presentar(25, "Ana");  // ❌ Los parámetros están invertidos

// Buenas prácticas:
// 1. Nombres descriptivos de funciones
// 2. Una función, una responsabilidad
// 3. Documentar qué hacen los parámetros
// 4. Usar parámetros por defecto cuando sea útil

// ===============================================
// EJERCICIOS PARA HACER EN CLASE
// ===============================================

// Ejercicio 1 → Crea una función que calcule el área de un rectángulo
// TODO: function areaRectangulo(ancho, alto) { return ancho * alto; }
// TODO: console.log("Área de 5x3:", areaRectangulo(5, 3));

// Ejercicio 2 → Crea una función que determine si un número es par
// TODO: function esPar(numero) { return numero % 2 === 0; }
// TODO: console.log("¿Es 8 par?", esPar(8));
// TODO: console.log("¿Es 7 par?", esPar(7));

// Ejercicio 3 → Crea una arrow function que convierta grados Celsius a Fahrenheit
// TODO: let celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
// TODO: console.log("25°C =", celsiusToFahrenheit(25), "°F");

// Ejercicio 4 → Crea una función con parámetros por defecto para saludar
// TODO: function saludarConHora(nombre, hora = "día") {
// TODO:   return `¡Buen ${hora}, ${nombre}!`;
// TODO: }
// TODO: console.log(saludarConHora("Ana"));
// TODO: console.log(saludarConHora("Carlos", "noche"));

// Ejercicio 5 → Crea una función que devuelva el mayor de dos números
// TODO: let mayorDeDos = (a, b) => a > b ? a : b;
// TODO: console.log("Mayor entre 10 y 20:", mayorDeDos(10, 20));

// Ejercicio 6 → Crea una función que calcule el precio final con descuento
// TODO: function calcularPrecioFinal(precio, descuento = 0) {
// TODO:   return precio * (1 - descuento / 100);
// TODO: }
// TODO: console.log("Precio final:", calcularPrecioFinal(100, 20));

// Ejercicio 7 → Crea una función que valide si una persona puede conducir
// TODO: let puedeConducir = (edad, tieneLicencia) => edad >= 18 && tieneLicencia;
// TODO: console.log("¿Puede conducir?", puedeConducir(20, true));

// Ejercicio 8 → Crea una función que genere un número aleatorio entre un rango
// TODO: function numeroAleatorio(min, max) {
// TODO:   return Math.floor(Math.random() * (max - min + 1)) + min;
// TODO: }
// TODO: console.log("Número aleatorio entre 1 y 10:", numeroAleatorio(1, 10));

console.log("\n¡Fin de la sesión 05! ¡Practiquen las funciones en casa!");