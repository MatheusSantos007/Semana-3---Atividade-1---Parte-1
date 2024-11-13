// Definimos uma lista de estudantes com nome e idade.
let estudantes = [
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 20 },
    { nome: "Felipe", idade: 22 },
    { nome: "Pedro", idade: 12 },
    { nome: "Joana", idade: 18 },
  ];
  
  // Usamos "filter" para manter apenas os estudantes com 18 anos ou mais.
  const detalhes = estudantes.filter((estudante) => estudante.idade >= 18);
  
  // Exibimos a quantidade de estudantes com 18 anos ou mais no console.
  // Saída esperada: 3
  console.log(detalhes.length);
  