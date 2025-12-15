// ===============================================
// SESIÓN 10 - Mini Proyectos Combinados
// Duración: 40 minutos
// Objetivos de hoy:
// • Aplicar todo lo aprendido en proyectos prácticos
// • Crear un contador interactivo
// • Construir un semáforo funcional
// • Desarrollar una calculadora básica
// • Combinar DOM, eventos y lógica de programación
// ===============================================

// ===============================================
// PROYECTO 1: CONTADOR INTERACTIVO
// ===============================================
// Vamos a crear un contador con botones para sumar, restar y resetear
// Usaremos variables, funciones, eventos y manipulación del DOM

console.log("=== INICIANDO PROYECTO 1: CONTADOR ===");

// Variables del contador
let contadorProyecto1 = 0;
let limiteSuperior = 100;
let limiteInferior = -100;

// Elementos del DOM
let displayContador = document.querySelector("#display-contador");
let btnSumar = document.querySelector("#btn-sumar");
let btnRestar = document.querySelector("#btn-restar");
let btnReset = document.querySelector("#btn-reset");
let btnDuplicar = document.querySelector("#btn-duplicar");

// Función para actualizar el display
function actualizarDisplayContador() {
    if (displayContador) {
        displayContador.textContent = contadorProyecto1;
        
        // Cambiar color según el valor
        if (contadorProyecto1 > 50) {
            displayContador.style.color = "red";
            displayContador.style.fontSize = "24px";
        } else if (contadorProyecto1 < -50) {
            displayContador.style.color = "blue";
            displayContador.style.fontSize = "24px";
        } else if (contadorProyecto1 === 0) {
            displayContador.style.color = "black";
            displayContador.style.fontSize = "20px";
        } else {
            displayContador.style.color = "green";
            displayContador.style.fontSize = "20px";
        }
        
        // Deshabilitar botones si llegamos a los límites
        if (btnSumar) btnSumar.disabled = contadorProyecto1 >= limiteSuperior;
        if (btnRestar) btnRestar.disabled = contadorProyecto1 <= limiteInferior;
    }
}

// Función para sumar
function sumarContador() {
    if (contadorProyecto1 < limiteSuperior) {
        contadorProyecto1++;
        actualizarDisplayContador();
        mostrarMensaje(`Contador: ${contadorProyecto1}`, "success");
    } else {
        mostrarMensaje("¡Límite superior alcanzado!", "error");
    }
}

// Función para restar
function restarContador() {
    if (contadorProyecto1 > limiteInferior) {
        contadorProyecto1--;
        actualizarDisplayContador();
        mostrarMensaje(`Contador: ${contadorProyecto1}`, "info");
    } else {
        mostrarMensaje("¡Límite inferior alcanzado!", "error");
    }
}

// Función para resetear
function resetearContador() {
    contadorProyecto1 = 0;
    actualizarDisplayContador();
    mostrarMensaje("Contador reseteado", "warning");
}

// Función para duplicar
function duplicarContador() {
    let nuevoValor = contadorProyecto1 * 2;
    if (nuevoValor >= limiteInferior && nuevoValor <= limiteSuperior) {
        contadorProyecto1 = nuevoValor;
        actualizarDisplayContador();
        mostrarMensaje(`Contador duplicado: ${contadorProyecto1}`, "success");
    } else {
        mostrarMensaje("No se puede duplicar: excede los límites", "error");
    }
}

// Agregar event listeners
if (btnSumar) btnSumar.addEventListener("click", sumarContador);
if (btnRestar) btnRestar.addEventListener("click", restarContador);
if (btnReset) btnReset.addEventListener("click", resetearContador);
if (btnDuplicar) btnDuplicar.addEventListener("click", duplicarContador);

// Soporte para teclado
document.addEventListener("keydown", function(evento) {
    if (evento.key === "+" || evento.key === "=") {
        sumarContador();
    } else if (evento.key === "-" || evento.key === "_") {
        restarContador();
    } else if (evento.key === "0") {
        resetearContador();
    } else if (evento.key === "*") {
        duplicarContador();
    }
});

// Inicializar display
actualizarDisplayContador();

// ===============================================
// PROYECTO 2: SEMÁFORO FUNCIONAL
// ===============================================
// Crearemos un semáforo que cambia de colores automáticamente
// y también permite control manual

