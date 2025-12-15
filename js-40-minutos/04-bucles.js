// ===============================================
// SESIÓN 04 - Bucles y Repeticiones
// Duración: 40 minutos
// Objetivos de hoy:
// • Dominar el bucle for tradicional
// • Aprender a usar while y do-while
// • Entender el bucle for...of para iterar arrays
// • Controlar el flujo con break y continue
// ===============================================

// ===============================================
// BUCLE FOR - EL MÁS VERSÁTIL
// ===============================================
// El bucle for nos permite repetir código un número específico de veces
// Sintaxis: for (inicialización; condición; actualización)

console.log("=== EJEMPLOS DE BUCLE FOR ===");

// Ejemplo 1: Contar del 1 al 5
console.log("Contando del 1 al 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Aquí explicaremos cada parte del bucle for:
// let i = 1; → Inicialización (creamos el contador)
// i <= 5; → Condición (mientras sea true, sigue ejecutando)
// i++ → Actualización (incrementamos el contador después de cada vuelta)

// Ejemplo 2: Contar hacia atrás
console.log("\nCuenta atrás de 10 a 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("¡Despegue! 🚀");

// Ejemplo 3: Tabla de multiplicar
console.log("\nTabla del 7:");
for (let i = 1; i <= 10; i++) {
  let resultado = 7 * i;
  console.log(`7 × ${i} = ${resultado}`);
}

// Ejemplo 4: Sumar los primeros 10 números
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;  // Es lo mismo que suma = suma + i
}
console.log(`\nLa suma de los números del 1 al 10 es: ${suma}`);

// En clase veremos el error típico de poner ; después del for
// Pregunta para la clase: ¿qué pasaría si escribimos for (let i = 1; i <= 5; i++); ?

// ===============================================
// BUCLE WHILE - REPETIR MIENTRAS SEA CIERTO
// ===============================================
// while ejecuta el código mientras la condición sea true
// Es útil cuando no sabemos cuántas veces se repetirá

console.log("\n=== EJEMPLOS DE BUCLE WHILE ===");

// Ejemplo 1: Contar con while
console.log("Contando con while:");
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;  // ¡Muy importante! Si no incrementamos, tendremos un bucle infinito
}

// Ejemplo 2: Adivinar número (simulación)
console.log("\nSimulación de adivinar número:");
let numeroSecreto = 7;
let intento = 1;
while (intento !== numeroSecreto) {
  console.log(`Intento ${intento}: No es el número...`);
  intento++;
}
console.log(`¡Acertaste! El número era ${numeroSecreto}`);

// Ejemplo 3: Validar entrada de usuario
console.log("\nValidación de entrada:");
let edadValida = false;
let edadUsuario = 15;  // Simulamos que el usuario puso 15

while (!edadValida) {
  if (edadUsuario >= 18) {
    console.log("✅ Edad válida, puedes entrar");
    edadValida = true;
  } else {
    console.log(`❌ Edad inválida (${edadUsuario}), debes ser mayor de 18`);
    edadUsuario += 1;  // Simulamos que el usuario cambia su edad
  }
}

// Cuidado con este error común: bucles infinitos
// Si la condición nunca se vuelve false, el programa se queda colgado

// ===============================================
// BUCLE DO-WHILE - EJECUTAR AL MENOS UNA VEZ
// ===============================================
// do-while es como while pero garantiza que el código se ejecute al menos una vez
// Sintaxis: do { código } while (condición);

console.log("\n=== EJEMPLOS DE BUCLE DO-WHILE ===");

// Ejemplo 1: Menú de usuario
console.log("Simulación de menú:");
let opcion = 1;  // Primera opción del usuario

do {
  switch (opcion) {
    case 1:
      console.log("Opción 1: Ver perfil");
      break;
    case 2:
      console.log("Opción 2: Configuración");
      break;
    case 3:
      console.log("Opción 3: Salir");
      break;
  }
  opcion++;  // Simulamos que el usuario cambia de opción
} while (opcion <= 3);

// Ejemplo 2: Juego de adivinar con pista
console.log("\nJuego de adivinar (con al menos un intento):");
let numeroAdivinar = 5;
let intentoUsuario = 3;
let intentosRealizados = 0;

