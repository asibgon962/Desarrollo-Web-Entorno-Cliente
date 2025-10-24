function contarParesEImpares() {
  let numeros = [];
  let pares = 0;
  let impares = 0;

  // Bucle para seguir pidiendo números hasta que se ingrese "0" o un valor no numérico
  while (true) {
    let input = document.getElementById("inputNumero").value;

    if (input === "0" || isNaN(input)) {
      break;  
    }

    let num = parseInt(input);  

    numeros[numeros.length] = num;
    
    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }

    document.getElementById("inputNumero").value = "";
  }

  document.getElementById("resultado").innerHTML = `
    <p>Array de entrada: [${numeros.join(", ")}]</p>
    <p>Hay ${pares} números pares y ${impares} números impares.</p>
  `;
}

