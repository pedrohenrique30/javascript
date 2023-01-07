// Object
// Propriedades / Atributos
// Funcionalidades / Metodos
// { propriedade: valor }

// posso passar atributos do tipo string, number, boolean, object, array e functions
const pessoa = {
  nome: "Pedro",
  idade: 14,
  altura: 1.7,
  peso: 80.46,
  dev: true,
  andar: () => {
    return "Andando";
  },
  transactions: [],
};

console.log(typeof pessoa); // mostrando o tipo de dado
console.log(pessoa); // mostrando o conteudo do dado
console.log(pessoa.nome); // pegando um dado especifico de um object
console.log(pessoa.andar()); // pegando um dado especifico de um object
