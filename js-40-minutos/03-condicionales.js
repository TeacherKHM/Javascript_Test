// ===============================================
// SESIÓN 03 - Condicionales
// Duración: 40 minutos
// Objetivos de hoy:
// • Dominar las estructuras if/else y if/else if/else
// • Aprender a usar el operador ternario
// • Entender cuándo usar switch en lugar de if/else
// • Practicar con condiciones complejas y anidadas
// ===============================================

// ===============================================
// IF/ELSE - LA BASE DE LAS CONDICIONES
// ===============================================
// if/else nos permite ejecutar código dependiendo de si una condición es true o false
// Aquí explicaremos la estructura fundamental

console.log("=== EJEMPLOS BÁSICOS DE IF/ELSE ===");

// Ejemplo 1: Verificar si alguien es mayor de edad
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ejemplo 2: Verificar si un número es positivo
let numero = -5;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// En clase veremos el error típico de no usar else if cuando se necesita
// Pregunta para la clase: ¿qué pasaría si usáramos if separado en lugar de else if?

// ===============================================
// IF/ELSE IF/ELSE - MÚLTIPLES CONDICIONES
// ===============================================
// Cuando tenemos más de dos opciones, usamos else if

console.log("\n=== MÚLTIPLES CONDICIONES ===");

// Ejemplo: Calificar una nota
let nota = 85;
if (nota >= 90) {
  console.log("Sobresaliente");
} else if (nota >= 80) {
  console.log("Notable");
} else if (nota >= 70) {
  console.log("Aprobado");
} else if (nota >= 60) {
  console.log("Suficiente");
} else {
  console.log("Suspenso");
}

// Ejemplo: Determinar el rango de edad
let edadPersona = 25;
if (edadPersona < 13) {
  console.log("Eres un niño");
} else if (edadPersona < 18) {
  console.log("Eres un adolescente");
} else if (edadPersona < 30) {
  console.log("Eres un joven");
} else if (edadPersona < 60) {
  console.log("Eres un adulto");
} else {
  console.log("Eres un adulto mayor");
}

// ===============================================
// CONDICIONES COMPLEJAS CON OPERADORES LÓGICOS
// ===============================================
// Podemos combinar múltiples condiciones usando && (AND) y || (OR)

console.log("\n=== CONDICIONES COMPLEJAS ===");

// Ejemplo 1: AND (&&) - todas las condiciones deben ser true
let tieneLicencia = true;
let tieneCoche = false;
let edadConducir = 20;

if (edadConducir >= 18 && tieneLicencia && tieneCoche) {
  console.log("Puedes conducir tu propio coche");
} else if (edadConducir >= 18 && tieneLicencia) {
  console.log("Puedes conducir pero no tienes coche");
} else {
  console.log("No puedes conducir");
}

// Ejemplo 2: OR (||) - al menos una condición debe ser true
let esFinDeSemana = false;
let esFestivo = true;
let esVacaciones = false;

if (esFinDeSemana || esFestivo || esVacaciones) {
  console.log("¡Hoy no trabajas!");
} else {
  console.log("Tocaba ir a trabajar");
}

// Ejemplo 3: Combinando AND y OR
let esEstudiante = true;
let tieneDescuento = false;
let esMayorDe65 = false;

if ((esEstudiante && tieneDescuento) || esMayorDe65) {
  console.log("Tienes derecho a descuento");
} else {
  console.log("No tienes derecho a descuento");
}

// Cuidado con este error común: no usar paréntesis en condiciones complejas
// Esto puede dar resultados inesperados por la precedencia de operadores

// ===============================================
// OPERADOR TERNARIO - IF/ELSE EN UNA LÍNEA
// ===============================================
// El operador ternario es una forma compacta de escribir if/else simple
// Sintaxis: condición ? valor_si_true : valor_si_false

console.log("\n=== OPERADOR TERNARIO ===");

