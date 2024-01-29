/**
 * Genera un array con todos los números enteros impares desde 1 hasta el número dado.
 * 
 * @param {number} n - El número entero hasta el cual se generarán los números impares.
 * @returns {Array<number>} Array con todos los números enteros impares desde 1 hasta n.
 */
function generarNumerosImpares(n) {
    let impares = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    return impares;
}

// Invocación de la función con un número específico
let numerosImpares = generarNumerosImpares(20);
console.log("Los números impares son:", numerosImpares);
