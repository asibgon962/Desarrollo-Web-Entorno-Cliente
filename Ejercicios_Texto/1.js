function invertirCadena(texto) {
  let invertida = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }
  return invertida;
}

function mostrarInvertida() {
  const texto = document.getElementById("texto").value;
  const resultado = invertirCadena(texto);
  document.getElementById("resultado").textContent = resultado;
}
