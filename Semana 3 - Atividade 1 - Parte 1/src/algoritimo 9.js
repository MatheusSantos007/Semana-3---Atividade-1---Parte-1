// Definimos uma lista de estudantes com nome e média.
let students = [
    { name: "Smith", average: 80 },
    { name: "Jenny", average: 69 },
    { name: "John", average: 35 },
    { name: "Tiger", average: 55 },
  ];
  
  // Usamos "map" para ajustar a média dos estudantes que têm menos de 60,
  // aumentando em 20 pontos. Em seguida, filtramos para manter apenas os que têm média acima de 60.
  const output = students
    .map((student) => {
      if (student.average < 60) {
        student.average += 20; // Ajuste da média para dar uma chance de aprovação.
      }
      return student;
    })
    .filter((student) => student.average > 60);
  
  // Exibimos a lista de estudantes aprovados no console, ou seja, com média final acima de 60.
  console.log(output);
  