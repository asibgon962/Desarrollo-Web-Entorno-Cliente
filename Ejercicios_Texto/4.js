function contarVocalesEnTexto(texto) {
  const vocales = "aeiou";
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i].toLowerCase())) {
      contador++;
    }
  }

  return contador;
}

function mostrarVocales() {
  const texto = document.getElementById("texto").value;
  const total = contarVocalesEnTexto(texto);
  document.getElementById("resultado").textContent = 
    `El texto tiene ${total} vocales.`;
}

// aqui aprendemos que ${} referencia al valor cambiante de la variable 

// Error que me ha ocurrido; llamar a las 2 funciones iguales