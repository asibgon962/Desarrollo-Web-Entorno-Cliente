// Función que reemplaza todas las apariciones de una palabra
function reemplazarPalabra(frase, antigua, nueva) {
  // Dividimos la frase en palabras
  const palabras = frase.split(" ");
  const resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === antigua) {
      resultado.push(nueva); // Reemplazamos la palabra
    } else {
      resultado.push(palabras[i]); // Dejamos igual
    }
  }

  // Unimos las palabras de nuevo en una frase
  return resultado.join(" ");
}

// Función que se llama desde el botón
function reemplazar() {
  const frase = document.getElementById("frase").value;
  const antigua = document.getElementById("palabraAntigua").value;
  const nueva = document.getElementById("palabraNueva").value;

  if (!frase || !antigua || !nueva) {
    document.getElementById("resultado").textContent = "Por favor, rellena todos los campos.";
    return;
  }

  const nuevaFrase = reemplazarPalabra(frase, antigua, nueva);
  document.getElementById("resultado").textContent = nuevaFrase;
}

// No se como hacer para que no importe si la palabra antigua está en minusculas y luego devolverla a su estado origen
// asi que solo funciona si le das exactamente la misma palabra
