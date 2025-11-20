document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('frutas');
  const out = document.getElementById('seleccion');

  function mostrarSeleccion() {
    const idx = sel.selectedIndex; // 0-based
    const texto = sel.options[idx].text;
    const valor = sel.value;
    // mostramos número de opción 1-based para el usuario
    out.textContent = `Opción ${idx + 1}: ${texto} (valor: "${valor}")`;
  }

  // mostrar inicialmente
  mostrarSeleccion();
  sel.addEventListener('change', mostrarSeleccion);
});
