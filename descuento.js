function calcularPrecioConDescuento(precioOriginal, descuento) {
    if (precioOriginal < 0 || descuento < 0 || descuento > 100) {
        throw new Error('El precio debe ser positivo y el descuento debe estar entre 0 y 100');
    }
    
    const montoDescuento = (precioOriginal * descuento) / 100;
    const precioFinal = precioOriginal - montoDescuento;
    
    return {
        precioOriginal: precioOriginal,
        descuento: descuento,
        montoDescuento: montoDescuento,
        precioFinal: precioFinal
    };
}

module.exports = calcularPrecioConDescuento;