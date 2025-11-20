document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('nuevaOpcion');
  const btn = document.getElementById('agregar');
  const select = document.getElementById('miSelect');
  const errorSpan = document.getElementById('errorAgregado');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) {
      errorSpan.textContent = 'Introduce texto para la nueva opción.';
      input.focus();
      return;
    }

    // crear option; como value usamos un slug simple (puedes ajustar)
    const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-_]/g, '');
    const option = document.createElement('option');
    option.value = slug || text; // fallback
    option.textContent = text;
    select.appendChild(option);

    // seleccionar la recién añadida
    select.value = option.value;

    // limpiar y feedback
    input.value = '';
    errorSpan.textContent = '';
    input.focus();
  });
});
