// Helpers > Calculamos la mediana y depende si el numero es par o impar. con esta reduccion sin ifs nos retorna si es par o impar!!!!
function esPar(numerito) {
    return (numerito % 2 === 0);
    }

    // Helpers > calculamos la mediana (copiada de mediana.js)
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana salarios buscando el valor medio de impar y dos valores si es par!
function medianaSalarios(lista) {
    // necesitamos la mitad de la mediana de salarios
    // parseInt le quita los decimales al resultado
    const mitad = parseInt(lista.length / 2);

    // verificamos si la lista de nuestro pais de personas es par o impar
    if (esPar(lista.length)) {
        // devuelo las dos posiciones la ser par
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad]; 

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana; 
        } else {
        //devuelo la posicion de lista[mitad] al ser impar
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General >Creamos un nuevo array con el campo salario del array  colombia
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

// Ordenamos el array creado
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// generamos una variable para guardar la mediana de salarios genrales
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10% > del array de salarios ordenados salariosColSorted. De qui sacaremos las ultimas posiciones
// Cuantas pos?, lo que represente el 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

// Array con el top 10% de los salarios mas altos!
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
