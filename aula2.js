// Atividade:
// Utilizando o exemplo, criar um algoritmo que receba o ano de nascimento do usuário e calcule sua idade;
// O algoritmo deverá ter como saída:
// - Se a idade for maior que 18 anos, Imprimir : "Sua idade é X anos, pode entrar "
// - Se a idade for menor que 18 anos maior que 15 , Imprimir : "Sua idade é X anos é menor de idade, poderá entrar acompanhado"
// - Senão, Imprimir: "Sua idade é X anos, acesso negado"

var anoEvento = new Date().getFullYear();
var anoNascimento = 2008;
const idade = anoEvento - anoNascimento;


if(idade >= 18){
    console.log(`Sua idade é ${ idade} anos, pode entrar`);
}else if (idade >= 15) {
    console.log(`Sua idade é ${ idade} anos é menor de idade, poderá entrar acompanhado de um responsavel`);
}else if(idade < 15) {
    console.log(`Sua idade é ${ idade} anos, acesso negado`);
}