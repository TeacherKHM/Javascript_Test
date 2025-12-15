// ===============================================
// SESIÓN 11 - localStorage y Fetch API
// Duración: 40 minutos
// Objetivos de hoy:
// • Entender qué es localStorage y cómo guardar datos en el navegador
// • Aprender a guardar, leer y eliminar datos del localStorage
// • Dominar fetch API para hacer peticiones a servidores
// • Trabajar con JSON para intercambiar datos
// ===============================================

// ===============================================
// 1. ¿QUÉ ES LOCALSTORAGE?
// ===============================================
// localStorage es como una pequeña base de datos en el navegador del usuario
// Los datos persisten incluso si el usuario cierra la pestaña o el navegador
// Es útil para guardar preferencias, configuraciones, datos de usuario, etc.

/*
Características de localStorage:
• Almacena hasta 5-10 MB de datos (depende del navegador)
• Los datos persisten entre sesiones
• Solo almacena strings (no objetos, arrays, números directamente)
• Es específico de cada dominio (origen)
• Es síncrono (bloquea el hilo principal)
*/

// ===============================================
// 2. GUARDAR DATOS EN LOCALSTORAGE
// ===============================================

console.log("=== GUARDANDO DATOS EN LOCALSTORAGE ===");

// setItem() - guardar un dato
localStorage.setItem("nombreUsuario", "Ana García");
localStorage.setItem("edadUsuario", "25");
localStorage.setItem("ciudadUsuario", "Madrid");

// Guardar datos complejos (convertir a JSON)
let usuario = {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    preferencias: {
        tema: "oscuro",
        idioma: "es",
        notificaciones: true
    }
};

// Convertir objeto a string JSON antes de guardar
localStorage.setItem("usuarioCompleto", JSON.stringify(usuario));

// Guardar arrays
let tareas = [
    { id: 1, texto: "Aprender JavaScript", completada: true },
    { id: 2, texto: "Practicar localStorage", completada: false },
    { id: 3, texto: "Hacer una aplicación", completada: false }
];

localStorage.setItem("tareas", JSON.stringify(tareas));

console.log("Datos guardados en localStorage");

// ===============================================
// 3. LEER DATOS DE LOCALSTORAGE
// ===============================================

console.log("\n=== LEYENDO DATOS DE LOCALSTORAGE ===");

// getItem() - leer un dato específico
let nombreGuardado = localStorage.getItem("nombreUsuario");
let edadGuardada = localStorage.getItem("edadUsuario");
let ciudadGuardada = localStorage.getItem("ciudadUsuario");

console.log("Nombre:", nombreGuardado);
console.log("Edad:", edadGuardada);
console.log("Ciudad:", ciudadGuardada);

// Leer datos complejos (convertir de JSON)
let usuarioGuardado = localStorage.getItem("usuarioCompleto");
if (usuarioGuardado) {
    let usuarioParseado = JSON.parse(usuarioGuardado);
    console.log("Usuario completo:", usuarioParseado);
    console.log("Email del usuario:", usuarioParseado.email);
    console.log("Tema preferido:", usuarioParseado.preferencias.tema);
}

// Leer array de tareas
let tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
    let tareasParseadas = JSON.parse(tareasGuardadas);
    console.log("Tareas:", tareasParseadas);
    console.log("Cantidad de tareas:", tareasParseadas.length);
}

// Verificar si un dato existe
let datoInexistente = localStorage.getItem("datoQueNoExiste");
console.log("Dato inexistente:", datoInexistente); // null

// Forma segura de leer datos
function leerDatoLocalStorage(clave) {
    let dato = localStorage.getItem(clave);
    if (dato) {
        try {
            return JSON.parse(dato);
        } catch (error) {
            return dato; // Si no es JSON, devolver como string
        }
    }
    return null;
}

let usuarioSeguro = leerDatoLocalStorage("usuarioCompleto");
console.log("Usuario leído de forma segura:", usuarioSeguro);

// ===============================================
// 4. ELIMINAR DATOS DE LOCALSTORAGE
// ===============================================

console.log("\n=== ELIMINANDO DATOS DE LOCALSTORAGE ===");

// removeItem() - eliminar un dato específico
localStorage.removeItem("ciudadUsuario");
console.log("Ciudad eliminada");

// clear() - eliminar TODOS los datos del dominio actual
// ¡CUIDADO! Esto elimina todo el localStorage del sitio
// localStorage.clear();
// console.log("Todo el localStorage ha sido limpiado");

// Verificar qué datos quedan
console.log("Claves actuales en localStorage:");
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(`${clave}: ${valor}`);
}

