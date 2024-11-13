// Definimos um array de números simples.
const numeros = [1, 2, 3, 4, 5];

// Aqui, transformamos a função tradicional em uma arrow function.
// A função "calcularDobro" recebe um número e retorna o dobro dele.
const calcularDobro = (numero) => numero * 2;

// Aplicamos "map" na lista de números, passando a função "calcularDobro".
// "map" gera uma nova lista, em que cada elemento é o dobro dos valores originais.
const numerosDobro = numeros.map(calcularDobro);

// Exibimos a lista com os valores dobrados no console.
// Saída esperada: [2, 4, 6, 8, 10]
console.log(numerosDobro);
