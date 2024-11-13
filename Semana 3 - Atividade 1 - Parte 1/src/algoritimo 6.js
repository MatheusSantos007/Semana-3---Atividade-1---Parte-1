// Pedimos ao usuário para digitar um número.
const input = prompt("Digite um número");

// Convertendo a entrada (string) para um número inteiro usando `parseInt`.
const value = parseInt(input);

// Criamos um array com o tamanho especificado pelo usuário, preenchido com "null" para definir os espaços.
const array = new Array(value).fill(null);

// Geramos uma nova lista de números de 1 até o valor do input usando "map".
const values = array.map((_, index) => index + 1);

// Exibimos a lista com os valores de 1 até o valor digitado no console.
console.log(values);