// ===============================================
// 5. INTRODUCCIÓN A FETCH API
// ===============================================
// Fetch es la forma moderna de hacer peticiones HTTP en JavaScript
// Nos permite comunicarnos con servidores y APIs

console.log("\n=== INTRODUCCIÓN A FETCH API ===");

// Petición GET básica
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        
        // Convertir la respuesta a JSON
        return response.json();
    })
    .then(data => {
        console.log("Datos recibidos:", data);
        console.log("Nombre del usuario:", data.name);
        console.log("Email:", data.email);
    })
    .catch(error => {
        console.error("Error en la petición:", error);
    });

// ===============================================
// 6. TRABAJANDO CON JSON
// ===============================================
// JSON (JavaScript Object Notation) es el formato estándar para intercambiar datos

console.log("\n=== TRABAJANDO CON JSON ===");

// Convertir objeto a JSON (stringify)
let personaJSON = {
    nombre: "María López",
    edad: 28,
    habilidades: ["JavaScript", "HTML", "CSS"],
    activa: true
};

let personaString = JSON.stringify(personaJSON);
console.log("Objeto convertido a string JSON:", personaString);
console.log("Tipo de dato:", typeof personaString);

// Convertir JSON a objeto (parse)
let personaParseada = JSON.parse(personaString);
console.log("JSON convertido a objeto:", personaParseada);
console.log("Tipo de dato:", typeof personaParseada);

// JSON con formato legible (pretty print)
let personaStringBonita = JSON.stringify(personaJSON, null, 2);
console.log("JSON con formato bonito:");
console.log(personaStringBonita);

// ===============================================
// 7. PETICIONES POST CON FETCH
// ===============================================
// POST se usa para enviar datos al servidor (crear nuevos recursos)

console.log("\n=== PETICIONES POST ===");

let nuevoUsuario = {
    name: "Carlos Rodríguez",
    username: "carlosr",
    email: "carlos@email.com",
    address: {
        street: "Calle Principal",
        city: "Barcelona"
    }
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario)
})
.then(response => response.json())
.then(data => {
    console.log("Usuario creado:", data);
    console.log("ID asignado:", data.id);
})
.catch(error => {
    console.error("Error al crear usuario:", error);
});

// ===============================================
// 8. PETICIONES PUT Y DELETE
// ===============================================

// PUT - actualizar un recurso existente
console.log("\n=== PETICIONES PUT ===");

let usuarioActualizado = {
    id: 1,
    name: "Ana García Actualizada",
    email: "ana.nuevo@email.com"
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(usuarioActualizado)
})
.then(response => response.json())
.then(data => {
    console.log("Usuario actualizado:", data);
})
.catch(error => {
    console.error("Error al actualizar usuario:", error);
});

// DELETE - eliminar un recurso
console.log("\n=== PETICIONES DELETE ===");

fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "DELETE"
})
.then(response => {
    console.log("Response DELETE:", response);
    if (response.ok) {
        console.log("Usuario eliminado exitosamente");
    }
})
.catch(error => {
    console.error("Error al eliminar usuario:", error);
});

// ===============================================
// 9. MANEJO DE ERRORES Y ESTADOS
// ===============================================

console.log("\n=== MANEJO DE ERRORES Y ESTADOS ===");

// Función mejorada para manejar peticiones
async function hacerPeticion(url, opciones = {}) {
    try {
        console.log(`Haciendo petición a: ${url}`);
        
        let response = await fetch(url, opciones);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        
        let data = await response.json();
        console.log("Petición exitosa:", data);
        return data;
        
    } catch (error) {
        console.error("Error en la petición:", error);
        
        // Guardar error en localStorage para análisis
        let errores = JSON.parse(localStorage.getItem("errores") || "[]");
        errores.push({
            timestamp: new Date().toISOString(),
            url: url,
            error: error.message
        });
        localStorage.setItem("errores", JSON.stringify(erroros));
        
        throw error;
    }
}

// Usar la función mejorada
hacerPeticion("https://jsonplaceholder.typicode.com/users")
    .then(usuarios => {
        console.log("Usuarios obtenidos:", usuarios.length);
        
        // Guardar usuarios en localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        console.log("Usuarios guardados en localStorage");
    })
    .catch(error => {
        console.error("No se pudieron obtener los usuarios");
    });

// ===============================================
// 10. EJEMPLO PRÁCTICO: GESTOR DE TAREAS CON PERSISTENCIA
// ===============================================

console.log("\n=== GESTOR DE TAREAS CON LOCALSTORAGE ===");

class GestorTareas {
    constructor() {
        this.tareas = this.cargarTareas();
        this.siguienteId = this.obtenerSiguienteId();
    }
    
