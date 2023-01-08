const animais = [
  "Girafa",
  "Hipopotamo",
  "Cachorro",
  "Gato",
  "Papagaio",
  "Zebra",
  "Cavalo",
];

// a indexação (index) começa pelo numero 0
console.log(animais[0]);
console.log(animais[1]);
console.log(animais[2]);

// acessar o tamanho do array
console.log(animais.length);

// iteravel

for (const animal of animais) {
  console.log(animal);
}

// adicionar elemento no fim
animais.push("Raposa");

// adicionar elemento no fim
animais.unshift("Leão");

// remover do fim
animais.pop();

// remover do inicio
animais.shift();

// pega somente alguma posição do array
console.log(animais.slice(2, 4));

// remove um ou mais itens da posição do array
animais.splice(2, 1);

const girafa = animais.find((animal) => {
  if (animal == "Girafa") {
    return animal;
  }
});

console.log(girafa);

// indexOf
// ele acha a posição de um elemento do array para mim
let techs = ["html", "css", "js"];
techs.push("nodejs");
techs.unshift("sql");
techs.push("react");
techs.unshift("typescrupt");

let index = techs.indexOf("nodejs");
console.log(index);

// map()

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(numbersMultipliedByTwo);

// filter()

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter((age) => {
  return age % 2 == 0;
});

console.log(evenAges);

// reduce()

const ages2 = [14, 22, 40, 58, 87];

const sumOfAges = ages2.reduce((age, item) => {
  return item + age;
}, 0);
