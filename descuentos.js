// // // definimos las vriables precio original y porcentage de descuento
// // definimos las variables precio original y porcentage de descuento
// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
// 	precioOriginal,
// 	descuento,
// 	porcentajePrecioConDescuento,
// 	precioConDescuento,
// });


// Ahora lo realizamos con funciones para el ingreso de parametros!
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
