function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// Ejemplo:
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

multiplyNumeric(menu);

console.log(menu);
// Resultado esperado:
// { width: 400, height: 600, title: "Mi menú" }