console.log("=== INICIANDO PROYECTO 2: SEMÁFORO ===");

// Variables del semáforo
let coloresSemaforo = ["rojo", "amarillo", "verde"];
let indiceColorActual = 0;
let intervaloSemaforo = null;
let estaActivo = false;

// Elementos del DOM
let luzRoja = document.querySelector("#luz-roja");
let luzAmarilla = document.querySelector("#luz-amarilla");
let luzVerde = document.querySelector("#luz-verde");
let btnIniciarSemaforo = document.querySelector("#btn-iniciar-semaforo");
let btnDetenerSemaforo = document.querySelector("#btn-detener-semaforo");
let btnSiguiente = document.querySelector("#btn-siguiente");
let estadoSemaforo = document.querySelector("#estado-semaforo");

// Función para actualizar luces del semáforo
function actualizarLuces(colorActivo) {
    // Apagar todas las luces
    if (luzRoja) luzRoja.classList.remove("activa");
    if (luzAmarilla) luzAmarilla.classList.remove("activa");
    if (luzVerde) luzVerde.classList.remove("activa");
    
    // Encender la luz activa
    switch (colorActivo) {
        case "rojo":
            if (luzRoja) luzRoja.classList.add("activa");
            break;
        case "amarillo":
            if (luzAmarilla) luzAmarilla.classList.add("activa");
            break;
        case "verde":
            if (luzVerde) luzVerde.classList.add("activa");
            break;
    }
    
    // Actualizar estado
    if (estadoSemaforo) {
        estadoSemaforo.textContent = `Estado: ${colorActivo.toUpperCase()}`;
        estadoSemaforo.style.color = colorActivo;
    }
}

// Función para cambiar al siguiente color
function siguienteColor() {
    indiceColorActual = (indiceColorActual + 1) % coloresSemaforo.length;
    let colorActual = coloresSemaforo[indiceColorActual];
    actualizarLuces(colorActual);
    
    // Mostrar mensaje según el color
    let mensaje = "";
    switch (colorActual) {
        case "rojo":
            mensaje = "¡ALTO! Detente completamente";
            break;
        case "amarillo":
            mensaje = "¡PRECAUCIÓN! Prepárate para detenerte";
            break;
        case "verde":
            mensaje = "¡ADELANTE! Puedes pasar";
            break;
    }
    mostrarMensaje(mensaje, "info");
}

// Función para iniciar el semáforo automático
function iniciarSemaforo() {
    if (!estaActivo) {
        estaActivo = true;
        mostrarMensaje("Semáforo iniciado", "success");
        
        // Cambiar cada 2 segundos
        intervaloSemaforo = setInterval(siguienteColor, 2000);
        
        // Deshabilitar botón de iniciar
        if (btnIniciarSemaforo) btnIniciarSemaforo.disabled = true;
        if (btnDetenerSemaforo) btnDetenerSemaforo.disabled = false;
    }
}

// Función para detener el semáforo
function detenerSemaforo() {
    if (estaActivo) {
        estaActivo = false;
        mostrarMensaje("Semáforo detenido", "warning");
        
        // Limpiar intervalo
        if (intervaloSemaforo) {
            clearInterval(intervaloSemaforo);
            intervaloSemaforo = null;
        }
        
        // Habilitar botón de iniciar
        if (btnIniciarSemaforo) btnIniciarSemaforo.disabled = false;
        if (btnDetenerSemaforo) btnDetenerSemaforo.disabled = true;
    }
}

// Agregar event listeners
if (btnIniciarSemaforo) btnIniciarSemaforo.addEventListener("click", iniciarSemaforo);
if (btnDetenerSemaforo) btnDetenerSemaforo.addEventListener("click", detenerSemaforo);
if (btnSiguiente) btnSiguiente.addEventListener("click", siguienteColor);

// Inicializar semáforo en rojo
actualizarLuces("rojo");

// ===============================================
// PROYECTO 3: CALCULADORA BÁSICA
// ===============================================
// Una calculadora que realiza operaciones básicas
// con validación y manejo de errores

console.log("=== INICIANDO PROYECTO 3: CALCULADORA ===");

// Variables de la calculadora
let operacionActual = "";
let numeroAnterior = null;
let nuevoNumero = true;

