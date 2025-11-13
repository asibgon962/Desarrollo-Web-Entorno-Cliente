function generarFibonacci(n) {
  let fibonacci = [0, 1]; // primeros dos términos
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n); // por si N < 2
}

// Pedir entrada al usuario
let n = parseInt(prompt("Inserta el número de términos de la secuencia Fibonacci:"));

// Validar que sea un número válido
if (isNaN(n) || n <= 0) {
  alert("Por favor, introduce un número entero positivo.");
} else {
  let secuencia = generarFibonacci(n);
  alert(`Los primeros ${n} términos de la secuencia Fibonacci son: ${secuencia.join(", ")}`);
}
