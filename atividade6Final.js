// Atividade:
// Usando laços de repetição criar um algoritmo que imprima as 10 tabuadas.
// ex: 1 x 1 = 1
// ........
// 10 X 10 = 100

var readlineSync = require('readline-sync');
/* Usando o readline-sync para capturar a entrada no console*/
var numeroA = parseInt(readlineSync.question("Informe o primeiro numero: "));

for(let i = 1; i <= 10; i++){
    console.log(`${numeroA} * ${i} = ${ numeroA * i}`);
}
