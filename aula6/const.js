// constantes são variáveis que não podem ser alteradas
// não utilizamos var, utilizamos const

const nome = 'João';
const ano = 1984;
console.log(nome, 'nasceu em', ano);

//const nome; -> erro: SyntaxError: Missing initializer in const declaration
// nome = 'Carlos'; -> erro: TypeError: Assignment to constant variable.

//constantes precisam ser inicializadas com um valor

const primeiroNumero = 5;
const segundoNumero = '10';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero) // number
console.log(typeof segundoNumero) // string

console.log(typeof (primeiroNumero + segundoNumero)); // 510 -> string