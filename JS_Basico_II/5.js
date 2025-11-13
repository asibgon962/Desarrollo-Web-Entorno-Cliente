// Generador de números primos

function esPrimo(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let inicio = parseInt(prompt("Inserta el primer número:"));
let fin = parseInt(prompt("Inserta el segundo número:"));

let primos = [];

for (let i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

alert("Los números primos entre " + inicio + " y " + fin + " son: " + primos.join(", "));
