// Función que cuenta cuántas veces aparece una letra usando charAt()
function contarLetraEnPalabra(palabra, letra) {
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabra.charAt(i).toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }

  return contador;
}

// Función que se llama desde el botón
function contarLetra() {
  const palabra = document.getElementById("palabra").value;
  const letra = document.getElementById("letra").value;

  if (!palabra || !letra) {
    document.getElementById("resultado").textContent = "Por favor, completa ambos campos.";
    return;
  }

  const total = contarLetraEnPalabra(palabra, letra);
  document.getElementById("resultado").textContent = 
    `La letra "${letra}" aparece ${total} veces en la palabra "${palabra}".`;
}

// charAt(i) obtiene el caracter en la posición i 