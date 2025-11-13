// Calculadora de IMC

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros (ej: 1.75):"));

let imc = peso / (altura * altura);
let clasificacion = "";

// Clasificación según rangos IMC
if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc < 25) {
    clasificacion = "Normal";
} else if (imc < 30) {
    clasificacion = "Sobrepeso";
} else {
    clasificacion = "Obesidad";
}

alert("IMC: " + imc.toFixed(2) + "\nClasificación: " + clasificacion);
