/*
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg
    tem 1.8 de altura e seu IMC é de 25.925925925925924
    Luiz Otávio nasceu em 1994
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8
let imc; // peso / (altura * altura)
let anoNascimento; // 2024 - idade

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Luiz Otávio nasceu em ${anoNascimento}`);

// concatenation
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');