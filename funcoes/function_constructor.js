// Function() constructor
// * expressão new
// * criar um novo objeto
// * this keyword

function Person(nome) {
    this.nome = nome
}
const pedro = new Person("Pedro");
console.log(pedro);