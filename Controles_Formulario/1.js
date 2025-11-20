document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById('email');
  const emailMsg = document.getElementById('emailMsg');
  const submitBtn = document.getElementById('submitEmail');
  const form = document.getElementById('formEmail');

  function setInvalid(message) {
    email.style.border = '2px solid #c0392b'; // rojo
    emailMsg.textContent = message;
    submitBtn.disabled = true;
    // mantener foco — usar timeout para evitar loop de blur->focus inmediato
    setTimeout(() => email.focus(), 0);
  }

  function setValid() {
    email.style.border = '';
    emailMsg.textContent = '';
    submitBtn.disabled = false;
  }

  email.addEventListener('blur', () => {
    const val = email.value.trim();
    if (!val || !val.includes('@')) {
      setInvalid('Introduce un correo válido que contenga "@"');
    } else {
      setValid();
    }
  });

  // opcional: validar al escribir para dar feedback inmediato
  email.addEventListener('input', () => {
    const val = email.value.trim();
    if (val && val.includes('@')) setValid();
  });

  // impedir envío si inválido
  form.addEventListener('submit', (e) => {
    if (!email.value.trim() || !email.value.includes('@')) {
      e.preventDefault();
      setInvalid('Corrige el correo antes de continuar');
    } else {
      // aquí podrías permitir el envío o manejarlo con AJAX
      e.preventDefault(); // si quieres evitar recarga para demo
      alert('Correo válido — formulario listo para enviar');
    }
  });
});
