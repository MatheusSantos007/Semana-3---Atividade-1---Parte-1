// Definimos uma lista de objetos representando usuários.
const users = [
    { firstName: "john", lastName: "colben", age: 26 },
    { firstName: "jimmy", lastName: "fred", age: 75 },
    { firstName: "sam", lastName: "boston", age: 50 },
    { firstName: "ronald", lastName: "bristh", age: 26 },
  ];
  
  // Usamos "map" para criar uma nova lista com o nome completo de cada usuário.
  const output = users.map((user) => `${user.firstName} ${user.lastName}`);
  
  // Exibimos a lista de nomes completos no console.
  // Saída esperada: ["john colben", "jimmy fred", "sam boston", "ronald bristh"]
  console.log(output);
  