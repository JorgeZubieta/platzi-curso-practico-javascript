// Puedo poner este desde le html dentro de las etiqueta script
function clickGuardar(){
    // sueldoCapturado no lo definimos cono var o const o let porque asi se autodefine como variable global que vive en todo el proyecto
    numeroCapturado = document.getElementById("InputNumero").value;
    console.log(numeroCapturado);
    add();
}

var baseDatos = [];
// luego deberiamos realizar una funcion para que guarde el sueldo caprturado

function add(){
    console.log("funca");
    baseDatos.push(numeroCapturado);
    console.log(baseDatos);
};

    // declaramos una lista de objetos vacia
const lista1Count = {};

// suamos los elementos del array para sacar la mediana
function clickModa() {
    baseDatos.sort(function(prev, next) {
        return prev - next;
    });
    
    // map recorre un array
    // Cuenta de cuantas veces aparece un elemento dentro del array1
    baseDatos.map(
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

    lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    // entramos a la ultima pos asi que usamos length
    moda = lista1Array[lista1Array.length - 1];
    
    console.log(baseDatos);
    // mostramos el resultado por pantalla
    resultado = document.getElementById("resultModa");
    resultado.innerText = "El numero que se repite mas veces es: " + moda[0] + "y se repitio: " + moda[1];
}


