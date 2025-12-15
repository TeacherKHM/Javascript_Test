function calcularPrecioConDescuento(precioOriginal, descuento) {
    if (precioOriginal < 0 || descuento < 0) {
        throw new Error("El precio y el descuento deben ser valores positivos");
    }
    
    if (descuento > 100) {
        throw new Error("El descuento no puede ser mayor al 100%");
    }
    
    const montoDescuento = (precioOriginal * descuento) / 100;
    const precioFinal = precioOriginal - montoDescuento;
    
    return precioFinal;
}

// Ejemplos de uso
console.log(calcularPrecioConDescuento(100, 10)); // 90
console.log(calcularPrecioConDescuento(250, 25)); // 187.5
console.log(calcularPrecioConDescuento(50, 0));   // 50