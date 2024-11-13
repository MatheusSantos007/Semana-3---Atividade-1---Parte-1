// Definimos uma lista de números.
const numbers = [1, 2, 3, 4, 5];

// Usamos "map" diretamente com uma arrow function inline.
// A função `x => x * 2` dobra o valor de cada número da lista.
const output = numbers.map((x) => x * 2);

// Exibimos a lista original de números dobrados no console.
// Saída esperada: [2, 4, 6, 8, 10]
console.log(output);
