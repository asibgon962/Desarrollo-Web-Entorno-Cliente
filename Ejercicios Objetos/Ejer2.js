function isEmpty(obj) {
  for (let key in obj) {
    return false; // Si encuentra una propiedad, no está vacío
  }
  return true; // Si no entra al bucle, está vacío
}

// Ejemplo de uso:
let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["7:30"] = "Hora de levantarse";
console.log(isEmpty(schedule)); // false
