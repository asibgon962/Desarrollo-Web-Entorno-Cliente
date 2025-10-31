// 1. Crear un objeto user vacío
let user = {};

// 2. Agregar propiedad name con valor "Ismael"
user.name = "Ismael";

// 3. Agregar propiedad surname con valor "Francisco"
user.surname = "Francisco";

// 4. Cambiar el valor de name a "Juan"
user.name = "Juan";

// 5. Remover la propiedad name del objeto
delete user.name;

console.log(user); // { surname: "Francisco" }