do {
  intentosRealizados++;
  console.log(`Intento ${intentosRealizados}: ${intentoUsuario}`);
  
  if (intentoUsuario === numeroAdivinar) {
    console.log("¡Felicidades, acertaste!");
  } else if (intentoUsuario < numeroAdivinar) {
    console.log("El número es mayor");
    intentoUsuario++;
  } else {
    console.log("El número es menor");
    intentoUsuario--;
  }
} while (intentoUsuario !== numeroAdivinar && intentosRealizados < 3);

// ===============================================
// BUCLE FOR...OF - ITERAR SOBRE ARRAYS
// ===============================================
// for...of es la forma moderna y más fácil de recorrer arrays
// Nos da directamente cada elemento del array

console.log("\n=== EJEMPLOS DE FOR...OF ===");

// Ejemplo 1: Recorrer un array de frutas
let frutas = ["manzana", "banana", "naranja", "uva", "fresa"];
console.log("Lista de frutas:");

for (let fruta of frutas) {
  console.log(`- ${fruta}`);
}

// Ejemplo 2: Calcular el promedio de notas
let notas = [8, 7, 9, 6, 10, 8, 7];
let sumaNotas = 0;

console.log("\nNotas del alumno:");
for (let nota of notas) {
  console.log(nota);
  sumaNotas += nota;
}

let promedio = sumaNotas / notas.length;
console.log(`Promedio: ${promedio.toFixed(2)}`);

// Ejemplo 3: Filtrar números pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];

console.log("\nNúmeros pares:");
for (let numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
    pares.push(numero);
  }
}

// Ejemplo 4: Buscar el nombre más largo
let nombres = ["Ana", "María", "Juan Carlos", "Lucía", "Alejandro"];
let nombreMasLargo = "";

for (let nombre of nombres) {
  if (nombre.length > nombreMasLargo.length) {
    nombreMasLargo = nombre;
  }
}
console.log(`\nEl nombre más largo es: "${nombreMasLargo}"`);

// ===============================================
// BREAK Y CONTINUE - CONTROLAR EL FLUJO
// ===============================================
// break nos permite salir del bucle antes de tiempo
// continue nos permite saltar a la siguiente iteración

console.log("\n=== EJEMPLOS DE BREAK Y CONTINUE ===");

// Ejemplo 1: Usar break para encontrar un número
console.log("Buscando el número 7 en el array:");
let numerosBusqueda = [1, 3, 5, 7, 9, 11, 13];
let encontrado = false;

for (let numero of numerosBusqueda) {
  console.log(`Revisando: ${numero}`);
  
  if (numero === 7) {
    console.log("¡Número 7 encontrado!");
    encontrado = true;
    break;  // Salimos del bucle inmediatamente
  }
}

if (!encontrado) {
  console.log("El número 7 no está en el array");
}

// Ejemplo 2: Usar continue para saltar números
console.log("\nNúmeros impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Saltamos los números pares
  }
  console.log(i);
}

// Ejemplo 3: Validar contraseñas
console.log("\nValidación de contraseñas:");
let contraseñas = ["123", "abc", "password", "hola123", "secreto"];
let contraseñaValida = null;

for (let contraseña of contraseñas) {
  console.log(`Verificando: "${contraseña}"`);
  
  // Si es muy corta, saltamos a la siguiente
  if (contraseña.length < 6) {
    console.log("  → Demasiado corta");
    continue;
  }
  
  // Si no tiene números, saltamos a la siguiente
  if (!/\d/.test(contraseña)) {
    console.log("  → No tiene números");
    continue;
  }
  
  // Si llegamos aquí, la contraseña es válida
  console.log("  → ✅ Contraseña válida");
  contraseñaValida = contraseña;
  break;
}

if (contraseñaValida) {
  console.log(`Contraseña encontrada: ${contraseñaValida}`);
} else {
  console.log("No se encontró ninguna contraseña válida");
}

// ===============================================
// BUCLES ANIDADOS - BUCLES DENTRO DE BUCLES
// ===============================================
// A veces necesitamos bucles dentro de otros bucles
// ¡Cuidado! Pueden ser muy lentos si no se usan bien