    // Cargar tareas desde localStorage
    cargarTareas() {
        let tareasGuardadas = localStorage.getItem("tareasApp");
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }
    
    // Guardar tareas en localStorage
    guardarTareas() {
        localStorage.setItem("tareasApp", JSON.stringify(this.tareas));
        console.log("Tareas guardadas en localStorage");
    }
    
    // Obtener siguiente ID
    obtenerSiguienteId() {
        if (this.tareas.length === 0) return 1;
        return Math.max(...this.tareas.map(t => t.id)) + 1;
    }
    
    // Agregar nueva tarea
    agregarTarea(texto) {
        let nuevaTarea = {
            id: this.siguienteId++,
            texto: texto,
            completada: false,
            fechaCreacion: new Date().toISOString(),
            fechaCompletacion: null
        };
        
        this.tareas.push(nuevaTarea);
        this.guardarTareas();
        console.log("Tarea agregada:", nuevaTarea);
        return nuevaTarea;
    }
    
    // Marcar tarea como completada
    completarTarea(id) {
        let tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
            tarea.fechaCompletacion = new Date().toISOString();
            this.guardarTareas();
            console.log("Tarea completada:", tarea);
            return true;
        }
        return false;
    }
    
    // Eliminar tarea
    eliminarTarea(id) {
        let indice = this.tareas.findIndex(t => t.id === id);
        if (indice !== -1) {
            let tareaEliminada = this.tareas.splice(indice, 1)[0];
            this.guardarTareas();
            console.log("Tarea eliminada:", tareaEliminada);
            return tareaEliminada;
        }
        return null;
    }
    
    // Obtener estadísticas
    obtenerEstadisticas() {
        let total = this.tareas.length;
        let completadas = this.tareas.filter(t => t.completada).length;
        let pendientes = total - completadas;
        
        return {
            total,
            completadas,
            pendientes,
            porcentajeCompletado: total > 0 ? Math.round((completadas / total) * 100) : 0
        };
    }
    
    // Sincronizar con servidor (simulado)
    async sincronizarConServidor() {
        try {
            console.log("Sincronizando tareas con servidor...");
            
            // Simular petición POST para sincronizar
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tareas: this.tareas,
                    timestamp: new Date().toISOString()
                })
            });
            
            if (response.ok) {
                let data = await response.json();
                console.log("Tareas sincronizadas:", data);
                
                // Guardar timestamp de última sincronización
                localStorage.setItem("ultimaSincronizacion", new Date().toISOString());
                return true;
            }
            
        } catch (error) {
            console.error("Error al sincronizar:", error);
            return false;
        }
    }
}

// Crear instancia del gestor
let gestor = new GestorTareas();

// Ejemplos de uso
gestor.agregarTarea("Aprender localStorage");
gestor.agregarTarea("Practicar fetch API");
gestor.agregarTarea("Crear aplicación completa");

let stats = gestor.obtenerEstadisticas();
console.log("Estadísticas:", stats);

// ===============================================
// 11. BUENAS PRÁCTICAS
// ===============================================

console.log("\n=== BUENAS PRÁCTICAS ===");

// ✅ Buenas prácticas con localStorage
// 1. Siempre verificar si hay datos antes de usarlos
function obtenerUsuario() {
    let usuario = localStorage.getItem("usuario");
    return usuario ? JSON.parse(usuario) : null;
}

// 2. Usar try-catch al parsear JSON
function obtenerDatosSeguros(clave) {
    try {
        let datos = localStorage.getItem(clave);
        return datos ? JSON.parse(datos) : null;
    } catch (error) {
        console.error("Error al parsear datos:", error);
        return null;
    }
}

// 3. Limpiar datos antiguos periódicamente
function limpiarDatosAntiguos() {
    let timestamp = localStorage.getItem("ultimaSincronizacion");
    if (timestamp) {
        let fecha = new Date(timestamp);
        let ahora = new Date();
        let diasPasados = (ahora - fecha) / (1000 * 60 * 60 * 24);
        
        if (diasPasados > 30) {
            console.log("Limpiando datos antiguos...");
            // localStorage.removeItem("datosTemporales");
        }
    }
}