// Elementos del DOM
let displayCalculadora = document.querySelector("#display-calculadora");
let btnNumeros = document.querySelectorAll(".btn-numero");
let btnOperaciones = document.querySelectorAll(".btn-operacion");
let btnIgual = document.querySelector("#btn-igual");
let btnLimpiar = document.querySelector("#btn-limpiar");
let btnBorrar = document.querySelector("#btn-borrar");
let historialCalculadora = document.querySelector("#historial-calculadora");

let historial = [];

// Función para actualizar display
function actualizarDisplay(valor) {
    if (displayCalculadora) {
        displayCalculadora.textContent = valor;
    }
}

// Función para agregar número al display
function agregarNumero(numero) {
    if (nuevoNumero) {
        actualizarDisplay(numero);
        nuevoNumero = false;
    } else {
        let valorActual = displayCalculadora.textContent;
        if (valorActual === "0") {
            actualizarDisplay(numero);
        } else {
            actualizarDisplay(valorActual + numero);
        }
    }
}

// Función para agregar punto decimal
function agregarPunto() {
    let valorActual = displayCalculadora.textContent;
    if (!valorActual.includes(".")) {
        actualizarDisplay(valorActual + ".");
        nuevoNumero = false;
    }
}

// Función para seleccionar operación
function seleccionarOperacion(operacion) {
    let valorActual = parseFloat(displayCalculadora.textContent);
    
    if (numeroAnterior === null) {
        numeroAnterior = valorActual;
    } else if (operacionActual) {
        let resultado = calcular();
        actualizarDisplay(resultado);
        numeroAnterior = resultado;
    }
    
    operacionActual = operacion;
    nuevoNumero = true;
    
    // Mostrar operación seleccionada
    mostrarMensaje(`Operación: ${operacion}`, "info");
}

// Función para realizar cálculo
function calcular() {
    let valorActual = parseFloat(displayCalculadora.textContent);
    let resultado = 0;
    
    switch (operacionActual) {
        case "+":
            resultado = numeroAnterior + valorActual;
            break;
        case "-":
            resultado = numeroAnterior - valorActual;
            break;
        case "*":
            resultado = numeroAnterior * valorActual;
            break;
        case "/":
            if (valorActual === 0) {
                mostrarMensaje("Error: División por cero", "error");
                return numeroAnterior;
            }
            resultado = numeroAnterior / valorActual;
            break;
        default:
            return valorActual;
    }
    
    // Agregar al historial
    let operacionCompleta = `${numeroAnterior} ${operacionActual} ${valorActual} = ${resultado}`;
    historial.push(operacionCompleta);
    actualizarHistorial();
    
    return resultado;
}

// Función para mostrar resultado
function mostrarResultado() {
    if (operacionActual && numeroAnterior !== null) {
        let resultado = calcular();
        actualizarDisplay(resultado);
        operacionActual = "";
        numeroAnterior = null;
        nuevoNumero = true;
        mostrarMensaje(`Resultado: ${resultado}`, "success");
    }
}

// Función para limpiar calculadora
function limpiarCalculadora() {
    actualizarDisplay("0");
    operacionActual = "";
    numeroAnterior = null;
    nuevoNumero = true;
    mostrarMensaje("Calculadora limpiada", "warning");
}

// Función para borrar último dígito
function borrarUltimo() {
    let valorActual = displayCalculadora.textContent;
    if (valorActual.length > 1) {
        actualizarDisplay(valorActual.slice(0, -1));
    } else {
        actualizarDisplay("0");
        nuevoNumero = true;
    }
}

// Función para actualizar historial
function actualizarHistorial() {
    if (historialCalculadora) {
        historialCalculadora.innerHTML = "";
        historial.slice(-5).reverse().forEach(operacion => {
            let item = document.createElement("div");
            item.textContent = operacion;
            item.classList.add("item-historial");
            historialCalculadora.appendChild(item);
        });
    }
}

// Event listeners para números
btnNumeros.forEach(boton => {
    boton.addEventListener("click", function() {
        agregarNumero(this.textContent);
    });
});

// Event listener para punto decimal
let btnPunto = document.querySelector("#btn-punto");
if (btnPunto) {
    btnPunto.addEventListener("click", agregarPunto);
}

// Event listeners para operaciones
btnOperaciones.forEach(boton => {
    boton.addEventListener("click", function() {
        seleccionarOperacion(this.textContent);
    });
});