// Ejemplo 1: Forma tradicional vs ternario
let edadUsuario = 17;
let mensaje;

// Forma tradicional
if (edadUsuario >= 18) {
  mensaje = "Puedes entrar";
} else {
  mensaje = "No puedes entrar";
}
console.log("Con if/else:", mensaje);

// Con operador ternario
let mensajeTernario = edadUsuario >= 18 ? "Puedes entrar" : "No puedes entrar";
console.log("Con ternario:", mensajeTernario);

// Ejemplo 2: Asignar valores basados en condiciones
let precioProducto = 100;
let esPremium = true;
let precioFinal = esPremium ? precioProducto * 0.8 : precioProducto;
console.log(`Precio final: ${precioFinal}€ (con ${esPremium ? "20%" : "0%"} de descuento)`);

// Ejemplo 3: Ternarios anidados (no recomendado para muchos niveles)
let puntuacion = 75;
let calificacion = puntuacion >= 90 ? "A" : 
                   puntuacion >= 80 ? "B" : 
                   puntuacion >= 70 ? "C" : 
                   puntuacion >= 60 ? "D" : "F";
console.log(`Calificación: ${calificacion}`);

// Aquí explicaremos por qué los ternarios anidados pueden ser difíciles de leer
// En clase veremos el error típico de abusar de ternarios anidados

// ===============================================
// SWITCH - CUANDO TENEMOS MÚLTIPLES OPCIONES FIJAS
// ===============================================
// switch es útil cuando comparamos una variable con múltiples valores fijos

console.log("\n=== EJEMPLOS DE SWITCH ===");

// Ejemplo 1: Día de la semana
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día inválido";
}
console.log(`El día ${diaSemana} es ${nombreDia}`);

// Ejemplo 2: Tipo de producto
let tipoProducto = "electrónica";
let impuesto;

switch (tipoProducto) {
  case "alimentación":
    impuesto = 0;
    break;
  case "libros":
    impuesto = 4;
    break;
  case "electrónica":
    impuesto = 21;
    break;
  case "ropa":
    impuesto = 21;
    break;
  default:
    impuesto = 21;
}
console.log(`El producto de ${tipoProducto} tiene ${impuesto}% de IVA`);

// Ejemplo 3: Múltiples casos con el mismo resultado
let mes = 12;
let estacion;

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Mes inválido";
}
console.log(`El mes ${mes} está en ${estacion}`);

// ===============================================
// CUÁNDO USAR SWITCH VS IF/ELSE
// ===============================================
// Pregunta para la clase: ¿cuándo es mejor usar switch y cuándo if/else?

// Switch es mejor cuando:
// 1. Comparamos una variable con valores fijos
// 2. Tenemos muchos casos diferentes
// 3. Los casos son mutuamente excluyentes

// if/else es mejor cuando:
// 1. Las condiciones son complejas (rangos, múltiples variables)
// 2. Necesitamos usar operadores lógicos complejos
// 3. Las condiciones no son valores fijos

// ===============================================
// EJEMPLOS PRÁCTICOS DEL MUNDO REAL
// ===============================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Ejemplo 1: Sistema de login
let usuario = "admin";
let contraseña = "12345";
let esUsuarioValido = usuario === "admin" && contraseña === "12345";

if (esUsuarioValido) {
  console.log("✅ Login correcto - Bienvenido admin");
} else {
  console.log("❌ Login incorrecto - Usuario o contraseña inválidos");
}

// Ejemplo 2: Calculadora de envío
let pesoPaquete = 2.5; // kg
let distancia = 100; // km
let esUrgente = true;

let costeEnvio;
if (esUrgente) {
  costeEnvio = 15 + (pesoPaquete * 2) + (distancia * 0.1);
} else {
  costeEnvio = 5 + (pesoPaquete * 1) + (distancia * 0.05);
}
console.log(`Coste de envío: ${costeEnvio.toFixed(2)}€`);

