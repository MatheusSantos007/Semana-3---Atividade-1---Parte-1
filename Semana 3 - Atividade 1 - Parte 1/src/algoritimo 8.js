// Definimos uma lista de objetos representando usuários com nome e idade.
const users = [
    { firstName: "john", lastName: "colben", age: 26 },
    { firstName: "jimmy", lastName: "fred", age: 75 },
    { firstName: "sam", lastName: "boston", age: 50 },
    { firstName: "ronald", lastName: "bristh", age: 26 },
  ];
  
  // Filtramos para manter apenas os usuários com idade inferior a 30 anos.
  // Depois, usamos "map" para obter apenas o primeiro nome de cada usuário filtrado.
  const output = users.filter((user) => user.age < 30).map((user) => user.firstName);
  
  // Exibimos a lista de primeiros nomes no console.
  // Saída esperada: ["john", "ronald"]
  console.log(output);
  