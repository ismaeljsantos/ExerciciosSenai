class Carro {
    constructor(modelo, ano, valor, cor, quantidadePortas, acentos){
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.cor = cor;
        this.quantidadePortas = quantidadePortas;
        this.acentos = acentos;
    }

    Ligar(){
        console.log(`Ligando o ${this.modelo}/${this.ano} -- VRUM VRUM VRUM`);
    }
}

var primeiroCarro = new Carro("Celta", 2012, 15500.99,"Cinza", 4, 5);
console.log(primeiroCarro.modelo);
console.log(primeiroCarro.valor);
primeiroCarro.Ligar();

console.log(`O carro: ${primeiroCarro.modelo}\n Valor: R$ ${primeiroCarro.valor}\n Ano: ${primeiroCarro.ano}\n Cor: ${primeiroCarro.cor}\n`);

var segundoCarro = new Carro("Fusca", 1987, 7900.99,"vermelho", 2, 5);
console.log(segundoCarro.modelo);
console.log(segundoCarro.valor);
segundoCarro.Ligar();

console.log(`O carro: ${segundoCarro.modelo}\n Valor: R$ ${segundoCarro.valor}\n Ano: ${segundoCarro.ano}\n Cor: ${segundoCarro.cor}`);

// Atividade 1:
// -Criar mais 2 carros;
// -Imprimir modelo, valor e cor de cada;
// -Imprimir a descrição dele; 

var terceiroCarro = new Carro("HB20", 2015, 40000.99,"Preto", 4, 5);
console.log(terceiroCarro.modelo);
console.log(terceiroCarro.valor);
console.log(`Protas: ${terceiroCarro.quantidadePortas}`);
console.log(`Lugares: ${terceiroCarro.acentos}`);
terceiroCarro.Ligar();

console.log(`O carro: ${terceiroCarro.modelo}\n Valor: R$ ${terceiroCarro.valor}\n Ano: ${terceiroCarro.ano}\n Cor: ${terceiroCarro.cor}\n`);


var quartoCarro = new Carro("Etios", 2013, 35000.00,"Prata", 4, 5);
console.log(quartoCarro.modelo);
console.log(quartoCarro.valor);
console.log(`Protas: ${quartoCarro.quantidadePortas}`);
console.log(`Lugares: ${quartoCarro.acentos}`);
quartoCarro.Ligar();

console.log(`O carro: ${terceiroCarro.modelo}\n Valor: R$ ${terceiroCarro.valor}\n Ano: ${terceiroCarro.ano}\n Cor: ${terceiroCarro.cor}\n`);