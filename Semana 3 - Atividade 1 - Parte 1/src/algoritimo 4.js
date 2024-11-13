// Definimos um array de números.
const arr = [1, 2, 3, 4, 5];

// Usamos "filter" com uma arrow function inline para manter apenas números maiores que 4.
const output = arr.filter((x) => x > 4);

// Exibimos a lista filtrada no console.
// Saída esperada: [5]
console.log(output);
