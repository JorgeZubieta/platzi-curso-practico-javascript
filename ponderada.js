// Puedo poner este desde le html dentro de las etiqueta script
// Constructor de objetos
function clickGuardar(){
    function Elemento(materia, nota, credito){
        console.log("funca");
        this.materia = materia;
        this.nota = nota;
        this.credito = credito;
    }
    // sueldoCapturado no lo definimos cono var o const o let porque asi se autodefine como variable global que vive en todo el proyecto
    const materia = document.getElementById("InputMateria").value;
    // console.log(materia);
    const nota = document.getElementById("InputNota").value;
    // console.log(nota);
    const credito = document.getElementById("InputCredito").value;
    // console.log(credito);
    nuevoElemento = new Elemento(materia,nota,credito);
    console.log(nuevoElemento);

    agregar();
}

const baseDatos = [];
function agregar(){
    // console.log("capturado");
    baseDatos.push(nuevoElemento);
    console.log(baseDatos);

    // Vamos a mostar en pantalla los elementos capturados de nuevoElemento
    // detectamos la tabla, con innerHTML insertamos los campos ne la tabla
    document.getElementById("tabla").innerHTML += 
    '<tbody><td>' +nuevoElemento.materia+ 
    '</td><<td>' +nuevoElemento.nota+ 
    '</td><<td>' +nuevoElemento.credito+ '</td></tbody>'
}


function clickPonderada(){
    /*Extrayendo en arrays independientes los elementos de nota y credito del objeto*/
    // const nota = baseDatos.map(({nota}) => nota);
    // const credito = baseDatos.map(({credito}) => credito);

    // Multiplicar cada número de la lista por su peso
    const NotaxCredito = baseDatos.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    
    // Sumar todos los elementos del arreglo de elementos multiplicados notaxcredito
    const sumaNotaxCredito = NotaxCredito.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    // Sumar todos los pesos (créditos)
    const credito = baseDatos.map(function (noteObject) {
        return noteObject.credito;
    });

    const sumaCredito = credito.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    // Hacer la división entre ambas “sumas”
    const ponderada = sumaNotaxCredito / sumaCredito;
    console.log(ponderada);

    // mostramos el resultado por pantalla
    resultado = document.getElementById("resultadoPonderada");
    resultado.innerText = "La ponderada es: " + ponderada;

}
