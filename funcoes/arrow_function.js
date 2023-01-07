// Arrow Function

const sayMyName = (nome) => {
  console.log(nome);
};

sayMyName("Pedro");

// Diferença entre arrow function e function normal?
// arrow function não tem o .this bindado nele, e também não suporta prototype
// função normal terá prototype e tem o .this ativo nele
