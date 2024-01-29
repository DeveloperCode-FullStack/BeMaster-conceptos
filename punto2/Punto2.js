/**
 * Calcula el seno de una operación matemática compleja.
 * 
 * @param {number} x - El primer número de la operación.
 * @param {number} y - El segundo número de la operación.
 * @param {number} z - El tercer número de la operación.
 * @returns {string} El seno de la operación redondeado a dos decimales.
 */
function calcularSeno(x, y, z) {
    // Suma de los valores de entrada
    let suma = x + y;

    // Producto de la suma y el valor z
    let producto = suma * z;

    // Seno del resultado de la operación
    let seno = Math.sin(producto);

    // Redondea el resultado a dos decimales
    return seno.toFixed(2);
}

// Invocación de la función con valores específicos
let resultado = calcularSeno(1, 2, 3);
console.log("El resultado es:", resultado);
