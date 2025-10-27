function esPalindromo(texto) {
  // Eliminamos espacios, signos y convertimos a minúsculas
  texto = texto.toLowerCase().replace(/ /g, "");

  //texto = texto.toLowerCase().replace(/[\W_]/g, "");
  // esa sería otra forma de utilizarlo, más tecnica. la cual voy a explicar:
  // \W: significa todo caracter que no es letra ni numero ( lo contrario sería \w)
  // /../ delimita la expresion y la g hace que se aplique no solo al primer elemento
  // _ hace que se elimine el _ si hay 


  let invertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
  }

  return texto === invertido;
}

function verificarPalindromo() {
  const texto = document.getElementById("texto").value;
  const resultado = document.getElementById("resultado");

  if (texto.trim() === "") {
    resultado.textContent = "Por favor, introduce un texto.";
    return;
  }

  if (esPalindromo(texto)) {
    resultado.textContent = "Es un palíndromo.";
  } else {
    resultado.textContent = "No es un palíndromo.";
  }
}
