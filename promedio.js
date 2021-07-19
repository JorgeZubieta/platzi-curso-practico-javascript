// la funcion recibira la lista que decidamos por consola
function calcularMediaAritmetica (lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, valorArray) {
            return valorAcumulado = valorAcumulado + valorArray;
        }
    );    
    const promediolista = sumaLista / lista.length;
    return promediolista;
}