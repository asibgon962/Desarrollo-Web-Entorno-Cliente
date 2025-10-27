function contarApariciones(texto, letra) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }
  return contador;
}

function contarLetra() {
  const texto = document.getElementById("texto").value;
  const letra = document.getElementById("letra").value;

  if (letra.length !== 1) {
    document.getElementById("resultado").textContent = "Por favor, introduce solo una letra.";
    return;
  }

  const total = contarApariciones(texto, letra);
  document.getElementById("resultado").textContent = 
    `La letra "${letra}" aparece ${total} veces en el texto.`;
}
