// Formulas del cuadrado
console.group("Formulas - Cuadrados");
    // const ladoCuadrado = 5; - lo ingresaremos desde consola
    // console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

    // Volvemos const en funcion
    // const perimetroCuadrado = ladoCuadrado * 4;
    function perimetroCuadrado(lado) {
        return lado * 4;
    }
    // console.log("Perimetro del cuadrado: " + perimetroCuadrado + "cm");


    // const areaCuadrado = ladoCuadrado * ladoCuadrado;
    function areaCuadrado (lado) {
        return lado * lado;
    }
    // console.log("Area cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();

// Formulas del Triangulo
console.group("Formulas - Triangulos"); 
    // const ladoTriangulo1 =6;
    // const ladoTriangulo2 =6;
    // const baseTriangulo =4;

    // console.log(
    //     "Los lados del triangulo miden: " 
    //     + ladoTriangulo1 + "cm, "
    //     + ladoTriangulo2 + "cm, "
    //     + baseTriangulo + "cm."
    // );

    // const alturaTraingulo = 5.5;
    // console.log("La altura del triangulo es: " + alturaTraingulo + "cm");


    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    };
    // console.log("Perimetro del triangulo es: " + perimetroTriangulo + "cm");

    // const areaTriangulo = (baseTriangulo * alturaTraingulo) /2;
    function areaTriangulo(base, altura) {
        return (base * altura)/2;
    }
    // console.log("Area triangulo: " + areaTriangulo + "cm^2");
console.groupEnd();

// Formulas del Circulo
console.group("Formulas - Circulo"); 
    // RADIO
    // const radioCirculo =4;
    // console.log( "El Radio del Circclo mide: " + radioCirculo + "cm");   
    
    // DIAMETRO
    // const diametroCirculo = radioCirculo*2;
    function diametroCirculo(radio) {
        return radio * 2;
    }
    // console.log( "El Diametro del Ciruclo mide: " + diametroCirculo+ "cm");    
    
    // PI
    // 2 formas de definir el valor PI
    // 1 - manualmente    let PI = 3.1415;
    // 2 - utilizando una herramienta de js la cual tiene varias herramientas como asi el valor PI!
    let PI = Math.PI;
    // console.log( "El valor pi es de: " + PI);

    // CIRCUNFERENCIA / PERIMETRO
    // const perimetroCiruclo = diametroCirculo*PI;
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
        // NOTA : aprendimos a llamar a otras funciones dentro de una funcion!
    }
    // console.log("Perimetro del Circulo es: " + perimetroCiruclo + "cm");

    // AREA
    // const areaCirculo = (radioCirculo * radioCirculo) * PI;
    function areaCirculo(radio){
        return (radio * radio) * PI;
    } 
    // console.log("El area de Circulo es: " + areaCirculo + "cm^2");
console.groupEnd();

// Aqui interactuaremos con el HTML llamando a las funciones!
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    let value = input.value;
    // llamamos a la funcion  perimetroCuadrado la cual va arealizar el calculo!
    const perimetro = perimetroCuadrado(value);
    // nos mostrara en una ventana de alerta el resultado!
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    // llamaos a la funcion areaCuadrado
    const area = areaCuadrado(value);
    // nos mostrara en una ventana de alerta el resultado!
    alert(area);
}
