document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demoForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // evitar envío real / recarga

    // Forma 1: usar FormData (incluye solo campos con valor, p ej. checkbox sólo si checked)
    const fd = new FormData(form);
    const entries = {};
    for (const [key, value] of fd.entries()) {
      // si ya existe la clave, convertir en array para múltiples valores (p. ej. checkboxes)
      if (entries.hasOwnProperty(key)) {
        if (!Array.isArray(entries[key])) entries[key] = [entries[key]];
        entries[key].push(value);
      } else {
        entries[key] = value;
      }
    }

    // Forma 2: para asegurarnos de también detectar checkboxes no marcados y radios sin selección,
    // podemos recorrer los controles y tomar su estado explícito:
    const allControls = form.querySelectorAll('input, select, textarea');
    const explicit = {};
    allControls.forEach(control => {
      const name = control.name || '(sin-name)';
      if (!name) return;
      if (control.type === 'checkbox') {
        // agrupar por name
        explicit[name] = explicit[name] || [];
        if (control.checked) explicit[name].push(control.value);
      } else if (control.type === 'radio') {
        if (control.checked) explicit[name] = control.value;
        else if (explicit[name] === undefined) explicit[name] = explicit[name] || null;
      } else {
        explicit[name] = control.value;
      }
    });

    console.log('--- FormData (valores presentes) ---');
    console.log(entries); // solo valores presentes
    console.log('--- Valores explícitos (incluye arrays para checkboxes) ---');
    console.log(explicit);

    // ejemplo: mostrar bonito en consola
    console.log('Listado claro de campos:');
    Object.keys(explicit).forEach(k => {
      console.log(k, ':', explicit[k]);
    });

    // si quieres, puedes mostrar los datos en la UI en vez de la consola
  });
});
