// for..in

const pessoa = {
    nome: "Pedro",
    idade: 16
}

for(const propriedade in pessoa) {
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}