// ===============================================
// SESIÓN 12 - Proyecto Final: To-Do List Completo
// Duración: 40 minutos
// Objetivos de hoy:
// • Aplicar todos los conceptos aprendidos en un proyecto real
// • Crear una aplicación de To-Do List completa
// • Implementar CRUD (Crear, Leer, Actualizar, Borrar)
// • Guardar datos en localStorage para persistencia
// ===============================================

// ===============================================
// PROYECTO FINAL: TO-DO LIST COMPLETO
// ===============================================
// Vamos a crear una aplicación de gestión de tareas completa con:
// • Agregar nuevas tareas
// • Marcar tareas como completadas
// • Editar tareas existentes
// • Eliminar tareas
// • Filtrar tareas (todas, activas, completadas)
// • Guardar en localStorage
// • Estadísticas y contador
// • Animaciones y buena UX

console.log("=== INICIANDO PROYECTO FINAL: TO-DO LIST ===");

// ===============================================
// 1. ESTRUCTURA DE DATOS Y ESTADO
// ===============================================

class TodoApp {
    constructor() {
        // Estado principal de la aplicación
        this.tareas = this.cargarTareas();
        this.filtroActual = "todas"; // "todas", "activas", "completadas"
        this.tareaEditandoId = null;
        
        // Elementos del DOM
        this.inicializarElementos();
        
        // Event listeners
        this.configurarEventListeners();
        
        // Render inicial
        this.render();
        this.actualizarEstadisticas();
        
        console.log("To-Do App inicializada");
    }
    
    // ===============================================
    // 2. GESTIÓN DE DATOS (LOCALSTORAGE)
    // ===============================================
    
    cargarTareas() {
        try {
            let tareasGuardadas = localStorage.getItem("todoApp_tareas");
            return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
        } catch (error) {
            console.error("Error al cargar tareas:", error);
            return [];
        }
    }
    
    guardarTareas() {
        try {
            localStorage.setItem("todoApp_tareas", JSON.stringify(this.tareas));
            console.log("Tareas guardadas en localStorage");
        } catch (error) {
            console.error("Error al guardar tareas:", error);
            this.mostrarNotificacion("Error al guardar tareas", "error");
        }
    }
    
    // ===============================================
    // 3. INICIALIZACIÓN DE ELEMENTOS DEL DOM
    // ===============================================
    
    inicializarElementos() {
        // Formulario y input
        this.formTarea = document.querySelector("#form-tarea");
        this.inputTarea = document.querySelector("#input-tarea");
        
        // Lista de tareas
        this.listaTareas = document.querySelector("#lista-tareas");
        
        // Filtros
        this.btnFiltroTodas = document.querySelector("#filtro-todas");
        this.btnFiltroActivas = document.querySelector("#filtro-activas");
        this.btnFiltroCompletadas = document.querySelector("#filtro-completadas");
        
        // Acciones generales
        this.btnLimpiarCompletadas = document.querySelector("#limpiar-completadas");
        this.btnMarcarTodas = document.querySelector("#marcar-todas");
        
        // Estadísticas
        this.contadorTotal = document.querySelector("#contador-total");
        this.contadorActivas = document.querySelector("#contador-activas");
        this.contadorCompletadas = document.querySelector("#contador-completadas");
        
        // Contenedor de notificaciones
        this.contenedorNotificaciones = document.querySelector("#notificaciones");
        
        console.log("Elementos del DOM inicializados");
    }
    
    // ===============================================
    // 4. CONFIGURACIÓN DE EVENT LISTENERS
    // ===============================================
    
