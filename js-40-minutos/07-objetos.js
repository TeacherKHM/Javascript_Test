// ===============================================
// SESIÓN 07 - Objetos y Estructuras de Datos
// Duración: 40 minutos
// Objetivos de hoy:
// • Dominar la creación y manipulación de objetos
// • Aprender desestructuración de objetos y arrays
// • Entender el operador spread (...) con objetos
// • Usar objetos para modelar datos del mundo real
// ===============================================

// ===============================================
// 1. ¿QUÉ ES UN OBJETO?
// ===============================================
// Un objeto es una colección de propiedades (clave-valor)
// Es como una ficha con información sobre algo

// Creación de objetos
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

console.log("Objeto persona:", persona);

// Objeto con diferentes tipos de datos
let estudiante = {
    nombre: "Juan",
    edad: 20,
    esActivo: true,
    notas: [8, 9, 7],
    direccion: {
        calle: "Calle Principal",
        numero: 123
    },
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

console.log("Objeto estudiante:", estudiante);

// ===============================================
// 2. ACCEDER A PROPIEDADES
// ===============================================

// Notación con punto (la más común)
console.log("=== Accediendo a propiedades ===");
console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("¿Es activo?:", estudiante.esActivo);

// Notación con corchetes (útil para propiedades dinámicas)
console.log("Nombre con corchetes:", estudiante["nombre"]);

let propiedad = "edad";
console.log("Edad con variable:", estudiante[propiedad]);

// Acceder a propiedades anidadas
console.log("Calle:", estudiante.direccion.calle);
console.log("Primera nota:", estudiante.notas[0]);

// ===============================================
// 3. MODIFICAR Y AGREGAR PROPIEDADES
// ===============================================

// Modificar propiedades existentes
console.log("\n=== Modificando propiedades ===");
console.log("Edad original:", estudiante.edad);
estudiante.edad = 21;
console.log("Edad modificada:", estudiante.edad);

// Agregar nuevas propiedades
estudiante.apellido = "García";
estudiante.email = "juan@email.com";
console.log("Con nuevas propiedades:", estudiante);

// Agregar propiedades con notación de corchetes
estudiante["telefono"] = "600123456";
console.log("Con teléfono:", estudiante);

// ===============================================
// 4. MÉTODOS EN OBJETOS
// ===============================================
// Los métodos son funciones que pertenecen a un objeto

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    
    // Método tradicional
    arrancar: function() {
        return "El coche está arrancando";
    },
    
    // Método abreviado (ES6+)
    acelerar: function() {
        return `${this.marca} ${this.modelo} está acelerando`;
    },
    
    // Método con parámetros
    conducir: function(kilometros) {
        return `Conduciendo ${kilometros} km`;
    },
    
    // Método que modifica el objeto
    envejecer: function() {
        this.año++;
        return `El coche ahora es del año ${this.año}`;
    }
};

console.log("\n=== Métodos de objetos ===");
console.log(coche.arrancar());
console.log(coche.acelerar());
console.log(coche.conducir(100));
console.log(coche.envejecer());
console.log("Coche envejecido:", coche);

// ===============================================
// 5. PALABRAS CLAVE THIS
// ===============================================
// this se refiere al objeto actual dentro de un método

let usuario = {
    nombre: "María",
    edad: 28,
    
    presentarse: function() {
        return `Me llamo ${this.nombre} y tengo ${this.edad} años`;
    },
    
    cumplirAños: function() {
        this.edad++;
        return `¡Feliz cumpleaños! Ahora tengo ${this.edad} años`;
    }
};

console.log("\n=== Uso de this ===");
console.log(usuario.presentarse());
console.log(usuario.cumplirAños());
console.log(usuario.cumplirAños());

// Cuidado con this en diferentes contextos
function funcionGlobal() {
    console.log("this en función global:", this); // Depende del contexto
}

// ===============================================
// 6. DESestructuración DE OBJETOS
// ===============================================
// La desestructuración nos permite extraer propiedades de forma limpia

let producto = {
    id: 1,
    nombre: "Laptop",
    precio: 999,
    categoria: "Electrónica",
    stock: 10
};

console.log("\n=== Desestructuración de objetos ===");

// Desestructuración básica
let { nombre, precio, categoria } = producto;
console.log("Nombre:", nombre);
console.log("Precio:", precio);
console.log("Categoría:", categoria);

// Desestructuración con renombre
let { nombre: nombreProducto, precio: precioProducto } = producto;
console.log("Nombre renombrado:", nombreProducto);

// Desestructuración con valores por defecto
let { id, nombre: nom, stock: cantidad = 0 } = producto;
console.log("Stock con valor por defecto:", cantidad);

