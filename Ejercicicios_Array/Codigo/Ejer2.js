let ArrayBooleano = ['Verdadero', 'Falso'];

function verificarNumero() {
  let numero = parseInt(document.getElementById('numeroUsuario').value);

  if (numero >= 0 && numero <= 9) {
    alert(ArrayBooleano[0]);  
  } else {
    alert(ArrayBooleano[1]); 
  }
}

// Usamos let en vez de var, para que solo pueda mostrarse dentro de la función