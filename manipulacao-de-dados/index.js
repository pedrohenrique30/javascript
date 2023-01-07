// Manipulando strings e numeros
// Transformar uma string em numero e numero em string

let string = "123";
let number = 123;

console.log(String(number)); // number para string
console.log(Number(string)); // string para number

// contar quantas caracteres e digitos tem algum dado
// usamos o length

let word = "Paralelepipedo";

console.log(word.length)

let number2 = 12345;

// no caso de numeros devemos transforma-los em string
console.log(String(number2).length);

// Transformar um numero quebrada com 2 casas decimais e trocar . por ,
// usamos o toFixed() para mostrar quantas casas decimais queremos
// usamos o replace() para fazer alguma troca

let number3 = 12.4567890;
console.log(number3.toFixed(2).replace(".", ","))

let helloWorld = "Ola Mundo";
console.log(helloWorld.replace("Mundo", "Dev"));

// Transformando letras em maiusculas e vice versa
// usamos o toLowerCase() para deixar tudo em minusculas
// usamos toUpperCase() para deixar tudo em maisclas

let text = "Estudar é muito bom";

console.log(text.toLowerCase());
console.log(text.toUpperCase());

let phrase = "Eu quero viver o amor";
let myArray = phrase.split(" "); // o metodo split transforma em um array e nos argumentos podemos separar o array
console.log(myArray);

let phraseComUnderscore = myArray.join("_"); // o metodo join uni o array e nos parametros podemos unir separados com algo
console.log(phraseComUnderscore);

// verificar se tem alguma palavra em tal frase
// usamos o includes()

console.log(phrase.includes("amor")) // passamos nos argumentos o que queremos verificar

// Transformando uma cadeia de caracteres em elementos de um array
let strings = "Manipulação";
console.log(Array.from(strings));