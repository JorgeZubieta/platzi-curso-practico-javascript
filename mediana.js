// se le enviran los valores para sacar la median (promedio) de dos elementos! reduce funciona como un FOR
function calcularMediaAritmetica(lista) {
    // utilice el arrow function para realizar la suma de los objetos como numeros!
    let sumaLista = lista.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2))
    const promediolista = sumaLista / lista.length;
    return promediolista; 
    
    // const promedioLista = sumaLista / lista.length;
    // return promedioLista;
}

// Puedo poner este desde le html dentro de las etiqueta script
function clickGuardar(){
    // sueldoCapturado no lo definimos cono var o const o let porque asi se autodefine como variable global que vive en todo el proyecto
    sueldoCapturado = document.getElementById("InputSueldo").value;
    console.log(sueldoCapturado);
    add();
}

var baseDatos = [];
// luego deberiamos realizar una funcion para que guarde el sueldo caprturado
function add(){
    console.log("funca");
    baseDatos.push(sueldoCapturado);
    console.log(baseDatos);
};

// suamos los elementos del array para sacar la mediana
function clickMediana() {
    // aca con este metodo ordenamos la lista1 numericamente ya que sort solo orena lafabeticamente
    baseDatos.sort(function(prev, next) {
        return prev - next;
    });
    // capturamos un numero entero o decimal de la cantidad de casillas del array
    const mitadLista1 = parseInt(baseDatos.length / 2);

    // verificamos si el numero es par retornando verdadero o falso
    function esPar(numerito) {
        // El modulo es el residuo de la division de un numero
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    // declaramos la variable mediana sin valor y globalmente
    mediana = 0;
    // Condicional si es par, seleccionamos las dos posiciones del centro para realizar el promedio de ellas! 
    if (esPar(baseDatos.length)) {
        // como es par le resto 1 para que elemento1 tenga la posicion anterior.
        const elemento1 = baseDatos[mitadLista1 - 1];
        // le pasamo a elemento2 la posicion capurada de mitadLista1.
        const elemento2 = baseDatos[mitadLista1];

        // calculamos el promedio llamando a la funcion calcularMediaAritmetica pasandles los dos valores de elemento 1y2.
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

        mediana = promedioElemento1y2;
        } else {
        mediana = baseDatos[mitadLista1];
    }
    console.log(baseDatos);

    // mostramos el resultado por pantalla
    const resultado = document.getElementById("resultMediana");
    resultado.innerText = "El precio de la Mediana es de: $" + mediana;
}



