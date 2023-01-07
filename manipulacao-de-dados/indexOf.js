// Manipulação de array
// metodo indexOf()
// ele acha a posição de um elemento do array para mim

let techs = ["html", "css", "js"]
techs.push("nodejs")
techs.unshift("sql")
techs.push("react")
techs.unshift("typescrupt");

let index = techs.indexOf("nodejs");
console.log(index);