// Event listeners para botones de control
if (btnIgual) btnIgual.addEventListener("click", mostrarResultado);
if (btnLimpiar) btnLimpiar.addEventListener("click", limpiarCalculadora);
if (btnBorrar) btnBorrar.addEventListener("click", borrarUltimo);

// Soporte para teclado
document.addEventListener("keydown", function(evento) {
    if (evento.key >= "0" && evento.key <= "9") {
        agregarNumero(evento.key);
    } else if (evento.key === ".") {
        agregarPunto();
    } else if (evento.key === "+" || evento.key === "-" || evento.key === "*" || evento.key === "/") {
        seleccionarOperacion(evento.key);
    } else if (evento.key === "Enter" || evento.key === "=") {
        mostrarResultado();
    } else if (evento.key === "Escape" || evento.key === "c" || evento.key === "C") {
        limpiarCalculadora();
    } else if (evento.key === "Backspace") {
        borrarUltimo();
    }
});

// ===============================================
// FUNCIÓN AUXILIAR PARA MOSTRAR MENSAJES
// ===============================================

function mostrarMensaje(texto, tipo = "info") {
    // Crear elemento de mensaje
    let mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.classList.add("mensaje", `mensaje-${tipo}`);
    
    // Estilos según el tipo
    switch (tipo) {
        case "success":
            mensaje.style.backgroundColor = "#d4edda";
            mensaje.style.color = "#155724";
            break;
        case "error":
            mensaje.style.backgroundColor = "#f8d7da";
            mensaje.style.color = "#721c24";
            break;
        case "warning":
            mensaje.style.backgroundColor = "#fff3cd";
            mensaje.style.color = "#856404";
            break;
        case "info":
            mensaje.style.backgroundColor = "#d1ecf1";
            mensaje.style.color = "#0c5460";
            break;
    }
    
    // Estilos comunes
    mensaje.style.padding = "10px 15px";
    mensaje.style.margin = "5px 0";
    mensaje.style.borderRadius = "5px";
    mensaje.style.border = "1px solid";
    mensaje.style.position = "fixed";
    mensaje.style.top = "20px";
    mensaje.style.right = "20px";
    mensaje.style.zIndex = "1000";
    mensaje.style.maxWidth = "300px";
    mensaje.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    mensaje.style.transition = "opacity 0.3s";
    
    // Agregar al DOM
    document.body.appendChild(mensaje);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        mensaje.style.opacity = "0";
        setTimeout(() => {
            if (mensaje.parentNode) {
                mensaje.parentNode.removeChild(mensaje);
            }
        }, 300);
    }, 3000);
}

// ===============================================
// INICIALIZACIÓN DE TODOS LOS PROYECTOS
// ===============================================

// Mostrar mensaje de bienvenida
setTimeout(() => {
    mostrarMensaje("¡Mini proyectos listos para usar!", "success");
}, 1000);

// ===============================================
// EJERCICIOS ADICIONALES PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Agrega un botón al contador que permita establecer un valor personalizado
// TODO: let btnEstablecer = document.querySelector("#btn-establecer");
// TODO: let inputValor = document.querySelector("#input-valor");
// TODO: if (btnEstablecer && inputValor) {
// TODO:     btnEstablecer.addEventListener("click", function() {
// TODO:         let valor = parseInt(inputValor.value);
// TODO:         if (!isNaN(valor) && valor >= limiteInferior && valor <= limiteSuperior) {
// TODO:             contadorProyecto1 = valor;
// TODO:             actualizarDisplayContador();
// TODO:             mostrarMensaje(`Valor establecido: ${valor}`, "success");
// TODO:         } else {
// TODO:             mostrarMensaje("Valor inválido o fuera de rango", "error");
// TODO:         }
// TODO:     });
// TODO: }

// Ejercicio 2 → Agrega sonido al semáforo cuando cambia de color
// TODO: function reproducirSonido(color) {
// TODO:     // Aquí podrías usar el Web Audio API o HTML5 Audio
// TODO:     console.log(`Sonido para color ${color}`);
// TODO: }
// TODO: 
// TODO: // Modifica la función siguienteColor para incluir el sonido
// TODO: function siguienteColorConSonido() {
// TODO:     indiceColorActual = (indiceColorActual + 1) % coloresSemaforo.length;
// TODO:     let colorActual = coloresSemaforo[indiceColorActual];
// TODO:     actualizarLuces(colorActual);
// TODO:     reproducirSonido(colorActual);
// TODO: }

