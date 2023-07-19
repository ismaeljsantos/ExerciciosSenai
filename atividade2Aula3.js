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
    set _modelo(modelo){
        this.modelo = modelo;
    }
    get _modelo(){
        return this.modelo;
    }
    // atividade aula 5 
    // adicionar get e set para todos os atributos
    set _ano(ano){
        this.ano = ano;
    }
    get _ano(){
        return this.ano;
    }
    set _valor(valor){
        this.valor = valor;
    }
    get _valor(){
        return this.valor;
    }
    set _cor(cor){
        this.cor = cor;
    }
    get _cor(){
        return this.cor;
    }
    set _quantidadePortas(quantidadePortas){
        this.quantidadePortas = quantidadePortas;
    }
    get _quantidadePortas(){
        return this.quantidadePortas;
    }
    set _acentos(acentos){
        this.acentos = acentos;
    }
    get _acentos(){
        return this.acentos;
    }

    Ligar(){
        console.log(`Ligando o ${this.modelo}/${this.ano} -- VRUM VRUM VRUM`);
    }

    Idade(){
        let dataAtual = new Date().getFullYear();
        return dataAtual - this.ano;
    }

    DescricaoVeiculo(){
        console.log(`Modelo: ${this.modelo}\n`);
        console.log(`Ano: ${this.ano}\n`);
        console.log(`Valor: ${this.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}\n`);
        console.log(`Cor: ${this.cor}\n`);
        console.log(`Portas: ${this.quantidadePortas}\n Lugares: ${this.acentos}\n Idade do veiculo: ${this.Idade()} anos\n`);
    }

}

var primeiroCarro = new Carro("Etios 1.6", 2014, 38000.00, "Verde", 4, 5);
primeiroCarro.modelo = "Opala";
primeiroCarro.DescricaoVeiculo();

