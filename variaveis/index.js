// Variaveis
// * Nomes simbolicos para receber algum valor
// * Atalhos de codigos
// * Identificadores
// 3 palavras reservadas para criar uma variavel
// var, let, const

// O JS é uma linguagem fracamente tipada e dinamica
// variaveis não precisam ter um tipo prevemente definido
// podemos mudar o conteudo da variavel

// declaração de uma variavel
let nome;

// atribuindo valores a uma variavel
nome = "Pedro"

// a const não pode ser reatribuida, porque ela permanece sempre constante
const sobrenome = "Henrique";
// sobrenome = "Euzebio"; // aqui irá da um erro!

// Diferença entre var, let e const?

// var - é global, a menos que você utilize 'use strict', além de você poder setar um valor e fazer a troca desse valor, pode ser redeclarada, aceita hoisting, pode ser declarada sem ser inicializada(ter valor)

// let - é restrito ao escopo, você pode setar um valor e fazer a troca desse valor, foi liberado em es2015/es6, não pode ser redeclarada, pode ser declarada sem ser inicializada(ter valor)

// const - é restrito ao escopo, você pode setar um valor e não pode fazer a troca dele, a não ser em objetos ou arrays, entretanto há formar de bloquear utilizando o freeze, não pode ser redeclarada