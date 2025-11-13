function calculateFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Solicitar el número al usuario
let numero = parseInt(prompt("Ingresa un número entero no negativo:"));

if (isNaN(numero) || numero < 0) {
  alert("Por favor, ingresa un número entero no negativo.");
} else {
  let factorial = calculateFactorial(numero);
  alert(`El factorial de ${numero} es: ${factorial}`);
}
