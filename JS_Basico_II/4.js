// Calculadora de descuentos

function calcularPrecioFinal(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

let precioOriginal = parseFloat(prompt("Inserta el precio original del producto:"));
let porcentajeDescuento = parseFloat(prompt("Inserta el porcentaje de descuento a aplicar:"));

let precioFinal = calcularPrecioFinal(precioOriginal, porcentajeDescuento);

alert(
    "El precio final del producto después de aplicar un descuento del " +
    porcentajeDescuento + "% es: " +
    precioFinal.toFixed(2) + " euros."
);
