// se le enviran los valores para sacar la median (promedio) de dos elementos!
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// MEDIA
const lista1 = [
    658439,
    100,
    3435,
    6,
    200,
    500,
    400000000,
    250,
];

// aca con este metodo ordenamos la lista1 numericamente ya que sort solo orena lafabeticamente
lista1.sort(function(prev, next) {
    // if (prev > next){
    //     return 1;
    // }
    // if (prev < next){
    //     return -1;
    // }
    // return 0;
    return prev - next;
});


// capturamos un numero entero o decimal de la cantidad de casillas del array
const mitadLista1 = parseInt(lista1.length / 2);

// verificamos si el numero es par retornando verdadero o falso
function esPar(numerito) {
    // El modulo es el residuo de la division de un numero
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// declaramos la variable mediana sin valor
let mediana;
// Condicional si es par, seleccionamos las dos posiciones del centro para realizar el promedio de ellas! 
if (esPar(lista1.length)) {
    // como es par le resto 1 para que lemento1 tenga la posicion anterior.
    const elemento1 = lista1[mitadLista1 - 1];
    // le pasamo a elemento2 la posicion capurada de mitadLista1.
    const elemento2 = lista1[mitadLista1];

    // calculamos el promedio llamando a la funcion calcularMediaAritmetica pasandles los dos valores de elemento 1y2.
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}

