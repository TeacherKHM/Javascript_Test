// ===============================================
// SESIÓN 09 - Eventos e Interactividad
// Duración: 40 minutos
// Objetivos de hoy:
// • Entender qué son los eventos y cómo funcionan
// • Dominar addEventListener para responder a acciones del usuario
// • Aprender los eventos más comunes: click, input, submit
// • Usar el objeto event para obtener información del evento
// ===============================================

// ===============================================
// 1. ¿QUÉ SON LOS EVENTOS?
// ===============================================
// Los eventos son acciones que ocurren en la página web
// Pueden ser iniciadas por el usuario (click, teclado) o por el navegador (carga)

/*
Tipos de eventos comunes:
• Mouse: click, dblclick, mousedown, mouseup, mouseover, mouseout
• Teclado: keydown, keyup, keypress
• Formulario: submit, change, input, focus, blur
• Ventana: load, resize, scroll
• Touch: touchstart, touchend, touchmove (móviles)
*/

// ===============================================
// 2. addEventListener - LA FORMA MODERNA
// ===============================================
// addEventListener es la forma recomendada de manejar eventos
// Sintaxis: elemento.addEventListener('evento', funcion);

console.log("=== Configurando eventos ===");

// Evento click en un botón
let botonClick = document.querySelector("#btn-click");
if (botonClick) {
    botonClick.addEventListener("click", function() {
        console.log("¡Hiciste clic en el botón!");
        alert("Gracias por hacer clic");
    });
}

// Evento con función flecha
let botonFlecha = document.querySelector("#btn-flecha");
if (botonFlecha) {
    botonFlecha.addEventListener("click", () => {
        console.log("Clic con función flecha");
        botonFlecha.textContent = "¡Clickeado!";
    });
}

// ===============================================
// 3. EL OBJETO EVENT
// ===============================================
// El objeto event contiene información sobre el evento ocurrido

let botonInfo = document.querySelector("#btn-info");
if (botonInfo) {
    botonInfo.addEventListener("click", function(evento) {
        console.log("=== Información del evento ===");
        console.log("Tipo de evento:", evento.type); // "click"
        console.log("Elemento que disparó:", evento.target); // El botón
        console.log("Posición X:", evento.clientX); // Posición horizontal del mouse
        console.log("Posición Y:", evento.clientY); // Posición vertical del mouse
        console.log("¿Con Ctrl?:", evento.ctrlKey); // Si se presionó Ctrl
        console.log("¿Con Shift?:", evento.shiftKey); // Si se presionó Shift
        console.log("Timestamp:", evento.timeStamp); // Cuándo ocurrió
    });
}

// ===============================================
// 4. EVENTOS DE MOUSE
// ===============================================

let areaMouse = document.querySelector("#area-mouse");
if (areaMouse) {
    // mouseover - cuando el mouse entra al elemento
    areaMouse.addEventListener("mouseover", function() {
        this.style.backgroundColor = "lightblue";
        this.textContent = "Mouse está DENTRO";
    });
    
    // mouseout - cuando el mouse sale del elemento
    areaMouse.addEventListener("mouseout", function() {
        this.style.backgroundColor = "lightgray";
        this.textContent = "Mouse está FUERA";
    });
    
    // mousedown - cuando se presiona el botón del mouse
    areaMouse.addEventListener("mousedown", function() {
        this.style.backgroundColor = "orange";
        console.log("Botón presionado");
    });
    
    // mouseup - cuando se suelta el botón del mouse
    areaMouse.addEventListener("mouseup", function() {
        this.style.backgroundColor = "lightgreen";
        console.log("Botón soltado");
    });
    
    // dblclick - doble clic
    areaMouse.addEventListener("dblclick", function() {
        this.textContent = "¡Doble clic!";
        this.style.transform = "scale(1.2)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300);
    });
}

// ===============================================
// 5. EVENTOS DE TECLADO
// ===============================================

let inputTeclado = document.querySelector("#input-teclado");
let resultadoTeclado = document.querySelector("#resultado-teclado");