// Desestructuración en parámetros de función
function mostrarProducto({ nombre, precio, categoria }) {
    return `${nombre} - $${precio} (${categoria})`;
}

console.log(mostrarProducto(producto));

// ===============================================
// 7. DESestructuración DE ARRAYS
// ===============================================

let colores = ["rojo", "verde", "azul", "amarillo"];
console.log("\n=== Desestructuración de arrays ===");

// Desestructuración básica
let [primero, segundo, tercero] = colores;
console.log("Primer color:", primero);
console.log("Segundo color:", segundo);

// Saltar elementos
let [color1, , color3] = colores;
console.log("Primer y tercer color:", color1, color3);

// Con valor por defecto
let [c1, c2, c3, c4, c5 = "morado"] = colores;
console.log("Quinto color con defecto:", c5);

// Desestructuración con rest operator
let [primerColor, ...otrosColores] = colores;
console.log("Primer color:", primerColor);
console.log("Otros colores:", otrosColores);

// ===============================================
// 8. OPERADOR SPREAD (...) CON OBJETOS
// ===============================================
// El spread operator nos permite copiar y combinar objetos

console.log("\n=== Spread operator con objetos ===");

let personaBase = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Barcelona"
};

// Copiar objeto
let personaCopia = { ...personaBase };
console.log("Copia:", personaCopia);

// Modificar la copia sin afectar al original
personaCopia.edad = 31;
console.log("Original:", personaBase);
console.log("Copia modificada:", personaCopia);

// Agregar propiedades
let personaExtendida = { ...personaBase, pais: "España", telefono: "600123456" };
console.log("Extendida:", personaExtendida);

// Sobrescribir propiedades
let personaModificada = { ...personaBase, edad: 35, ciudad: "Valencia" };
console.log("Modificada:", personaModificada);

// Combinar objetos
let direccion = {
    calle: "Calle Mayor",
    numero: 45,
    ciudad: "Madrid" // Esta propiedad sobrescribirá la del objeto base
};

let personaCompleta = { ...personaBase, ...direccion };
console.log("Combinada:", personaCompleta);

// ===============================================
// 9. MÉTODOS ÚTILES DE OBJETOS
// ===============================================

let libro = {
    titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    año: 2008,
    paginas: 176,
    disponible: true
};

console.log("\n=== Métodos útiles de objetos ===");

// Object.keys() - obtener todas las claves
let claves = Object.keys(libro);
console.log("Claves del libro:", claves);

// Object.values() - obtener todos los valores
let valores = Object.values(libro);
console.log("Valores del libro:", valores);

// Object.entries() - obtener array de [clave, valor]
let entradas = Object.entries(libro);
console.log("Entradas del libro:", entradas);

// hasOwnProperty() - verificar si una propiedad existe
console.log("¿Tiene propiedad 'titulo'?:", libro.hasOwnProperty("titulo"));
console.log("¿Tiene propiedad 'editorial'?:", libro.hasOwnProperty("editorial"));

// in operator - otra forma de verificar propiedades
console.log("¿'autor' in libro?:", "autor" in libro);
console.log("¿'isbn' in libro?:", "isbn" in libro);

// ===============================================
// 10. OBJETOS DINÁMICOS Y COMPUTADOS
// ===============================================

// Propiedades con nombres dinámicos
console.log("\n=== Propiedades dinámicas ===");

let nombrePropiedad = "dinamica";
let objetoDinamico = {
    propiedadFija: "valor fijo",
    [nombrePropiedad]: "valor dinámico"
};

console.log("Objeto dinámico:", objetoDinamico);

// Agregar propiedades dinámicamente
let prefijo = "temp_";
let contador = 1;
objetoDinamico[prefijo + contador] = "valor temporal 1";
console.log("Con propiedad dinámica:", objetoDinamico);

// ===============================================
// 11. OBJETOS ANIDADOS Y ESTRUCTURAS COMPLEJAS
// ===============================================

let empresa = {
    nombre: "TechCorp",
    fundacion: 2010,
    empleados: [
        {
            id: 1,
            nombre: "Ana",
            puesto: "Desarrolladora",
            departamento: {
                nombre: "Ingeniería",
                presupuesto: 100000
            }
        },
        {
            id: 2,
            nombre: "Juan",
            puesto: "Diseñador",
            departamento: {
                nombre: "Diseño",
                presupuesto: 50000
            }
        }
    ],
    proyectos: [
        {
            nombre: "Proyecto Alpha",
            estado: "activo",
            presupuesto: 75000
        },
        {
            nombre: "Proyecto Beta",
            estado: "planificación",
            presupuesto: 50000
        }
    ]
};