// ✅ Buenas prácticas con fetch
// 1. Siempre manejar errores
async function obtenerDatosSeguro(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// 2. Usar timeouts para evitar peticiones infinitas
function fetchConTimeout(url, opciones = {}, timeout = 5000) {
    return Promise.race([
        fetch(url, opciones),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

// 3. Cachear respuestas para mejorar rendimiento
let cache = new Map();

async function obtenerConCache(url) {
    if (cache.has(url)) {
        console.log("Datos obtenidos del cache");
        return cache.get(url);
    }
    
    try {
        let datos = await obtenerDatosSeguro(url);
        cache.set(url, datos);
        return datos;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        throw error;
    }
}

// ===============================================
// EJERCICIOS PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Guarda las preferencias de un usuario en localStorage
// TODO: let preferencias = {
// TODO:     tema: "oscuro",
// TODO:     idioma: "es",
// TODO:     fuente: "grande"
// TODO: };
// TODO: localStorage.setItem("preferencias", JSON.stringify(preferencias));

// Ejercicio 2 → Lee y muestra las preferencias guardadas
// TODO: let prefsGuardadas = localStorage.getItem("preferencias");
// TODO: if (prefsGuardadas) {
// TODO:     let prefs = JSON.parse(prefsGuardadas);
// TODO:     console.log("Tema:", prefs.tema);
// TODO:     console.log("Idioma:", prefs.idioma);
// TODO: }

// Ejercicio 3 → Crea un contador de visitas que se guarde en localStorage
// TODO: let visitas = parseInt(localStorage.getItem("visitas") || "0");
// TODO: visitas++;
// TODO: localStorage.setItem("visitas", visitas.toString());
// TODO: console.log("Visitas:", visitas);

// Ejercicio 4 → Haz una petición fetch a una API de usuarios
// TODO: fetch("https://jsonplaceholder.typicode.com/users")
// TODO:     .then(response => response.json())
// TODO:     .then(usuarios => {
// TODO:         console.log("Primer usuario:", usuarios[0]);
// TODO:         console.log("Total usuarios:", usuarios.length);
// TODO:     });

// Ejercicio 5 → Crea una función para guardar y leer notas
// TODO: function guardarNota(nota) {
// TODO:     let notas = JSON.parse(localStorage.getItem("notas") || "[]");
// TODO:     notas.push({
// TODO:         id: Date.now(),
// TODO:         texto: nota,
// TODO:         fecha: new Date().toISOString()
// TODO:     });
// TODO:     localStorage.setItem("notas", JSON.stringify(notas));
// TODO: }
// TODO: 
// TODO: function leerNotas() {
// TODO:     return JSON.parse(localStorage.getItem("notas") || "[]");
// TODO: }

// Ejercicio 6 → Simula el envío de un formulario con fetch
// TODO: let formulario = { nombre: "Juan", email: "juan@email.com" };
// TODO: fetch("https://jsonplaceholder.typicode.com/users", {
// TODO:     method: "POST",
// TODO:     headers: { "Content-Type": "application/json" },
// TODO:     body: JSON.stringify(formulario)
// TODO: })
// TODO: .then(response => response.json())
// TODO: .then(data => console.log("Respuesta:", data));

// Ejercicio 7 → Crea un sistema de caché simple
// TODO: let cacheSimple = {};
// TODO: 
// TODO: function guardarEnCache(clave, datos) {
// TODO:     cacheSimple[clave] = {
// TODO:         datos: datos,
// TODO:         timestamp: Date.now()
// TODO:     };
// TODO: }
// TODO: 
// TODO: function obtenerDeCache(clave, tiempoMaximo = 300000) { // 5 minutos
// TODO:     if (cacheSimple[clave]) {
// TODO:         let edad = Date.now() - cacheSimple[clave].timestamp;
// TODO:         if (edad < tiempoMaximo) {
// TODO:             return cacheSimple[clave].datos;
// TODO:         }
// TODO:     }
// TODO:     return null;
// TODO: }

// Ejercicio 8 → Maneja errores de conexión
// TODO: async function verificarConexion() {
// TODO:     try {
// TODO:         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// TODO:         if (response.ok) {
// TODO:             console.log("Conexión exitosa");
// TODO:             return true;
// TODO:         }
// TODO:     } catch (error) {
// TODO:         console.error("Sin conexión:", error);
// TODO:         localStorage.setItem("modoOffline", "true");
// TODO:         return false;
// TODO:     }
// TODO: }

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy aprendimos:
// • Qué es localStorage y cómo persistir datos en el navegador
// • Guardar, leer y eliminar datos con setItem, getItem, removeItem
// • Convertir objetos y arrays a JSON con stringify y parse
// • Usar fetch API para hacer peticiones HTTP
// • Trabajar con diferentes métodos: GET, POST, PUT, DELETE
// • Manejar errores y estados en peticiones asíncronas
// • Crear aplicaciones con persistencia de datos
// • Buenas prácticas de seguridad y rendimiento

// Pregunta para la clase: ¿Cuándo usarías localStorage en lugar de una base de datos?
// ¿Por qué es importante manejar errores en las peticiones fetch?