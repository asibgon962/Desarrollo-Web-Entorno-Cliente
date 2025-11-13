function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Elegir el tipo de conversión
let opcion = parseInt(prompt("¿Qué tipo de conversión deseas realizar?\n1: Celsius a Fahrenheit\n2: Fahrenheit a Celsius"));

if (opcion === 1) {
  let celsius = parseFloat(prompt("Inserta la temperatura en grados Celsius:"));
  let fahrenheit = celsiusAFahrenheit(celsius);
  alert(`${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);
} else if (opcion === 2) {
  let fahrenheit = parseFloat(prompt("Inserta la temperatura en grados Fahrenheit:"));
  let celsius = fahrenheitACelsius(fahrenheit);
  alert(`${fahrenheit} grados Fahrenheit equivalen a ${celsius.toFixed(2)} grados Celsius.`);
} else {
  alert("Opción no válida. Debes elegir 1 o 2.");
}
