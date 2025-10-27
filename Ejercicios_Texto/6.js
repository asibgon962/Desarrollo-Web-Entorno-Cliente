// Función que capitaliza la primera letra de cada palabra
function capitalizarPalabras(texto) {
  const palabras = texto.split(" "); // Separa el texto en palabras
  let resultado = "";

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 0) {
      // Convertimos la primera letra a mayúscula y el resto a minúscula
      const palabraCapitalizada = palabras[i][0].toUpperCase() + palabras[i].slice(1).toLowerCase();
      // Añadimos un espacio antes de la palabra si no es la primera
      resultado += (i > 0 ? " " : "") + palabraCapitalizada;
    }
  }

  return resultado;
}

// Función que se llama desde el botón
function capitalizarTexto() {
  const texto = document.getElementById("texto").value;
  if (texto.trim() === "") {
    document.getElementById("resultado").textContent = "Por favor, introduce un texto.";
    return;
  }

  const resultado = capitalizarPalabras(texto);
  document.getElementById("resultado").textContent = resultado;
}

// Mediante operador ternario añadimos un condicional en (i > 0 ) para saber si estamos o no en la segunda palabra o más
// Si devuelve false se aplica el segundo "" si es true el primero " " para añadir el espacio