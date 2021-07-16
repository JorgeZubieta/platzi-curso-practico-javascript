// Formulas del cuadrado
console.group("Formulas - Cuadrados");
    function perimetroCuadrado(lado) {
        return lado * 4;
    }
    function areaCuadrado (lado) {
        return lado * lado;
    }
console.groupEnd();

// Aqui interactuaremos con el HTML llamando a las funciones!
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
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


// Formulas del Triangulo
console.group("Formulas - Triangulos"); 
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    };
    
    function areaTriangulo(base, altura) {
        return (base * altura)/2;
    }
    function alturaTrianguloIsosceles(lado1, lado2, base) {
            return (Math.sqrt((lado1 * lado2) + (base * base)));
    }
console.groupEnd();

// Aqui interactuaremos con el HTML llamando a las funciones!
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);
    
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);
    
    // llamamos a la funcion  perimetroCuadrado la cual va arealizar el calculo!
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert('El Perímetro Total es de: ' + perimetro + 'cm');
}

function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const altura = Number(inputAltura.value);
    
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = Number(inputBase.value);
    
    // llamamos a la funcion  perimetroCuadrado la cual va arealizar el calculo!
    const area = areaTriangulo(altura, base);
    alert('El Área Total es de: ' + area + 'cm^2 (centimetros cuadrados)');
}

function calcularAlturaTrianguloIsosceles(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);
    
    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);
    
    if (lado1 === lado2 && lado1 != base) {
        // llamamos a la funcion  perimetroCuadrado la cual va arealizar el calculo
        const altura = alturaTrianguloIsosceles(lado1, lado2, base);
        alert('La altura del Tráingulo Isósceles es de: ' + altura + 'cm');
    }else{
        if (base === lado1){
            alert('Cuidado es un triangulo Equilatero!');            
        }else
        alert('El Lado 1 y Lado 2 deben ser iguales!');
    }

}


// Formulas del Circulo
console.group("Formulas - Circulo"); 
    function diametroCirculo(radio) {
        return radio * 2;
    }
    // PERIMETRO (circunferencia)
    let PI = Math.PI;
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    // AREA
    function areaCirculo(radio){
        return (radio * radio) * PI;
    } 
console.groupEnd();

// Aqui interactuaremos con el HTML llamando a las funciones!
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}