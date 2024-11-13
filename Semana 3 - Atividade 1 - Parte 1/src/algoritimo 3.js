// Definimos um array de números.
const numbers = [1, 2, 3, 4, 5];

// Criamos uma arrow function chamada "isOdd" que verifica se um número é ímpar.
// Retorna verdadeiro se o número é ímpar e falso se for par.
const isOdd = (x) => x % 2 !== 0;

// Usamos "filter" para criar uma nova lista apenas com os números ímpares.
// "filter" mantém apenas os valores para os quais "isOdd" retorna verdadeiro.
const output = numbers.filter(isOdd);

// Exibimos a lista de números ímpares no console.
// Saída esperada: [1, 3, 5]
console.log(output);
