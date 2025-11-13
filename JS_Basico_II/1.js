// Calculadora de gastos de viaje

let alojamiento = parseFloat(prompt("Ingresa los gastos de alojamiento (€):"));
let alimentacion = parseFloat(prompt("Ingresa los gastos de alimentación (€):"));
let entretenimiento = parseFloat(prompt("Ingresa los gastos de entretenimiento (€):"));

let total = alojamiento + alimentacion + entretenimiento;

alert("El coste total del viaje es " + total.toFixed(2) + "€");
