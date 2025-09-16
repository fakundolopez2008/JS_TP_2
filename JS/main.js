let resultados = [];
let num1 = parseFloat(prompt("Ingresar Primer Número"));
let num2 = parseFloat(prompt("Ingresar Segundo Número"));
validador (num1,num2);
let opcion = "";

function suma (numero1,numero2){
    let resultado = numero1 + numero2
    resultados.push(resultado)
    alert("El resultado es: " + resultado)
    console.log("El resultado es: " + resultado)
}
function resta (numero1,numero2){
    let resultado = numero1 - numero2;
    resultados.push(resultado);
    alert("El resultado es: " + resultado)
    console.log("El resultado es: " + resultado)
}
function multiplicacion (numero1,numero2){
    let resultado = numero1 * numero2;
    resultados.push(resultado);
    alert("El resultado es: " + resultado)
    console.log("El resultado es: " + resultado)
}
function division(numero1, numero2) {
    if (numero2 === 0) {
        alert("Error: No se puede dividir por 0");
    } else {
        let resultado = numero1 / numero2;
        resultados.push(resultado);
        alert("El resultado es: " + resultado);
        console.log("El resultado es: " + resultado);
    }
}
function validador (numero1, numero2){
    let valida = false;
    while (valida == false){
        if (numero1 === null || isNaN(numero1)) {
            alert("Primer Ingreso no valido. Favor de intentar nuevamente.");
            numero1 = parseFloat(prompt("Ingresar Primer Número"));
            continue;
        }else if (numero2 === null || isNaN(numero2)){
            alert("Segundo Ingreso no valido. Favor de intentar nuevamente.");
            numero2 = parseFloat(prompt("Ingresar Segundo Número"));
            continue;
        }else{
            valida = true;
            return {numero1, numero2};
        }
    }
    
}

while (opcion !== "7") {

    opcion = prompt("¿Qué cálculo desea realizar?\n1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir\n5 - Cargar Nuevos Números\n6 - Ver Resultados\n7 - Salir");
    
    switch (opcion) {
        case "1":
            suma(num1,num2);
            break;
        case "2":
            resta(num1,num2);
            break;
        case "3":
            multiplicacion(num1,num2);
            break;
        case "4":
            division(num1,num2);
            break;    
        case "5":
            num1 = parseFloat(prompt("Ingresar Primer Número"));
            num2 = parseFloat(prompt("Ingresar Segundo Número"));
            validador (num1,num2);
            console.log("Los nuevos números cargados son: " + num1 + " y " + num2);
            break; 
        case "6":
            if (resultados.length === 0){
                console.log("No se realizaron operaciones");
            } else {
                for (let resultado of resultados) {
                    console.log("Los resultados registrados son los siguientes: " + resultado + "\n");
                }
            }                
            break; 
        case "7":
            alert("Programa Finalizado");
            console.log("Gracias por usar Calculator3000");
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;       
    }
}