if (inputTeclado && resultadoTeclado) {
    // keydown - cuando se presiona una tecla
    inputTeclado.addEventListener("keydown", function(evento) {
        console.log("Tecla presionada:", evento.key);
        console.log("Código de tecla:", evento.code);
        
        // Detectar teclas específicas
        if (evento.key === "Enter") {
            console.log("Presionaste Enter");
        }
        
        if (evento.key === "Escape") {
            console.log("Presionaste Escape");
            this.value = ""; // Limpiar el input
        }
    });
    
    // keyup - cuando se suelta una tecla
    inputTeclado.addEventListener("keyup", function(evento) {
        resultadoTeclado.textContent = `Texto actual: ${this.value}`;
    });
    
    // keypress - cuando se presiona y suelta una tecla que produce carácter
    inputTeclado.addEventListener("keypress", function(evento) {
        console.log("Carácter:", evento.key);
    });
}

// Eventos de teclado en todo el documento
document.addEventListener("keydown", function(evento) {
    // Detectar combinaciones de teclas
    if (evento.ctrlKey && evento.key === "s") {
        evento.preventDefault(); // Evitar el comportamiento por defecto (guardar)
        console.log("Ctrl+S detectado - Guardar personalizado");
    }
    
    if (evento.altKey && evento.key === "Tab") {
        console.log("Alt+Tab detectado");
    }
});

// ===============================================
// 6. EVENTOS DE FORMULARIO
// ===============================================

// Evento input - se dispara cada vez que cambia el valor
let inputInput = document.querySelector("#input-input");
let contadorInput = document.querySelector("#contador-input");

if (inputInput && contadorInput) {
    inputInput.addEventListener("input", function() {
        let cantidad = this.value.length;
        contadorInput.textContent = `${cantidad} caracteres`;
        
        // Validación en tiempo real
        if (cantidad > 20) {
            contadorInput.style.color = "red";
            this.classList.add("error");
        } else {
            contadorInput.style.color = "green";
            this.classList.remove("error");
        }
    });
}

// Evento change - se dispara cuando el elemento pierde el foco y cambió
let selectChange = document.querySelector("#select-change");
let resultadoSelect = document.querySelector("#resultado-select");

if (selectChange && resultadoSelect) {
    selectChange.addEventListener("change", function() {
        resultadoSelect.textContent = `Seleccionaste: ${this.value}`;
        console.log("Valor cambiado a:", this.value);
    });
}

// Evento focus - cuando el elemento recibe el foco
let inputFocus = document.querySelector("#input-focus");
if (inputFocus) {
    inputFocus.addEventListener("focus", function() {
        this.style.backgroundColor = "lightyellow";
        this.placeholder = "Escribe algo...";
    });
}

// Evento blur - cuando el elemento pierde el foco
if (inputFocus) {
    inputFocus.addEventListener("blur", function() {
        this.style.backgroundColor = "white";
        console.log("Valor final:", this.value);
    });
}

// ===============================================
// 7. EVENTO SUBMIT DE FORMULARIOS
// ===============================================

let formulario = document.querySelector("#mi-formulario");
if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Evitar que el formulario se envíe y recargue la página
        
        console.log("=== Datos del formulario ===");
        
        // Obtener datos del formulario
        let nombre = document.querySelector("#nombre").value;
        let email = document.querySelector("#email").value;
        let edad = document.querySelector("#edad").value;
        
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Edad:", edad);
        
        // Validación
        if (!nombre || !email) {
            alert("Por favor completa todos los campos");
            return;
        }
        
        if (!email.includes("@")) {
            alert("Email inválido");
            return;
        }
        
        // Mostrar mensaje de éxito
        let mensajeExito = document.querySelector("#mensaje-exito");
        if (mensajeExito) {
            mensajeExito.textContent = `¡Formulario enviado con éxito, ${nombre}!`;
            mensajeExito.style.color = "green";
            mensajeExito.style.display = "block";
        }
        
        // Limpiar formulario
        this.reset();
    });
}

// ===============================================
// 8. EVENTOS DE VENTANA
// ===============================================

// Evento load - cuando la página termina de cargar
window.addEventListener("load", function() {
    console.log("Página completamente cargada");
    
    // Mostrar mensaje de bienvenida
    let bienvenida = document.querySelector("#bienvenida");
    if (bienvenida) {
        bienvenida.textContent = "¡Bienvenido a la página!";
        bienvenida.style.opacity = "0";
        bienvenida.style.transition = "opacity 1s";
        
        setTimeout(() => {
            bienvenida.style.opacity = "1";
        }, 100);
    }
});