    configurarEventListeners() {
        // Formulario para agregar tareas
        if (this.formTarea) {
            this.formTarea.addEventListener("submit", (e) => {
                e.preventDefault();
                this.agregarTarea();
            });
        }
        
        // Filtros
        if (this.btnFiltroTodas) {
            this.btnFiltroTodas.addEventListener("click", () => {
                this.cambiarFiltro("todas");
            });
        }
        
        if (this.btnFiltroActivas) {
            this.btnFiltroActivas.addEventListener("click", () => {
                this.cambiarFiltro("activas");
            });
        }
        
        if (this.btnFiltroCompletadas) {
            this.btnFiltroCompletadas.addEventListener("click", () => {
                this.cambiarFiltro("completadas");
            });
        }
        
        // Acciones generales
        if (this.btnLimpiarCompletadas) {
            this.btnLimpiarCompletadas.addEventListener("click", () => {
                this.limpiarTareasCompletadas();
            });
        }
        
        if (this.btnMarcarTodas) {
            this.btnMarcarTodas.addEventListener("click", () => {
                this.marcarTodasComoCompletadas();
            });
        }
        
        // Atajos de teclado
        document.addEventListener("keydown", (e) => {
            // Ctrl/Cmd + Enter para agregar tarea rápida
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                this.inputTarea?.focus();
            }
            
            // Escape para cancelar edición
            if (e.key === "Escape") {
                this.cancelarEdicion();
            }
        });
        
