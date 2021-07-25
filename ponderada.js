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
    const nota = baseDatos.map(({nota}) => nota);
    const credito = baseDatos.map(({credito}) => credito);

    /*Sumando valores de credito para posteriormente dividir segun formula*/
    const acumulador = (acumulador,credito) => acumulador + credito;
    let creditoSuma = credito.reduce(acumulador);

    /*Recorriendo ambas listas y multiplicando valores uno a uno entre listas segun formula*/
    let ponderadoMultiplicado=0;
    for (let i = 0; i < nota.length; i++) {
        ponderadoMultiplicado = ponderadoMultiplicado + (nota[i]*credito[i]);
    }
    /*Formula*/
    // mostramos el resultado por pantalla
    ponderada = ponderadoMultiplicado/creditoSuma;
    ponderada.innerText = "La ponderada es: " + ponderada;    
}

/*Llamado de la función*/
// promedioPonderado(calificaciones);

