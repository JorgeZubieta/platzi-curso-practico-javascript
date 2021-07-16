// Ahora lo realizamos con funciones para el ingreso de parametros!
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function clickDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    // no usamos alert, mostramos el prcio con html!
    const R = document.getElementById("ResultP");
    R.innerText = "El precio con descuento son: $" + precioConDescuento;
}