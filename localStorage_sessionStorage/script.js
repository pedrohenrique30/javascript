// localStorage
// salva os dados no navegador, fica salvo depois de fechar ou recarregar a pagina
// os dados ficam salvos na aba application do dev tools

// sessionStorage
// os dados se expiram quando a aba é fechada

// inserir dados no localStorage usando o setItem
// localStorage.setItem("nome", "Pedro");

// pegando os dados no localStorage usando o getItem
// const nome = localStorage.getItem("nome");
// console.log(nome);

// remover um dado no localStorage usando o removeItem
// localStorage.removeItem("nome");

// apagando tudo no localStorage usando o clear
// localStorage.clear();

// inserir dados com sessionStorage
// sessionStorage.setItem("nome", "Matheus");

// pegando os dados no sessionStorage
// sessionStorage.getItem("nome");

// removendo um dado no sessionStorage
// sessionStorage.removeItem("nome");

// removendo tudo no sessionStorage
// sessionStorage.clear();

// salvar object
//const pessoa = {
//  nome: "Pedro",
//  idade: 16,
// };

// transformando o objeto em string usando o JSON.stringify
// localStorage.setItem("pessoa", JSON.stringify(pessoa));

let labelNome = document.querySelector("#labelNome");
let nome = document.querySelector("#nome");
let validNome = false;

let labeEmail = document.querySelector("#labelEmail");
let email = document.querySelector("#email");
let validEmail = false;

let labelTel = document.querySelector("#labelTel");
let tel = document.querySelector("#tel");
let validTel = false;

const form = document.querySelector("#form");
let msgErro = document.querySelector("#msgErro");
let msgSucesso = document.querySelector("#msgSucesso");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.style.color = "red";
    labelNome.innerText = "Nome * Insira no minimo 3 caracteres";
    validNome = false;
  } else {
    labelNome.style.color = "green";
    labelNome.innerText = "Nome";
    validNome = true;
  }
});

email.addEventListener("keyup", () => {
  if (email.value.includes("@gmail.com") && email.value.length > 7) {
    labelEmail.style.color = "green";
    labelEmail.innerText = "E-mail";
    validEmail = true;
  } else {
    labelEmail.style.color = "red";
    labelEmail.innerText = "Email * Insira um e-mail valido";
    validEmail = false;
  }
});

tel.addEventListener("keyup", () => {
  if (tel.value.includes("5585") && tel.value.length > 12) {
    labelTel.style.color = "green";
    labelTel.innerText = "Tel";
    validTel = true;
  } else {
    labelTel.style.color = "red";
    labelTel.innerText = "Tel * Insira um numero valido";
    validTel = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAccount();
});

function saveAccount() {
  if (validNome && validEmail && validTel) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.push({
      nome: nome.value,
      email: email.value,
      tel: tel.value,
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    msgSucesso.innerHTML = `<strong>Usuario cadastrado com sucesso</strong>`;
    msgSucesso.style.color = "green";
    msgSucesso.fontSize = "1rem";
    msgErro.innerHTML = ``;
  } else {
    msgErro.innerHTML = `<strong>Preencha todos os campos corretamente antes de cadastrar!</strong>`;
    msgErro.style.color = "red";
    msgErro.style.fontSize = "1rem";
    msgSucesso.innerHTML = ``;
  }
}