// Evento resize - cuando se redimensiona la ventana
window.addEventListener("resize", function() {
    console.log("Ventana redimensionada");
    console.log("Ancho:", window.innerWidth);
    console.log("Alto:", window.innerHeight);
    
    let infoVentana = document.querySelector("#info-ventana");
    if (infoVentana) {
        infoVentana.textContent = `Ventana: ${window.innerWidth}x${window.innerHeight}`;
    }
});

// Evento scroll - cuando se hace scroll en la página
window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    console.log("Scroll Y:", scrollY);
    
    // Cambiar estilo del header al hacer scroll
    let header = document.querySelector("header");
    if (header) {
        if (scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// ===============================================
// 9. DELEGACIÓN DE EVENTOS
// ===============================================
// Técnica para manejar eventos en múltiples elementos con un solo listener

let listaDelegacion = document.querySelector("#lista-delegacion");
if (listaDelegacion) {
    // Agregar listener al padre en lugar de a cada hijo
    listaDelegacion.addEventListener("click", function(evento) {
        // Verificar si el clic fue en un elemento <li>
        if (evento.target.tagName === "LI") {
            console.log("Clic en:", evento.target.textContent);
            
            // Resaltar elemento clickeado
            // Primero quitar resaltado de todos
            let todosLosLi = this.querySelectorAll("li");
            todosLosLi.forEach(li => li.classList.remove("resaltado"));
            
            // Agregar resaltado al elemento clickeado
            evento.target.classList.add("resaltado");
        }
    });
}

// ===============================================
// 10. REMOVER EVENT LISTENERS
// ===============================================

// Para remover un listener, necesitamos la misma función
let botonRemover = document.querySelector("#btn-remover");
let contadorClics = 0;

function miFuncionDeClic() {
    contadorClics++;
    console.log("Clic número:", contadorClics);
    
    if (contadorClics >= 3) {
        console.log("Removiendo el event listener");
        botonRemover.removeEventListener("click", miFuncionDeClic);
        botonRemover.textContent = "Listener removido";
        botonRemover.disabled = true;
    }
}

if (botonRemover) {
    botonRemover.addEventListener("click", miFuncionDeClic);
}

// ===============================================
// 11. EJEMPLOS PRÁCTICOS
// ===============================================

// Ejemplo 1: Contador con botones
let contador = 0;
let displayContador = document.querySelector("#display-contador");
let btnSumar = document.querySelector("#btn-sumar");
let btnRestar = document.querySelector("#btn-restar");
let btnReset = document.querySelector("#btn-reset");

function actualizarDisplay() {
    if (displayContador) {
        displayContador.textContent = contador;
        
        // Cambiar color según el valor
        if (contador > 0) {
            displayContador.style.color = "green";
        } else if (contador < 0) {
            displayContador.style.color = "red";
        } else {
            displayContador.style.color = "black";
        }
    }
}

if (btnSumar) {
    btnSumar.addEventListener("click", () => {
        contador++;
        actualizarDisplay();
    });
}

if (btnRestar) {
    btnRestar.addEventListener("click", () => {
        contador--;
        actualizarDisplay();
    });
}

if (btnReset) {
    btnReset.addEventListener("click", () => {
        contador = 0;
        actualizarDisplay();
    });
}

// Ejemplo 2: Cambiar color de fondo
let btnCambiarColor = document.querySelector("#btn-cambiar-color");
if (btnCambiarColor) {
    btnCambiarColor.addEventListener("click", function() {
        let colores = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"];
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
        this.textContent = `Color: ${colorAleatorio}`;
    });
}

// ===============================================
// 12. BUENAS PRÁCTICAS
// ===============================================

// ✅ Buenas prácticas
// 1. Usar addEventListener en lugar de atributos onclick
// boton.onclick = function() { ... }; // ❌ Forma antigua
// boton.addEventListener("click", function() { ... }); // ✅ Forma moderna

// 2. Usar funciones con nombres para poder remover listeners
function manejarClic() {
    console.log("Clic manejado");
}
// boton.addEventListener("click", manejarClic); // ✅ Se puede remover
// boton.addEventListener("click", function() { ... }); // ❌ Difícil de remover

// 3. Usar event.preventDefault() cuando sea necesario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evitar recarga de página
});

