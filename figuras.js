// Formulas del cuadrado
console.group("Formulas - Cuadrados");
    const ladoCuadrado = 5;
    console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("Perimetro del cuadrado: " + perimetroCuadrado + "cm");

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("Area cuadrado: " + areaCuadrado + "cm^2");
console.groupEnd();

// Formulas del Triangulo
console.group("Formulas - Triangulos"); 
    const ladoTriangulo1 =6;
    const ladoTriangulo2 =6;
    const baseTriangulo =4;

    console.log(
        "Los lados del triangulo miden: " 
        + ladoTriangulo1 + "cm, "
        + ladoTriangulo2 + "cm, "
        + baseTriangulo + "cm."
    );

    const alturaTraingulo = 5.5;
    console.log("La altura del triangulo es: " + alturaTraingulo + "cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("Perimetro del triangulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriangulo * alturaTraingulo) /2;
    console.log("Area cuadrado: " + areaTriangulo + "cm^2");
console.groupEnd();

// Formulas del Circulo
console.group("Formulas - Circulo"); 
    const radioCirculo =4;
    const diametroCirculo = radioCirculo*2;
    // PI
    // 2 formas de definir el valor PI
    // 1 - manualmente    let PI = 3.1415;
    // 2 - utilizando una herramienta de js la cual tiene varias herramientas como asi el valor PI!
    let PI = Math.PI;

    console.log( "El Radio del Circclo mide: " + radioCirculo + "cm");   
    console.log( "El Diametro del Ciruclo mide: " + diametroCirculo+ "cm");    
    console.log( "El valor pi es de: " + PI);

    // Circulo
    const perimetroCiruclo = diametroCirculo*PI;
    console.log("Perimetro del Circulo es: " + perimetroCiruclo + "cm");

    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El area de Circulo es: " + areaCirculo + "cm^2");
console.groupEnd();