// callback function

function sayMyName(nome) {
  console.log("Antes de executar a callback function");
  nome();
  console.log("Depois de executar a callback function");
}

sayMyName(() => {
  console.log("Estou em uma callback function");
});

// O que é o um callback?
// Callback é uma função que será executada apos outra função/lógica ter terminado, pode ser confundido com promises.