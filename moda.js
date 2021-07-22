const lista1 = [
    1,
    90,
    1,
    2,
    4,
    1,
    4,
    51,
    4,
    7,
    8,
    90,
    1,
    1,
];

// declaramos una lista de objetos vacia
const lista1Count = {};

// map recorre un array
// Cuenta de cuantoas veces aparece un elemento dentro del array1
lista1.map(
    function(elemento){
        // si existe el elemento se suma uno al contador!
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
        // si no existe que ponga el contador en 1
        lista1Count[elemento] = 1;
        }
    }
);

// Object.entries convierte un objeto en un array
// Sort oredna un array conn dos parametros
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        // [1] apunta a la segunda pos del arrray pra ordenerlo
        return elementoA[1] - elementoB[1];
    }
);
// entramos a la ultima pos asi que usamos length
// 5 elementos de 0 a 4 restamos para que de 5 elementos se le reste al contador una pos!
const moda = lista1Array[lista1Array.length - 1];