        console.log("Event listeners configurados");
    }
    
    // ===============================================
    // 5. CRUD: CREAR TAREAS
    // ===============================================
    
    agregarTarea() {
        let texto = this.inputTarea?.value.trim();
        
        if (!texto) {
            this.mostrarNotificacion("Por favor escribe una tarea", "warning");
            return;
        }
        
        if (texto.length < 3) {
            this.mostrarNotificacion("La tarea debe tener al menos 3 caracteres", "warning");
            return;
        }
        
        let nuevaTarea = {
            id: Date.now(),
            texto: texto,
            completada: false,
            fechaCreacion: new Date().toISOString(),
            fechaCompletacion: null,
            prioridad: "normal" // "baja", "normal", "alta"
        };
        
        this.tareas.unshift(nuevaTarea); // Agregar al principio
        this.guardarTareas();
        this.render();
        this.actualizarEstadisticas();
        
        // Limpiar input
        if (this.inputTarea) {
            this.inputTarea.value = "";
            this.inputTarea.focus();
        }
        
        this.mostrarNotificación("Tarea agregada exitosamente", "success");
        console.log("Tarea agregada:", nuevaTarea);
    }
    
    // ===============================================
    // 6. CRUD: LEER Y FILTRAR TAREAS
    // ===============================================
    
    obtenerTareasFiltradas() {
        switch (this.filtroActual) {
            case "activas":
                return this.tareas.filter(tarea => !tarea.completada);
            case "completadas":
                return this.tareas.filter(tarea => tarea.completada);
            default:
                return this.tareas;
        }
    }
    
    // ===============================================
    // 7. CRUD: ACTUALIZAR TAREAS
    // ===============================================
    
    toggleTarea(id) {
        let tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada;
            tarea.fechaCompletacion = tarea.completada ? new Date().toISOString() : null;
            this.guardarTareas();
            this.render();
            this.actualizarEstadisticas();
            
            let mensaje = tarea.completada ? "Tarea completada" : "Tarea reactivada";
            this.mostrarNotificación(mensaje, "info");
        }
    }
    
    editarTarea(id) {
        let tarea = this.tareas.find(t => t.id === id);
        if (!tarea) return;
        
        // Si ya estamos editando otra tarea, cancelar primero
        if (this.tareaEditandoId && this.tareaEditandoId !== id) {
            this.cancelarEdicion();
        }
        
        this.tareaEditandoId = id;
        this.render(); // Re-render para mostrar el input de edición
        
        // Enfocar el input de edición
        setTimeout(() => {
            let inputEdicion = document.querySelector(`#editar-${id}`);
            if (inputEdicion) {
                inputEdicion.focus();
                inputEdicion.select();
            }
        }, 0);
    }
    
    guardarEdicion(id, nuevoTexto) {
        let texto = nuevoTexto.trim();
        
        if (!texto) {
            this.mostrarNotificación("La tarea no puede estar vacía", "error");
            return;
        }
        
        let tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.texto = texto;
            this.tareaEditandoId = null;
            this.guardarTareas();
            this.render();
            this.mostrarNotificación("Tarea actualizada", "success");
        }
    }
    
    cancelarEdicion() {
        this.tareaEditandoId = null;
        this.render();
    }
    
    // ===============================================
    // 8. CRUD: ELIMINAR TAREAS
    // ===============================================
    
    eliminarTarea(id) {
        let indice = this.tareas.findIndex(t => t.id === id);
        if (indice !== -1) {
            let tareaEliminada = this.tareas.splice(indice, 1)[0];
            this.guardarTareas();
            this.render();
            this.actualizarEstadisticas();
            this.mostrarNotificación("Tarea eliminada", "warning");
            console.log("Tarea eliminada:", tareaEliminada);
        }
    }
    
    limpiarTareasCompletadas() {
        let tareasCompletadas = this.tareas.filter(t => t.completada);
        
        if (tareasCompletadas.length === 0) {
            this.mostrarNotificación("No hay tareas completadas para limpiar", "info");
            return;
        }
        
        if (confirm(`¿Estás seguro de eliminar ${tareasCompletadas.length} tarea(s) completada(s)?`)) {
            this.tareas = this.tareas.filter(t => !t.completada);
            this.guardarTareas();
            this.render();
            this.actualizarEstadisticas();
            this.mostrarNotificación(`${tareasCompletadas.length} tarea(s) eliminada(s)`, "success");
        }
    }
    
    // ===============================================
    // 9. FUNCIONES ADICIONALES
    // ===============================================
    
    cambiarFiltro(filtro) {
        this.filtroActual = filtro;
        this.actualizarBotonesFiltro();
        this.render();
    }
    
    actualizarBotonesFiltro() {
        // Remover clase activa de todos los botones
        [this.btnFiltroTodas, this.btnFiltroActivas, this.btnFiltroCompletadas].forEach(btn => {
            btn?.classList.remove("activo");
        });
        
        // Agregar clase activa al botón actual
        switch (this.filtroActual) {
            case "activas":
                this.btnFiltroActivas?.classList.add("activo");
                break;
            case "completadas":
                this.btnFiltroCompletadas?.classList.add("activo");
                break;
            default:
                this.btnFiltroTodas?.classList.add("activo");
        }
    }
    
    marcarTodasComoCompletadas() {
        let tareasActivas = this.tareas.filter(t => !t.completada);
        
        if (tareasActivas.length === 0) {
            // Si todas están completadas, desmarcar todas
            this.tareas.forEach(tarea => {
                tarea.completada = false;
                tarea.fechaCompletacion = null;
            });
            this.mostrarNotificación("Todas las tareas reactivadas", "info");
        } else {
            // Marcar todas como completadas
            this.tareas.forEach(tarea => {
                if (!tarea.completada) {
                    tarea.completada = true;
                    tarea.fechaCompletacion = new Date().toISOString();
                }
            });
            this.mostrarNotificación(`${tareasActivas.length} tarea(s) completada(s)`, "success");
        }
        
        this.guardarTareas();
        this.render();
        this.actualizarEstadisticas();
    }
    
    // ===============================================
    // 10. RENDERIZADO DE LA INTERFAZ
    // ===============================================
    
    render() {
        if (!this.listaTareas) return;
        
        let tareasFiltradas = this.obtenerTareasFiltradas();
        
        // Limpiar lista
        this.listaTareas.innerHTML = "";
        
        if (tareasFiltradas.length === 0) {
            this.renderMensajeVacio();
            return;
        }
        
        // Renderizar cada tarea
        tareasFiltradas.forEach(tarea => {
            this.renderTarea(tarea);
        });
    }
    
    renderTarea(tarea) {
        let li = document.createElement("li");
        li.className = `tarea-item ${tarea.completada ? "completada" : ""}`;
        li.dataset.id = tarea.id;
        
        if (this.tareaEditandoId === tarea.id) {
            // Modo edición
            li.innerHTML = `
                <div class="tarea-edicion">
                    <input type="text" 
                           id="editar-${tarea.id}" 
                           value="${this.escapeHtml(tarea.texto)}"
                           class="input-edicion">
                    <div class="botones-edicion">
                        <button class="btn-guardar" onclick="app.guardarEdicion(${tarea.id}, this.parentElement.previousElementSibling.value)">
                            ✓
                        </button>
                        <button class="btn-cancelar" onclick="app.cancelarEdicion()">
                            ✕
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Modo normal
            li.innerHTML = `
                <div class="tarea-contenido">
                    <input type="checkbox" 
                           class="checkbox-tarea" 
                           ${tarea.completada ? "checked" : ""}
                           onchange="app.toggleTarea(${tarea.id})">
                    <span class="tarea-texto ${tarea.completada ? "tachado" : ""}">
                        ${this.escapeHtml(tarea.texto)}
                    </span>
                    <span class="tarea-fecha">
                        ${this.formatearFecha(tarea.fechaCreacion)}
                    </span>
                </div>
                <div class="tarea-acciones">
                    <button class="btn-editar" onclick="app.editarTarea(${tarea.id})" title="Editar">
                        ✏️
                    </button>
                    <button class="btn-eliminar" onclick="app.eliminarTarea(${tarea.id})" title="Eliminar">
                        🗑️
                    </button>
                </div>
            `;
        }
        
        this.listaTareas.appendChild(li);
    }
    
    renderMensajeVacio() {
        let mensaje = "";
        switch (this.filtroActual) {
            case "activas":
                mensaje = "🎉 ¡No hay tareas activas! Todas completadas.";
                break;
            case "completadas":
                mensaje = "📝 No hay tareas completadas aún.";
                break;
            default:
                mensaje = "📋 No hay tareas. ¡Agrega una para empezar!";
        }
        
        let li = document.createElement("li");
        li.className = "mensaje-vacio";
        li.innerHTML = `<p>${mensaje}</p>`;
        this.listaTareas.appendChild(li);
    }
    
    // ===============================================
    // 11. ESTADÍSTICAS
    // ===============================================
    
    actualizarEstadisticas() {
        let total = this.tareas.length;
        let completadas = this.tareas.filter(t => t.completada).length;
        let activas = total - completadas;
        
        if (this.contadorTotal) {
            this.contadorTotal.textContent = total;
        }
        
        if (this.contadorActivas) {
            this.contadorActivas.textContent = activas;
        }
        
        if (this.contadorCompletadas) {
            this.contadorCompletadas.textContent = completadas;
        }
        
        // Actualizar texto del botón de marcar todas
        if (this.btnMarcarTodas) {
            if (activas === 0) {
                this.btnMarcarTodas.textContent = "Desmarcar todas";
            } else {
                this.btnMarcarTodas.textContent = `Marcar todas (${activas})`;
            }
        }
    }
    
    // ===============================================
    // 12. UTILIDADES Y FUNCIONES AUXILIARES
    // ===============================================
    
    escapeHtml(texto) {
        let div = document.createElement("div");
        div.textContent = texto;
        return div.innerHTML;
    }
    
    formatearFecha(fechaISO) {
        let fecha = new Date(fechaISO);
        let hoy = new Date();
        let diasDiferencia = Math.floor((hoy - fecha) / (1000 * 60 * 60 * 24));
        
        if (diasDiferencia === 0) {
            return "Hoy";
        } else if (diasDiferencia === 1) {
            return "Ayer";
        } else if (diasDiferencia < 7) {
            return `Hace ${diasDiferencia} días`;
        } else {
            return fecha.toLocaleDateString("es-ES");
        }
    }
    
    mostrarNotificación(mensaje, tipo = "info") {
        if (!this.contenedorNotificaciones) return;
        
        let notificacion = document.createElement("div");
        notificacion.className = `notificacion notificacion-${tipo}`;
        notificacion.textContent = mensaje;
        
        // Estilos inline para simplicidad
        Object.assign(notificacion.style, {
            padding: "12px 20px",
            margin: "5px 0",
            borderRadius: "8px",
            backgroundColor: this.getColorNotificacion(tipo),
            color: "white",
            fontWeight: "500",
            opacity: "0",
            transform: "translateX(100%)",
            transition: "all 0.3s ease"
        });
        
        this.contenedorNotificaciones.appendChild(notificacion);
        
        // Animación de entrada
        setTimeout(() => {
            notificacion.style.opacity = "1";
            notificacion.style.transform = "translateX(0)";
        }, 10);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notificacion.style.opacity = "0";
            notificacion.style.transform = "translateX(100%)";
            setTimeout(() => {
                if (notificacion.parentNode) {
                    notificacion.parentNode.removeChild(notificacion);
                }
            }, 300);
        }, 3000);
    }
    
    getColorNotificacion(tipo) {
        switch (tipo) {
            case "success": return "#28a745";
            case "error": return "#dc3545";
            case "warning": return "#ffc107";
            case "info": return "#17a2b8";
            default: return "#6c757d";
        }
    }
}

// ===============================================
// 13. INICIALIZACIÓN DE LA APLICACIÓN
// ===============================================

// Variable global para acceder a la app desde los onclick inline
let app;

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado, inicializando To-Do App...");
    
    // Verificar que los elementos necesarios existan
    if (!document.querySelector("#lista-tareas")) {
        console.error("No se encontraron los elementos necesarios para la aplicación");
        return;
    }
    
    // Crear instancia de la aplicación
    app = new TodoApp();
    
    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        app.mostrarNotificación("¡To-Do List lista para usar! 📝", "success");
    }, 500);
    
    console.log("To-Do App inicializada completamente");
});

// ===============================================
// 14. EXPORTAR PARA USO EXTERNO (si es necesario)
// ===============================================

// Si estamos en un entorno de módulo
if (typeof module !== "undefined" && module.exports) {
    module.exports = TodoApp;
}

// ===============================================
// 15. FUNCIONES ADICIONALES PARA EXTENDER LA APP
// ===============================================

// Función para exportar/importar tareas
function exportarTareas() {
    if (!app) return;
    
    let datos = {
        version: "1.0",
        fechaExportacion: new Date().toISOString(),
        tareas: app.tareas
    };
    
    let json = JSON.stringify(datos, null, 2);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    
    let a = document.createElement("a");
    a.href = url;
    a.download = `tareas-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    app.mostrarNotificación("Tareas exportadas exitosamente", "success");
}

// Función para importar tareas
function importarTareas(archivo) {
    if (!app || !archivo) return;
    
    let reader = new FileReader();
    reader.onload = function(e) {
        try {
            let datos = JSON.parse(e.target.result);
            
            if (datos.tareas && Array.isArray(datos.tareas)) {
                if (confirm(`¿Importar ${datos.tareas.length} tareas? Esto reemplazará las tareas actuales.`)) {
                    app.tareas = datos.tareas;
                    app.guardarTareas();
                    app.render();
                    app.actualizarEstadisticas();
                    app.mostrarNotificación("Tareas importadas exitosamente", "success");
                }
            } else {
                throw new Error("Formato de archivo inválido");
            }
        } catch (error) {
            app.mostrarNotificación("Error al importar tareas: " + error.message, "error");
        }
    };
    
    reader.readAsText(archivo);
}

// ===============================================
// EJERCICIOS ADICIONALES PARA EXTENDER LA APP
// ===============================================

// Ejercicio 1 → Agrega prioridades a las tareas (alta, media, baja)
// TODO: function agregarPrioridad(tareaId, prioridad) {
// TODO:     let tarea = app.tareas.find(t => t.id === tareaId);
// TODO:     if (tarea) {
// TODO:         tarea.prioridad = prioridad;
// TODO:         app.guardarTareas();
// TODO:         app.render();
// TODO:     }
// TODO: }

// Ejercicio 2 → Implementa búsqueda de tareas
// TODO: function buscarTareas(termino) {
// TODO:     let tareasFiltradas = app.tareas.filter(tarea => 
// TODO:         tarea.texto.toLowerCase().includes(termino.toLowerCase())
// TODO:     );
// TODO:     return tareasFiltradas;
// TODO: }

// Ejercicio 3 → Agrega categorías o etiquetas a las tareas
// TODO: function agregarCategoria(tareaId, categoria) {
// TODO:     let tarea = app.tareas.find(t => t.id === tareaId);
// TODO:     if (tarea) {
// TODO:         if (!tarea.categorias) tarea.categorias = [];
// TODO:         tarea.categorias.push(categoria);
// TODO:         app.guardarTareas();
// TODO:         app.render();
// TODO:     }
// TODO: }

// Ejercicio 4 → Implementa modo oscuro/claro
// TODO: function toggleTema() {
// TODO:     document.body.classList.toggle("tema-oscuro");
// TODO:     let esOscuro = document.body.classList.contains("tema-oscuro");
// TODO:     localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
// TODO: }

// Ejercicio 5 → Agrega animaciones cuando se completan tareas
// TODO: function animarCompletacion(elemento) {
// TODO:     elemento.style.transition = "all 0.3s ease";
// TODO:     elemento.style.transform = "scale(1.05)";
// TODO:     elemento.style.backgroundColor = "#d4edda";
// TODO:     
// TODO:     setTimeout(() => {
// TODO:         elemento.style.transform = "scale(1)";
// TODO:         elemento.style.backgroundColor = "";
// TODO:     }, 300);
// TODO: }

// Ejercicio 6 → Crea un sistema de recordatorios
// TODO: function programarRecordatorio(tareaId, fechaRecordatorio) {
// TODO:     let ahora = new Date().getTime();
// TODO:     let tiempoRecordatorio = new Date(fechaRecordatorio).getTime();
// TODO:     let diferencia = tiempoRecordatorio - ahora;
// TODO:     
// TODO:     if (diferencia > 0) {
// TODO:         setTimeout(() => {
// TODO:             let tarea = app.tareas.find(t => t.id === tareaId);
// TODO:             if (tarea && !tarea.completada) {
// TODO:                 app.mostrarNotificación(`Recordatorio: ${tarea.texto}`, "warning");
// TODO:             }
// TODO:         }, diferencia);
// TODO:     }
// TODO: }

// Ejercicio 7 → Agrega estadísticas avanzadas
// TODO: function obtenerEstadisticasAvanzadas() {
// TODO:     let tareas = app.tareas;
// TODO:     let completadas = tareas.filter(t => t.completada);
// TODO:     
// TODO:     return {
// TODO:         total: tareas.length,
// TODO:         completadas: completadas.length,
// TODO:         porcentajeCompletado: tareas.length > 0 ? Math.round((completadas.length / tareas.length) * 100) : 0,
// TODO:         tiempoPromedioCompletacion: calcularTiempoPromedio(completadas),
// TODO:         tareasHoy: contarTareasHoy(tareas)
// TODO:     };
// TODO: }

// Ejercicio 8 → Implementa sincronización con una API
// TODO: async function sincronizarConServidor() {
// TODO:     try {
// TODO:         let response = await fetch("https://api.ejemplo.com/tareas", {
// TODO:             method: "POST",
// TODO:             headers: { "Content-Type": "application/json" },
// TODO:             body: JSON.stringify({ tareas: app.tareas })
// TODO:         });
// TODO:         
// TODO:         if (response.ok) {
// TODO:             app.mostrarNotificación("Tareas sincronizadas", "success");
// TODO:         }
// TODO:     } catch (error) {
// TODO:         app.mostrarNotificación("Error de sincronización", "error");
// TODO:     }
// TODO: }

// ===============================================
// RESUMEN DEL PROYECTO FINAL
// ===============================================
// Hemos creado una aplicación To-Do List completa con:
// • CRUD completo (Crear, Leer, Actualizar, Borrar)
// • Persistencia con localStorage
// • Sistema de filtros
// • Estadísticas en tiempo real
// • Sistema de notificaciones
// • Edición inline de tareas
// • Validaciones y manejo de errores
// • Atajos de teclado
// • Animaciones y buena UX
// • Código modular y reutilizable
// 
// Aplicamos todos los conceptos del curso:
// • Variables, funciones, arrays, objetos
// • DOM, eventos, manipulación del HTML
// • localStorage para persistencia
// • Buenas prácticas de programación
// • Manejo de errores y validaciones
// • Arquitectura de software básica

// ¡Felicidades por completar el curso de JavaScript! 🎉