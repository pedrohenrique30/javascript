// var
// o var é global e local

// é como se por tras dos panos o JS fizesse isso
// var x;
console.log("existe x antes do bloco? " + x); // vai da undefined
// o var irá sofrer o hoisting
// hoisting significa elevação

{
    // x = 0
    var x = 0
}

console.log("existe x depois do bloco? " + x);

// O que é hoisting?
// É o motor do javascript que cria uma variável ou uma função antes de sua "criação".