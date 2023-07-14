// Atividade 2:
// Criar um método que imprima a idade do carro.
// Criar um método que imprima todas as informações do carro, a idade também;

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

    Idade(){
        let dataAtual = new Date().getFullYear();
        return dataAtual - this.ano;
    }

    DescricaoVeiculo(){
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Valor: ${this.valor}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Portas: ${this.quantidadePortas}`);
        console.log(`Lugares: ${this.acentos}`);
        console.log(`Idade do veiculo: ${this.Idade()} anos`);
    }

}

var primeiroCarro = new Carro("Etios 1.6", 2014, 38000.00, "Verde", 4, 5);
primeiroCarro.DescricaoVeiculo();
primeiroCarro.Ligar();
