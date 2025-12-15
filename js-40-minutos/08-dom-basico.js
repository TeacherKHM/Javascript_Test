// ===============================================
// SESIÓN 08 - DOM Básico y Manipulación de HTML
// Duración: 40 minutos
// Objetivos de hoy:
// • Entender qué es el DOM y cómo JavaScript interactúa con HTML
// • Aprender a seleccionar elementos con querySelector
// • Dominar textContent, innerHTML y manipulación de contenido
// • Usar classList para modificar clases CSS
// ===============================================

// ===============================================
// 1. ¿QUÉ ES EL DOM?
// ===============================================
// DOM = Document Object Model (Modelo de Objetos del Documento)
// Es la representación de nuestra página HTML como objetos JavaScript
// Piensa en el DOM como un árbol donde cada etiqueta HTML es una rama

/*
Estructura del DOM (ejemplo mental):
document
├── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── p
        ├── div
        │   ├── span
        │   └── button
        └── footer
*/

// ===============================================
// 2. SELECCIONAR ELEMENTOS DEL DOM
// ===============================================
// Para manipular elementos, primero debemos seleccionarlos

// querySelector() - selecciona el primer elemento que coincide
console.log("=== Seleccionando elementos ===");

// Seleccionar por etiqueta
let primerH1 = document.querySelector("h1");
console.log("Primer h1:", primerH1);

// Seleccionar por clase
let primerElementoConClase = document.querySelector(".mi-clase");
console.log("Primer elemento con clase .mi-clase:", primerElementoConClase);

// Seleccionar por ID
let elementoPorId = document.querySelector("#mi-id");
console.log("Elemento con ID #mi-id:", elementoPorId);

// Seleccionar con selectores CSS complejos
let botonDentroDeDiv = document.querySelector("div .boton");
let inputConTipoEmail = document.querySelector("input[type='email']");

// querySelectorAll() - selecciona TODOS los elementos que coinciden
let todosLosParrafos = document.querySelectorAll("p");
let todosLosBotones = document.querySelectorAll("button");
let todosLosElementosConClase = document.querySelectorAll(".importante");

console.log("Todos los párrafos:", todosLosParrafos);
console.log("Cantidad de párrafos:", todosLosParrafos.length);

// ===============================================
// 3. LEER Y MODIFICAR CONTENIDO
// ===============================================

// textContent - solo el texto, sin etiquetas HTML
console.log("\n=== Trabajando con textContent ===");

// Supongamos que tenemos: <h1 id="titulo">Hola <span>Mundo</span></h1>
let titulo = document.querySelector("#titulo");
if (titulo) {
    console.log("textContent original:", titulo.textContent); // "Hola Mundo"
    
    // Modificar textContent
    titulo.textContent = "Nuevo Título";
    console.log("textContent modificado:", titulo.textContent);
}

// innerHTML - incluye etiquetas HTML
console.log("\n=== Trabajando con innerHTML ===");

let contenido = document.querySelector("#contenido");
if (contenido) {
    console.log("innerHTML original:", contenido.innerHTML);
    
    // Modificar innerHTML (¡cuidado con seguridad!)
    contenido.innerHTML = "<p>Nuevo párrafo <strong>importante</strong></p>";
    console.log("innerHTML modificado:", contenido.innerHTML);
}

// Diferencia clave entre textContent e innerHTML
let ejemplo = document.querySelector("#ejemplo");
if (ejemplo) {
    ejemplo.innerHTML = "Texto con <em>énfasis</em>";
    console.log("innerHTML:", ejemplo.innerHTML); // "Texto con <em>énfasis</em>"
    console.log("textContent:", ejemplo.textContent); // "Texto con énfasis"
}

// ===============================================
// 4. MANIPULAR ATRIBUTOS
// ===============================================

// getAttribute() - obtener valor de un atributo
console.log("\n=== Trabajando con atributos ===");

let enlace = document.querySelector("a");
if (enlace) {
    let href = enlace.getAttribute("href");
    let target = enlace.getAttribute("target");
    console.log("Href del enlace:", href);
    console.log("Target del enlace:", target);
}

// setAttribute() - modificar o agregar atributos
let imagen = document.querySelector("img");
if (imagen) {
    imagen.setAttribute("src", "nueva-imagen.jpg");
    imagen.setAttribute("alt", "Descripción de la imagen");
    imagen.setAttribute("width", "300");
}

// Atributos booleanos (checked, disabled, hidden)
let checkbox = document.querySelector("input[type='checkbox']");
if (checkbox) {
    checkbox.checked = true; // Marcar checkbox
    checkbox.disabled = false; // Habilitar
}

// ===============================================
// 5. MANIPULAR CLASES CSS
// ===============================================
// classList es la forma moderna de trabajar con clases

console.log("\n=== Trabajando con classList ===");

