// DOM (Document Object Model)

// * É o HTML convertido para um objeto Javacript
// * API que representa e interage com o HTML
// * Estrutura de dados do tipo arvore, criada pelo browser
// * Propriedades e metodos

// Para que serve ?

// * O Javascript usa a DOM para se conectar ao HTML
// * Manipular o HTMl com Javascript
// * Voce so programa para a web porque existe a DOM

// Selecionando elementos

// getElementById - pega o elemento pela id
const id = document.getElementById("titulo");
console.log(id);

// getElementByClassName - pega o elemento pela class
const classe = document.getElementsByClassName("subtitulo");
console.log(classe);

// getElementByTagName - pega o elemento pela tag
const tag = document.getElementsByTagName("body");
console.log(tag);

// querySelector - pega o elemento pelo seletor
const seletor = document.querySelector("[src]");
console.log(seletor);

// querySelectorALl - pega diversos elementos
const seletorAll = document.querySelectorAll("meta");
console.log(seletorAll);

// Manipulando conteudo

// textContent - altera o conteudo de texto do elemento
const h1 = document.querySelector("#titulo");
h1.textContent = "Olá Devs";

// innerText - altera o texto interno do elemento
const h2 = document.querySelector(".subtitulo");
h2.innerText = "Me livrei da maldição";

// innerHTML - altera o conteudo com HTML
h2.innerHTML += "<em> deixando o texto em italico</strong>";

// value
// const input = document.querySelector("#nome");
// input.value = "Pedro Henrique";

// setAttribute - adiciona um atributo no elemento
const header = document.querySelector("header");
header.setAttribute("id", "header");
const headerID = document.querySelector("#header");
console.log(headerID);

// getAttribute - pega o atributo
console.log(header.getAttribute("class"));

// removeAttribute - remove o atributo do elemento
header.removeAttribute("title");

// Alterando styles

// style
h1.style.color = "red";
h2.style.color = "blue";

// classList
const body = document.querySelector("body");
body.classList.add("body"); // add() adiciona a class
body.classList.remove("body"); // remove() remove a classe
body.classList.toggle("body"); // toggle() ele funciona da seguinte maneira, se esstiver a classe ele remove, se não existir ele adicona

// Navegando pelos elementos
// parentNode e parentElent pega o pai do elemento
console.log(body.parentNode);
console.log(body.parentElement);

// childNodes e children pega os filhos do elemento
console.log(body.childNodes);
console.log(body.children);

// firstChild e firstElementChild pega o primeiro filho
console.log(body.firstChild);
console.log(body.firstElementChild);

// lastChild e lastElementChild pega o ultimo filho
console.log(body.lastChild);
console.log(body.lastElementChild);

// nextSibling e nextElementSib ling pega o irmão direto
console.log(header.nextSibling);
console.log(header.nextElementSibling);

// previousSibling e previousElementSibling pega o irmão anterior
const script = document.querySelector("script");
console.log(script.previousSibling);
console.log(script.previousElementSibling);

// Criando elementos e adicionando na página
const div = document.createElement("div");
div.innerHTML = "Criando um elemento via DOM";

body.append(div); // append() adiciona depois
body.prepend(div); // prepend() adiciona antes

// insertBefore - adiciona antes de um determinado elemento

// Eventos

function print() {
  console.log("Voce clicou no titulo");
}

// Eventos de teclado
// keyup - A tecla foi solta
// keydown - Qualquer tecla foi pressionada
// keypress - Qualquer tecla, com exceção de Shift, Fn e Caps Lock está pressionada (segurada)
const input = document.querySelector("input");
input.onkeyup = () => { console.log("digitando...") };

// Adicionando eventos via JS
h2.addEventListener("clicc", print);

// Eventos de mouse
// mouseover - O mouse foi movido para um elemento com um listener, ou em um de seus filhos
// mouseout - O mouse foi removido do elemento, ou de algum filho contendo um listener