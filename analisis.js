// Creamos un nuevo array con el campo salario del array  colombia
// Mediana General
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

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Calculamos la mediana y depende si el numero es par o impar 
// con esta reduccion sin ifs nos retorna si es par o impar!!!!
function esPar(numerito) {
    return (numerito % 2 === 0);
    }

// calculamos la mediana (copiada de mediana.js)
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
    
// Calculadora de mediana buscando el valor medio de impar y dos valores si es par!
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

console.log(
    medianaSalarios(salariosColSorted)
);
