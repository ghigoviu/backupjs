export function suma(a, b) {
    return a + b;
}

export function producto(a, b) {
    return a * b;
}

export function exponente(a, b) {
    return a ** b;
}

export function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i++)
        factorial *= i;
    return factorial;
}