console.log("\n=== EJEMPLOS DE BUCLES ANIDADOS ===");

// Ejemplo 1: Tablas de multiplicar
console.log("Tablas de multiplicar del 1 al 3:");
for (let tabla = 1; tabla <= 3; tabla++) {
  console.log(`\nTabla del ${tabla}:`);
  
  for (let i = 1; i <= 10; i++) {
    let resultado = tabla * i;
    console.log(`${tabla} × ${i} = ${resultado}`);
  }
}

// Ejemplo 2: Buscar en una matriz (array de arrays)
console.log("\nBuscando en matriz:");
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let numeroBuscar = 5;
let posicion = null;

for (let fila = 0; fila < matriz.length; fila++) {
  for (let columna = 0; columna < matriz[fila].length; columna++) {
    if (matriz[fila][columna] === numeroBuscar) {
      posicion = `fila ${fila}, columna ${columna}`;
      break;  // Salimos del bucle interior
    }
  }
  
  if (posicion) {
    break;  // Salimos del bucle exterior también
  }
}

if (posicion) {
  console.log(`El número ${numeroBuscar} está en la ${posicion}`);
} else {
  console.log(`El número ${numeroBuscar} no está en la matriz`);
}

// ===============================================
// ERRORES COMUNES Y BUENAS PRÁCTICAS
// ===============================================

console.log("\n=== ERRORES COMUNES ===");

// Error 1: Bucle infinito (¡no ejecutar esto!)
// console.log("Ejemplo de bucle infinito (comentado):");
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   // ¡Olvidé incrementar i! Esto nunca terminaría
// }

// Error 2: Poner punto y coma después del for
console.log("\nError con punto y coma:");
for (let i = 1; i <= 3; i++); {
  console.log("Esto solo se ejecuta una vez");
}

// Error 3: Condición incorrecta en el bucle
console.log("\nError en condición:");
for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("¡Boom!");
  } else {
    console.log(`${i}...`);
  }
}

// ===============================================
// EJERCICIOS PARA HACER EN CLASE
// ===============================================

// Ejercicio 1 → Imprime los números del 1 al 20 usando for
// TODO: for (let i = 1; i <= 20; i++) { console.log(i); }

// Ejercicio 2 → Imprime solo los números pares del 1 al 20
// TODO: for (let i = 1; i <= 20; i++) { if (i % 2 === 0) { console.log(i); } }

// Ejercicio 3 → Calcula la suma de los números del 1 al 100
// TODO: let sumaTotal = 0;
// TODO: for (let i = 1; i <= 100; i++) { sumaTotal += i; }
// TODO: console.log("Suma total:", sumaTotal);

// Ejercicio 4 → Cuenta hacia atrás desde 10 hasta 1 con while
// TODO: let cuenta = 10;
// TODO: while (cuenta >= 1) { console.log(cuenta); cuenta--; }

// Ejercicio 5 → Recorre un array de nombres y saluda a cada persona
// TODO: let nombres = ["Ana", "Juan", "María", "Carlos"];
// TODO: for (let nombre of nombres) { console.log(`¡Hola ${nombre}!`); }

// Ejercicio 6 → Encuentra el número más grande en un array
// TODO: let numeros = [5, 12, 3, 8, 20, 1];
// TODO: let maximo = numeros[0];
// TODO: for (let numero of numeros) { if (numero > maximo) { maximo = numero; } }
// TODO: console.log("El número más grande es:", maximo);

// Ejercicio 7 → Crea un juego de adivinar con bucle do-while
// TODO: let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// TODO: let intento = 5;
// TODO: do { /* tu código aquí */ } while (intento !== numeroSecreto);

// Ejercicio 8 → Imprime las tablas de multiplicar del 2 al 5
// TODO: for (let tabla = 2; tabla <= 5; tabla++) {
// TODO:   console.log(`Tabla del ${tabla}:`);
// TODO:   for (let i = 1; i <= 10; i++) {
// TODO:     console.log(`${tabla} × ${i} = ${tabla * i}`);
// TODO:   }
// TODO: }

console.log("\n¡Fin de la sesión 04! ¡Practiquen los bucles en casa!");