console.log("\n=== Estructuras complejas ===");
console.log("Nombre del primer empleado:", empresa.empleados[0].nombre);
console.log("Presupuesto del departamento de Ana:", empresa.empleados[0].departamento.presupuesto);
console.log("Estado del primer proyecto:", empresa.proyectos[0].estado);

// ===============================================
// 12. BUENAS PRÁCTICAS
// ===============================================

// 1. Nombres descriptivos
let usuarioBueno = {
    nombreCompleto: "María García López", // ✅ Claro
    fechaNacimiento: "1995-06-15", // ✅ Específico
    email: "maria.garcia@email.com" // ✅ Descriptivo
};

let usuarioMalo = {
    n: "María", // ❌ Confuso
    fn: "1995-06-15", // ❌ Abreviado
    e: "maria@email.com" // ❌ Demasiado corto
};

// 2. Estructura consistente
let productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 999,
        stock: 10,
        categoria: "Electrónica"
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 25,
        stock: 50,
        categoria: "Accesorios"
    }
];

// 3. Evitar propiedades undefined
let perfil = {
    nombre: "Carlos",
    edad: 30,
    email: "carlos@email.com",
    telefono: null // Mejor que undefined
};

// ===============================================
// EJERCICIOS PARA PRACTICAR
// ===============================================

// Ejercicio 1 → Crea un objeto coche con marca, modelo, año y un método para mostrar información
// TODO: let cocheEj1 = {
// TODO:     marca: "Toyota",
// TODO:     modelo: "Corolla",
// TODO:     año: 2020,
// TODO:     mostrarInfo: function() {
// TODO:         return `${this.marca} ${this.modelo} (${this.año})`;
// TODO:     }
// TODO: };
// TODO: console.log(cocheEj1.mostrarInfo());

// Ejercicio 2 → Usa desestructuración para extraer nombre y edad de un objeto persona
// TODO: let personaEj2 = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
// TODO: let { nombre, edad } = personaEj2;
// TODO: console.log(`Nombre: ${nombre}, Edad: ${edad}`);

// Ejercicio 3 → Crea una copia de un objeto y modifica una propiedad sin afectar al original
// TODO: let originalEj3 = { a: 1, b: 2, c: 3 };
// TODO: let copiaEj3 = { ...originalEj3, b: 20 };
// TODO: console.log("Original:", originalEj3);
// TODO: console.log("Copia modificada:", copiaEj3);

// Ejercicio 4 → Desestructura un array para obtener los primeros 3 colores
// TODO: let coloresEj4 = ["rojo", "verde", "azul", "amarillo", "morado"];
// TODO: let [color1, color2, color3] = coloresEj4;
// TODO: console.log(`Colores: ${color1}, ${color2}, ${color3}`);

// Ejercicio 5 → Crea un objeto con propiedades dinámicas usando variables
// TODO: let clave = "dinamica";
// TODO: let valor = "contenido";
// TODO: let objetoEj5 = {
// TODO:     fijo: "valor fijo",
// TODO:     [clave]: valor
// TODO: };
// TODO: console.log(objetoEj5);

// Ejercicio 6 → Usa Object.keys para mostrar todas las claves de un objeto
// TODO: let usuarioEj6 = { nombre: "Juan", edad: 30, email: "juan@email.com" };
// TODO: let clavesEj6 = Object.keys(usuarioEj6);
// TODO: console.log("Claves:", clavesEj6);

// Ejercicio 7 → Combina dos objetos usando spread operator
// TODO: let obj1 = { a: 1, b: 2 };
// TODO: let obj2 = { c: 3, d: 4 };
// TODO: let combinadoEj7 = { ...obj1, ...obj2 };
// TODO: console.log("Combinado:", combinadoEj7);

// Ejercicio 8 → Crea un objeto anidado y accede a una propiedad interna
// TODO: let estudianteEj8 = {
// TODO:     nombre: "María",
// TODO:     datos: {
// TODO:         carrera: "Ingeniería",
// TODO:         semestre: 5
// TODO:     }
// TODO: };
// TODO: console.log("Carrera:", estudianteEj8.datos.carrera);

// ===============================================
// RESUMEN DE LA SESIÓN
// ===============================================
// Hoy aprendimos:
// • Crear y manipular objetos
// • Acceder a propiedades con notación de punto y corchetes
// • Métodos y el uso de this
// • Desestructuración de objetos y arrays
// • Spread operator para copiar y combinar objetos
// • Métodos útiles: Object.keys, Object.values, Object.entries
// • Objetos anidados y estructuras complejas
// • Buenas prácticas al trabajar con objetos

// Pregunta para la clase: ¿Cuándo usarías desestructuración en lugar de acceder directamente a las propiedades?
// ¿Por qué es importante usar spread operator al copiar objetos?