let elemento = document.querySelector(".elemento-dinamico");
if (elemento) {
    // add() - agregar una clase
    elemento.classList.add("nueva-clase");
    console.log("Clases después de add:", elemento.className);
    
    // remove() - eliminar una clase
    elemento.classList.remove("clase-vieja");
    
    // toggle() - agregar si no existe, eliminar si existe
    elemento.classList.toggle("activa"); // Si no existe, la agrega
    elemento.classList.toggle("activa"); // Como existe, la elimina
    
    // contains() - verificar si una clase existe
    let tieneClase = elemento.classList.contains("importante");
    console.log("¿Tiene la clase 'importante'?:", tieneClase);
    
    // replace() - reemplazar una clase por otra
    elemento.classList.replace("vieja", "nueva");
}

// ===============================================
// 6. MANIPULAR ESTILOS CSS
// ===============================================

// style - modificar estilos CSS directamente
console.log("\n=== Trabajando con estilos ===");

let caja = document.querySelector(".caja");
if (caja) {
    // Modificar propiedades CSS individuales
    caja.style.backgroundColor = "lightblue";
    caja.style.fontSize = "18px";
    caja.style.padding = "20px";
    caja.style.borderRadius = "10px";
    
    // Importante: las propiedades CSS con guiones se convierten a camelCase
    // CSS: background-color → JavaScript: backgroundColor
    // CSS: border-radius → JavaScript: borderRadius
    // CSS: margin-top → JavaScript: marginTop
}

// getComputedStyle() - obtener estilos calculados
if (caja) {
    let estilos = window.getComputedStyle(caja);
    let colorActual = estilos.backgroundColor;
    let fontSizeActual = estilos.fontSize;
    console.log("Color de fondo actual:", colorActual);
    console.log("Tamaño de fuente actual:", fontSizeActual);
}

// ===============================================
// 7. CREAR Y ELIMINAR ELEMENTOS
// ===============================================

// createElement() - crear nuevos elementos
console.log("\n=== Creando elementos ===");

// Crear un nuevo párrafo
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo creado dinámicamente";
nuevoParrafo.classList.add("parrafo-dinamico");

// Crear un nuevo botón
let nuevoBoton = document.createElement("button");
nuevoBoton.textContent = "Haz clic aquí";
nuevoBoton.classList.add("btn", "btn-primary");

// appendChild() - agregar elemento al DOM
let contenedor = document.querySelector("#contenedor");
if (contenedor) {
    contenedor.appendChild(nuevoParrafo);
    contenedor.appendChild(nuevoBoton);
}

// insertAdjacentHTML() - insertar HTML en posiciones específicas
let seccion = document.querySelector("#seccion");
if (seccion) {
    // 'beforebegin' - Antes del elemento
    // 'afterbegin' - Dentro del elemento, al principio
    // 'beforeend' - Dentro del elemento, al final
    // 'afterend' - Después del elemento
    
    seccion.insertAdjacentHTML('beforeend', '<div class="nuevo">Elemento nuevo</div>');
}

// remove() - eliminar elementos
let elementoAEliminar = document.querySelector(".eliminar");
if (elementoAEliminar) {
    elementoAEliminar.remove();
}

// ===============================================
// 8. RECORRER ELEMENTOS DEL DOM
// ===============================================

// Recorrer una colección de elementos
console.log("\n=== Recorriendo elementos ===");

let todosLosDivs = document.querySelectorAll("div");
todosLosDivs.forEach((div, indice) => {
    console.log(`Div ${indice}:`, div.textContent);
    // Podemos modificar cada elemento
    div.style.border = "1px solid red";
});

// children - acceder a elementos hijos directos
let padre = document.querySelector(".padre");
if (padre) {
    let hijos = padre.children;
    console.log("Hijos del elemento padre:", hijos);
    
    for (let i = 0; i < hijos.length; i++) {
        console.log(`Hijo ${i}:`, hijos[i]);
    }
}

// parentElement - acceder al elemento padre
let hijo = document.querySelector(".hijo");
if (hijo) {
    let elementoPadre = hijo.parentElement;
    console.log("Elemento padre:", elementoPadre);
}

// ===============================================
// 9. EJEMPLOS PRÁCTICOS
// ===============================================

// Ejemplo 1: Contador de caracteres
function actualizarContador() {
    let textarea = document.querySelector("#texto");
    let contador = document.querySelector("#contador");
    
    if (textarea && contador) {
        let cantidad = textarea.value.length;
        contador.textContent = `${cantidad} caracteres`;
        
        if (cantidad > 100) {
            contador.style.color = "red";
        } else {
            contador.style.color = "green";
        }
    }
}

// Ejemplo 2: Cambiar tema (claro/oscuro)
function cambiarTema() {
    let body = document.body;
    let boton = document.querySelector("#btn-tema");
    
    if (body.classList.contains("tema-oscuro")) {
        body.classList.remove("tema-oscuro");
        body.classList.add("tema-claro");
        if (boton) boton.textContent = "Tema Oscuro";
    } else {
        body.classList.remove("tema-claro");
        body.classList.add("tema-oscuro");
        if (boton) boton.textContent = "Tema Claro";
    }
}

