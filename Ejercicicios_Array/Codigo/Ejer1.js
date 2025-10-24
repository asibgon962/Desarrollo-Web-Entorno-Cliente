const Dias_Semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

function mostrarDia() {
  let Dia_Usuario = parseInt(document.getElementById('diaUsuario').value);

  // Verificamos si el input es un número válido y está dentro del rango correcto
  if (Dia_Usuario >= 0 && Dia_Usuario <= 6) {
    document.getElementById('resultado').innerText = "El día seleccionado es: " + Dias_Semana[Dia_Usuario];
    document.getElementById('resultado').style.display = 'block'; // Muestra el resultado
  } else {
    document.getElementById('resultado').innerText = "Por favor, selecciona un número entre 0 y 6.";
    document.getElementById('resultado').style.display = 'block'; // Muestra el mensaje de error
  }
}

// .innerText se utiliza para mostrar el texto unicamente y actualizar el div en el html
// .style.display se utiliza para que el div se muestre en la pagina

// Se pordría utilizar también .innerHTML pero esto no nos permitiría ocultar el div de ser necesario, al principio de la pagina