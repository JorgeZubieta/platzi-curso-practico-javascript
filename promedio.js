// la funcion recibira la lista que decidamos por consola
function calcularMediaAritmetica (lista){

    let sumaLista = 0;
    // length : se refiere a la cantidad totoal de elementos de un array (cuantos casillas tiene)
    for (let i = 0; i < lista.length; i++) {
    // con este for decimos ue se va acumplir solo si "i" (contador) es menor que la cantidad de elementos del array, si lo supera no se cumple.
        sumaLista = sumaLista + lista[i];
        // [i] con esta forma tomamos el contenido (valor) del arrary vinculado con el contador i (poscisiion).
        
        const promediolista = sumaLista / lista.length;
        return promediolista;
    }

}