// 4. Verificar que los elementos existen antes de agregar listeners
let elemento = document.querySelector("#mi-elemento");
if (elemento) {
    elemento.addEventListener("click", miFuncion);
}

// 5. Usar delegación de eventos para múltiples elementos similares
// En lugar de agregar listener a cada <li>, agregarlo al <ul> padre

// ===============================================
// EJERCICIOS PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Agrega un evento click a un botón que cambie su texto
// TODO: let botonEj1 = document.querySelector("#btn-ej1");
// TODO: if (botonEj1) {
// TODO:     botonEj1.addEventListener("click", function() {
// TODO:         this.textContent = "¡Clickeado!";
// TODO:     });
// TODO: }

// Ejercicio 2 → Muestra la posición del mouse al hacer clic en cualquier parte
// TODO: document.addEventListener("click", function(evento) {
// TODO:     console.log(`Mouse en: X=${evento.clientX}, Y=${evento.clientY}`);
// TODO: });

// Ejercicio 3 → Crea un input que muestre lo que escribes en tiempo real
// TODO: let inputEj3 = document.querySelector("#input-ej3");
// TODO: let resultadoEj3 = document.querySelector("#resultado-ej3");
// TODO: if (inputEj3 && resultadoEj3) {
// TODO:     inputEj3.addEventListener("input", function() {
// TODO:         resultadoEj3.textContent = this.value;
// TODO:     });
// TODO: }

// Ejercicio 4 → Detecta cuando se presiona la tecla Enter en un input
// TODO: let inputEj4 = document.querySelector("#input-ej4");
// TODO: if (inputEj4) {
// TODO:     inputEj4.addEventListener("keydown", function(evento) {
// TODO:         if (evento.key === "Enter") {
// TODO:             console.log("Enter presionado:", this.value);
// TODO:         }
// TODO:     });
// TODO: }

// Ejercicio 5 → Crea un botón que cambie el color de un div al pasar el mouse
// TODO: let divEj5 = document.querySelector("#div-ej5");
// TODO: if (divEj5) {
// TODO:     divEj5.addEventListener("mouseover", function() {
// TODO:         this.style.backgroundColor = "lightblue";
// TODO:     });
// TODO:     divEj5.addEventListener("mouseout", function() {
// TODO:         this.style.backgroundColor = "white";
// TODO:     });
// TODO: }

// Ejercicio 6 → Previene el envío de un formulario y muestra los datos
// TODO: let formEj6 = document.querySelector("#form-ej6");
// TODO: if (formEj6) {
// TODO:     formEj6.addEventListener("submit", function(evento) {
// TODO:         evento.preventDefault();
// TODO:         console.log("Formulario prevenido");
// TODO:     });
// TODO: }

// Ejercicio 7 → Crea un contador que se incrementa con cada clic
// TODO: let contadorEj7 = 0;
// TODO: let btnEj7 = document.querySelector("#btn-ej7");
// TODO: let displayEj7 = document.querySelector("#display-ej7");
// TODO: if (btnEj7 && displayEj7) {
// TODO:     btnEj7.addEventListener("click", function() {
// TODO:         contadorEj7++;
// TODO:         displayEj7.textContent = contadorEj7;
// TODO:     });
// TODO: }

// Ejercicio 8 → Usa delegación de eventos para manejar clics en múltiples elementos
// TODO: let contenedorEj8 = document.querySelector("#contenedor-ej8");
// TODO: if (contenedorEj8) {
// TODO:     contenedorEj8.addEventListener("click", function(evento) {
// TODO:         if (evento.target.classList.contains("item")) {
// TODO:             console.log("Clic en item:", evento.target.textContent);
// TODO:         }
// TODO:     });
// TODO: }

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy aprendimos:
// • Qué son los eventos y cómo funcionan en JavaScript
// • Usar addEventListener para responder a acciones del usuario
// • El objeto event y su información útil
// • Eventos de mouse, teclado y formulario
// • Eventos de ventana (load, resize, scroll)
// • Delegación de eventos para manejar múltiples elementos
// • Cómo remover event listeners
// • Buenas prácticas y seguridad en el manejo de eventos

// Pregunta para la clase: ¿Cuándo usarías keydown en lugar de keyup?
// ¿Por qué es importante usar event.preventDefault() en formularios?