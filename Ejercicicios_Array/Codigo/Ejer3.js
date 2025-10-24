
function sumaLista(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i]; // Sumar cada número
  }
  return suma; // Retorna el resultado de la suma
}

// Función que se ejecuta cuando el usuario presiona el botón
function calcularSuma() {
  // Obtener el valor ingresado por el usuario
  let input = document.getElementById('inputNumeros').value;
      
  // Convertir el valor a un array de números
  let arrayNumeros = input.split(',').map(num => parseInt(num.trim())); // Convertir texto a números
      
  // Validar si el array contiene números válidos
  if (arrayNumeros.some(isNaN)) {
    document.getElementById('resultado').innerText = "Por favor, ingresa solo números válidos.";
  } else {
    // Llamar a la función sumaLista y mostrar el resultado
    let resultado = sumaLista(arrayNumeros);
    document.getElementById('resultado').innerText = resultado;
  }
}