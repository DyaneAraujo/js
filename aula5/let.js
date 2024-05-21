// var é a forma antiga de declarar variáveis
// let é a forma mais moderna de declarar variáveis
let nome = 'João';
var ano = 1984;

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo.')

let sobrenome; // declaração de variável sem atribuição de valor
console.log(sobrenome); // undefined

sobrenome = 'Silva'; // atribuição de valor
console.log(sobrenome); // Silva

nome = 'Carlos'; // reatribuição de valor
console.log(nome); // Carlos

//let nome; -> erro: SyntaxError: Identifier 'nome' has already been declared

/*
    não podemos criar variáveis com palavras reservadas
    as variáveis precisam ter nomes significativos
    não pode começar o nome de uma variável com um número
    não podem conter espaços ou traços
    utilizamos camelCase
    case-sensitive
    não podemos redeclarar variáveis com let
    não utilize var, utilize let
*/

// são variáveis diferentes
let nomeCliente = 'João';
let nomecliente = 'Maria';

console.log(nomeCliente, nomecliente);