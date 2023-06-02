//Comparar listas
// .every()

const array = [4, 6, 1, 3, 12, 56, 7, 9, 10, 11, -4];

const result = array.every(valor => {
    if (typeof valor === 'number'){
        return true;
    } else {
        return false;
    }
});

console.log(result);

const result2 = array.every(valor => valor > 0);

console.log(result2);

// Comparación de listas

const ar1 = [1,2,3,4];
const ar2 = [1,2,3,4];

//Esta comparación no funciona
console.log(ar1 == ar2);

const compareArray = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    const res = array1.every((valor, i) => {
        if(valor === array2[i]) return true;
        return false;
    })
    return res;
}

//Otra manera de comparar
const compareArray2 = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    const res = array1.every((valor, i) => valor === array2[i])
    return res;
}

console.log(compareArray(ar1, ar2));

console.log(compareArray2(ar1, ar2));