// Ejemplo 3: Validación de formulario
let nombreFormulario = "Juan";
let email = "juan@email.com";
let edadFormulario = 25;
let aceptaTerminos = true;

let errores = [];

if (!nombreFormulario || nombreFormulario.length < 3) {
  errores.push("El nombre debe tener al menos 3 caracteres");
}

if (!email || !email.includes("@")) {
  errores.push("El email debe ser válido");
}

if (!edadFormulario || edadFormulario < 18) {
  errores.push("Debes ser mayor de 18 años");
}

if (!aceptaTerminos) {
  errores.push("Debes aceptar los términos y condiciones");
}

if (errores.length === 0) {
  console.log("✅ Formulario válido");
} else {
  console.log("❌ Errores en el formulario:");
  errores.forEach(error => console.log(`- ${error}`));
}

// ===============================================
// ERRORES COMUNES Y BUENAS PRÁCTICAS
// ===============================================

console.log("\n=== ERRORES COMUNES ===");

// Error 1: Olvidar los break en switch
console.log("Ejemplo sin break (error común):");
let nivel = 2;
switch (nivel) {
  case 1:
    console.log("Nivel básico");
  case 2:
    console.log("Nivel intermedio");
  case 3:
    console.log("Nivel avanzado");
}
// Esto imprimirá todos los mensajes desde el nivel 2 en adelante

// Error 2: Usar = en lugar de === en condiciones
let x = 5;
if (x = 10) {  // ¡Error! Esto asigna 10 a x en lugar de comparar
  console.log("Esto siempre se ejecutará");
}

// Error 3: No considerar todos los casos posibles
let temperatura = 15;
if (temperatura > 20) {
  console.log("Hace calor");
} else if (temperatura < 10) {
  console.log("Hace frío");
}
// ¿Qué pasa si la temperatura está entre 10 y 20? No se imprime nada

// ===============================================
// EJERCICIOS PARA HACER EN CLASE
// ===============================================

// Ejercicio 1 → Crea un programa que determine si un número es par o impar
// TODO: let numero = 7;
// TODO: if (numero % 2 === 0) { console.log("Es par"); } else { console.log("Es impar"); }

// Ejercicio 2 → Crea un sistema de clasificación por edad
// TODO: let edad = 16;
// TODO: Clasifica como: niño (<13), adolescente (13-17), adulto joven (18-25), adulto (26-64), mayor (65+)

// Ejercicio 3 → Usa el operador ternario para determinar si alguien puede votar
// TODO: let edadVotar = 17;
// TODO: let puedeVotar = edadVotar >= 18 ? "Sí puede votar" : "No puede votar";
// TODO: console.log(puedeVotar);

// Ejercicio 4 → Crea un switch para determinar el precio de una entrada
// TODO: let tipoEntrada = "estudiante";
// TODO: Precios: normal (10€), estudiante (7€), jubilado (5€), menor (3€)

// Ejercicio 5 → Valida un email con condiciones múltiples
// TODO: let email = "test@email.com";
// TODO: Debe contener "@", no empezar con ".", y tener al menos 5 caracteres

// Ejercicio 6 → Crea un programa que calcule el bono anual
// TODO: let añosTrabajados = 3;
// TODO: let rendimiento = "alto";
// TODO: Si rendimiento es "alto" y años > 2: bono 20%, si rendimiento "medio": 10%, si no: 0%

// Ejercicio 7 → Usa switch para determinar el número de días de un mes
// TODO: let mes = 2;
// TODO: Considera años bisiestos para febrero (puedes usar un valor fijo para año)

// Ejercicio 8 → Crea un validador de contraseña
// TODO: let contraseña = "Abc123";
// TODO: Debe tener: al menos 6 caracteres, una letra mayúscula, y un número
// TODO: Muestra errores específicos para cada requisito no cumplido

console.log("\n¡Fin de la sesión 03! ¡Practiquen las condicionales en casa!");