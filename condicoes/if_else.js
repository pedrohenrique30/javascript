// Condições
// if..else

let nota1 = 9.0;
let nota2 = 7.0;
let nota3 = 6.5;
let nota4 = 4.5;
let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

if (mediaFinal >= 6.0) {
  console.log("Aluno aprovado com sucesso!");
} else {
  if (mediaFinal >= 4.5) {
    console.log("Aluno irá para a recuperação!");
  } else {
    console.log("Aluno foi reprovado!");
  }
}