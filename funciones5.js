// Funciones generadoras
let id=0;
function* generateId(id) {
    id=0;
    while(true) {
        id++;
        yield id;
        // Se queda esperando hasta que se vuelva a llamar.
        if(id > 4 ){
            return;
        }
    }
}

const gen = generateId();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }

function* countAppleSales() {
    const saleList = [3, 7, 5];
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i];
    }
  }

console.log(countAppleSales().next());
console.log(countAppleSales().next());
  