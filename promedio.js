const lista1 = [
    100,
    200,
    300,
    500,
];
// recordemos que en un array la primera poscision es 0 luego 1 y asi!

let sumaLista1 = 0;
// length : se refiere a la cantidad totoal de elementos de un array (cuantos casillas tiene)
for (let i = 0; i < lista1.length; i++) {
// con este for decimos ue se va acumplir solo si "i" (contador) es menor que la cantidad de elementos del array, si lo supera no se cumple.
    sumaLista1 = sumaLista1 + lista1[i];
    // [i] con esta forma tomamos el contenido (valor) del arrary vinculado con el contador i (poscisiion).
}

// en este punto finaliza el for con la suma total y el primedio de el array! 
const promediolista1 = sumaLista1 / lista1.length;