// Ejemplo 3: Validación de formulario en tiempo real
function validarEmail() {
    let input = document.querySelector("#email");
    let mensaje = document.querySelector("#email-error");
    
    if (input && mensaje) {
        let email = input.value;
        let emailValido = email.includes("@") && email.includes(".");
        
        if (emailValido) {
            input.classList.remove("invalido");
            input.classList.add("valido");
            mensaje.textContent = "Email válido";
            mensaje.style.color = "green";
        } else {
            input.classList.remove("valido");
            input.classList.add("invalido");
            mensaje.textContent = "Email inválido";
            mensaje.style.color = "red";
        }
    }
}

// ===============================================
// 10. BUENAS PRÁCTICAS Y SEGURIDAD
// ===============================================

// ✅ Buenas prácticas
// 1. Verificar que el elemento existe antes de manipularlo
let elemento = document.querySelector("#mi-elemento");
if (elemento) {
    elemento.textContent = "Texto seguro";
}

// 2. Usar textContent en lugar de innerHTML cuando sea posible
// textContent es más seguro contra ataques XSS
elemento.textContent = "<script>alert('hackeado')</script>"; // Seguro
// elemento.innerHTML = "<script>alert('hackeado')</script>"; // Peligroso

// 3. Usar clases CSS en lugar de estilos inline
elemento.classList.add("clase-estilo"); // ✅ Mejor
// elemento.style.color = "red"; // ❌ Evitar si es posible

// 4. Nombres descriptivos para variables
let botonPrincipal = document.querySelector("#btn-primary"); // ✅ Claro
let b = document.querySelector("#btn"); // ❌ Confuso

// ❌ Malas prácticas a evitar
// 1. No verificar si el elemento existe
// let inexistente = document.querySelector("#no-existe");
// inexistente.textContent = "Esto dará error";

// 2. Usar innerHTML con contenido no confiable
// let userInput = "<script>alert('XSS')</script>";
// elemento.innerHTML = userInput; // ¡Peligroso!

// ===============================================
// EJERCICIOS PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Selecciona un elemento por ID y cambia su texto
// TODO: let tituloEj1 = document.querySelector("#titulo-principal");
// TODO: if (tituloEj1) {
// TODO:     tituloEj1.textContent = "Nuevo Título Principal";
// TODO: }

// Ejercicio 2 → Selecciona todos los párrafos y cambia su color de fondo
// TODO: let parrafosEj2 = document.querySelectorAll("p");
// TODO: parrafosEj2.forEach(p => {
// TODO:     p.style.backgroundColor = "yellow";
// TODO: });

// Ejercicio 3 → Agrega una clase a un elemento y luego elimínala
// TODO: let cajaEj3 = document.querySelector(".caja-ejercicio");
// TODO: if (cajaEj3) {
// TODO:     cajaEj3.classList.add("resaltado");
// TODO:     setTimeout(() => {
// TODO:         cajaEj3.classList.remove("resaltado");
// TODO:     }, 2000);
// TODO: }

// Ejercicio 4 → Crea un nuevo div y agrégalo al body
// TODO: let nuevoDiv = document.createElement("div");
// TODO: nuevoDiv.textContent = "Div creado dinámicamente";
// TODO: nuevoDiv.classList.add("div-dinamico");
// TODO: document.body.appendChild(nuevoDiv);

// Ejercicio 5 → Modifica el atributo src de una imagen
// TODO: let imagenEj5 = document.querySelector("#mi-imagen");
// TODO: if (imagenEj5) {
// TODO:     imagenEj5.setAttribute("src", "imagen-nueva.jpg");
// TODO:     imagenEj5.setAttribute("alt", "Nueva imagen");
// TODO: }

// Ejercicio 6 → Usa innerHTML para agregar una lista
// TODO: let contenedorEj6 = document.querySelector("#lista-contenedor");
// TODO: if (contenedorEj6) {
// TODO:     contenedorEj6.innerHTML = `
// TODO:         <ul>
// TODO:             <li>Item 1</li>
// TODO:             <li>Item 2</li>
// TODO:             <li>Item 3</li>
// TODO:         </ul>
// TODO:     `;
// TODO: }

// Ejercicio 7 → Alterna una clase con toggle cada vez que se hace clic
// TODO: let botonEj7 = document.querySelector("#btn-toggle");
// TODO: if (botonEj7) {
// TODO:     botonEj7.addEventListener("click", () => {
// TODO:         botonEj7.classList.toggle("activo");
// TODO:     });
// TODO: }

// Ejercicio 8 → Muestra la cantidad de elementos con una clase específica
// TODO: let elementosImportantes = document.querySelectorAll(".importante");
// TODO: console.log(`Cantidad de elementos importantes: ${elementosImportantes.length}`);

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy aprendimos:
// • Qué es el DOM y cómo representa nuestra página HTML
// • Seleccionar elementos con querySelector y querySelectorAll
// • Modificar contenido con textContent e innerHTML
// • Manipular atributos con getAttribute y setAttribute
// • Trabajar con clases CSS usando classList
// • Modificar estilos CSS con la propiedad style
// • Crear, agregar y eliminar elementos del DOM
// • Recorrer colecciones de elementos
// • Buenas prácticas de seguridad y rendimiento

// Pregunta para la clase: ¿Cuándo deberías usar textContent en lugar de innerHTML?
// ¿Por qué es importante verificar si un elemento existe antes de manipularlo?