// Ejercicio 3 → Agrega funciones científicas a la calculadora (raíz cuadrada, potencia)
// TODO: function raizCuadrada() {
// TODO:     let valor = parseFloat(displayCalculadora.textContent);
// TODO:     if (valor >= 0) {
// TODO:         actualizarDisplay(Math.sqrt(valor));
// TODO:         nuevoNumero = true;
// TODO:     } else {
// TODO:         mostrarMensaje("Error: Raíz de número negativo", "error");
// TODO:     }
// TODO: }
// TODO: 
// TODO: function potencia() {
// TODO:     let valor = parseFloat(displayCalculadora.textContent);
// TODO:     actualizarDisplay(valor * valor);
// TODO:     nuevoNumero = true;
// TODO: }

// Ejercicio 4 → Crea un temporizador que pueda iniciar, pausar y resetear
// TODO: let segundos = 0;
// TODO: let intervaloTemporizador = null;
// TODO: let estaCorriendo = false;
// TODO: 
// TODO: function actualizarTemporizador() {
// TODO:     let horas = Math.floor(segundos / 3600);
// TODO:     let minutos = Math.floor((segundos % 3600) / 60);
// TODO:     let segs = segundos % 60;
// TODO:     
// TODO:     let display = document.querySelector("#display-temporizador");
// TODO:     if (display) {
// TODO:         display.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
// TODO:     }
// TODO: }

// Ejercicio 5 → Agrega animaciones cuando los contadores cambian
// TODO: function animarCambio(elemento) {
// TODO:     elemento.style.transform = "scale(1.2)";
// TODO:     elemento.style.transition = "transform 0.2s";
// TODO:     
// TODO:     setTimeout(() => {
// TODO:         elemento.style.transform = "scale(1)";
// TODO:     }, 200);
// TODO: }

// Ejercicio 6 → Crea un juego de adivinar el número
// TODO: let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// TODO: let intentos = 0;
// TODO: 
// TODO: function adivinarNumero(numero) {
// TODO:     intentos++;
// TODO:     
// TODO:     if (numero === numeroSecreto) {
// TODO:         mostrarMensaje(`¡Correcto! Adivinaste en ${intentos} intentos`, "success");
// TODO:     } else if (numero < numeroSecreto) {
// TODO:         mostrarMensaje("El número es mayor", "info");
// TODO:     } else {
// TODO:         mostrarMensaje("El número es menor", "info");
// TODO:     }
// TODO: }

// Ejercicio 7 → Agrega un modo oscuro/claro para todos los proyectos
// TODO: function cambiarTema() {
// TODO:     document.body.classList.toggle("tema-oscuro");
// TODO:     let esOscuro = document.body.classList.contains("tema-oscuro");
// TODO:     mostrarMensaje(`Tema ${esOscuro ? 'oscuro' : 'claro'} activado`, "info");
// TODO: }

// Ejercicio 8 → Crea una lista de tareas simple que se pueda guardar
// TODO: let tareas = [];
// TODO: 
// TODO: function agregarTarea(texto) {
// TODO:     tareas.push({ texto: texto, completada: false });
// TODO:     actualizarListaTareas();
// TODO: }
// TODO: 
// TODO: function actualizarListaTareas() {
// TODO:     let lista = document.querySelector("#lista-tareas");
// TODO:     if (lista) {
// TODO:         lista.innerHTML = "";
// TODO:         tareas.forEach((tarea, indice) => {
// TODO:             let item = document.createElement("li");
// TODO:             item.textContent = tarea.texto;
// TODO:             if (tarea.completada) {
// TODO:                 item.style.textDecoration = "line-through";
// TODO:             }
// TODO:             lista.appendChild(item);
// TODO:         });
// TODO:     }
// TODO: }

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy creamos tres mini proyectos completos:
// • Contador interactivo con límites y teclado
// • Semáforo funcional con control manual y automático
// • Calculadora básica con historial y validación
// 
// Aplicamos todos los conceptos aprendidos:
// • Variables y constantes
// • Funciones y parámetros
// • Eventos y manipulación del DOM
// • Condicionales y bucles
// • Arrays y objetos
// • Buenas prácticas de programación

// Pregunta para la clase: ¿Qué características agregarían a estos proyectos?
// ¿Cómo podrían combinar estos proyectos en uno más grande?