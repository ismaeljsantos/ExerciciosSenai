//Primeira Atividade
const numb1 = 9;
const numb2 = 3;
console.log(`a soma de ${numb1} + ${numb2} é: ${numb1 + numb2}`);
console.log(`a subtração de ${numb1} - ${numb2} é: ${numb1 - numb2}`);
console.log(`a Multiplicação de ${numb1} x ${numb2} é: ${numb1 * numb2}`);
console.log(`a Divisão de ${numb1} / ${numb2} é: ${numb1 / numb2}`);


//aprimorando a atividade usando bibblioteca para capturar informação pelo console
var readlineSync = require('readline-sync');
/* Usando o readline-sync para capturar a entrada no console*/
var numeroA = parseInt(readlineSync.question("Informe o primeiro numero: "));
var numeroB = parseInt(readlineSync.question("Informe o segundo numero: "));

function Somar(x = 0, y = 0){
    return x + y;
}
function Subtrair(x = 0, y = 0){
    return x - y;
}
function Mutiplicacao(x = 0, y = 0){
    return x * y;
}
function Divisao(x = 0, y = 0){
    return x / y;
} 

console.log(Somar(numeroA, numeroB));
console.log(Subtrair(numeroA, numeroB));
console.log(Mutiplicacao(numeroA, numeroB));
console.log(Divisao(numeroA, numeroB));
