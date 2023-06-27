function suma(a, b) {
    return a + b;
}

function producto(a, b) {
    return a * b;
}

function exponente(a, b) {
    return a ** b;
}

function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i++)
        factorial *= i;
    return factorial;
}

module.exports = {
    suma,
    producto,
    exponente,
    factorial
}