// Functions

// Criar um aplicativo de frases motivacionais

// declaration - declaração de função
// function statement
function createPhrases() {
  console.log("Estudar é muito bom");
  console.log("Paciencia e persistencia");
  console.log("Revisão é a mãe do aprendizado");
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases();

// function expression
// function anonymous

// parametros (parameters)
const sum = function (number1, number2) {
  console.log(number1 + number2);
};

sum(2, 3); // arguments (argumentos)

// retorno da função
const soma = function (number1, number2) {
  let total = number1 + number2;
  return total;
};

let number1 = 14;
let number2 = 8;

console.log(`O numero é 1 ${number1}`);
console.log(`O numero é 2 ${number2}`);
console.log(`A soma entre ${number1} e ${number2} é ${soma(number1, number2)}`);

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return "Suco de " + fruta1 + fruta2;
}

const copo = fazerSuco("banana", "maça");
console.log(copo);

// Diferença entre function declaration(function a(){})e function expression(let fn = function () {})

// function declaration(function a(){}) pode ser executada antes de sua declaração, e você não pode passar a função para outra função. Você
// precisa usar function expression porque é uma variável.
// function expression(function a(){}) não pode ser executada antes de sua declaração
