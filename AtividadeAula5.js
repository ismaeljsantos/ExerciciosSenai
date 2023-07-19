// Criar classe Pessoa:
// - Atributos: Nome, Ano Nascimento, Nacionalidade, Endereço, Salário, IDADE* ok
// - Criar método que calcule a idade automaticamente ok
// - Criar métodos get e set para os atributos ok
// - Criar função que imprima as informações da Pessoa ok
// - Criar função que imprima Aumento salarial para calcular 7,5% ok 
// - Criar função que imprima Salário comAumento salarial para calcular 7,5% ok
// - Criar função que imprima Descontos obrigatórios com 27,3%
// - Criar função que imprima Salário após os Descontos obrigatórios com 27,3%
// Instanciar 3 objetos Pessoa:
// Executar todas as funções.

class Pessoa {
    constructor(nome, anoNascimento, nacionalidade, endedeco, salario){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.nacionalidade = nacionalidade;
        this.endedeco = endedeco;
        this.salario = salario;
        //const anoAtual = new Date().getFullYear();
        var idade =  new Date().getFullYear() - anoNascimento;
        this.idade = idade;
    }
    set _nome(nome){ this.nome = nome; }
    get _nome(){  return this.nome; }

    set _anoNascimento(anoNascimento){ this.anoNascimento = anoNascimento; }
    get _anoNascimento(){  return this.anoNascimento; }

    set _nacionalidade(nacionalidade){ this.nacionalidade = nacionalidade; }
    get _nacionalidade(){  return this.nacionalidade; }

    set _endereco(endedeco){ this.endedeco = endedeco; }
    get _endereco(){  return this.endedeco; }

    set _salario(salario){ this.salario = salario; }
    get _salario(){  return this.salario; }


    ImprimirDadosPessoal(){
        console.log(`Nome: ${this.nome}
Ano de Nascimento: ${this.anoNascimento}
Nacionalidade: ${this.nacionalidade}
Endereço: ${this.endedeco}
Salario: ${this.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
Idade: ${this.idade}`);

    }
    ImprimirAumento(){
        let aumentoSalario = this.salario * (7.5 / 100);
        console.log(`Aumento de 7,5%:  ${aumentoSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    ImprimirSalarioComAumento(){
        let aumentoSalario = this.salario + (this.salario * (7.5 / 100))
        console.log(`Salario atualizado com aumento: ${aumentoSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    ImprimirDescontos(){
        let descontoSalario = this.salario * (27.3 / 100);
        console.log("Desconto de 27,3%: " + descontoSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }
    ImprimirSalacioComDescontos(){
        let descontoSalario = (this.salario * (27.3 / 100));
        console.log("Salario atualizado com desconto: " + descontoSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }
    
}

var primeiraPessoa = new Pessoa("Ismael", 1996, "Brasileiro", "rua da mota, sn, terra santa", 2000.00);
primeiraPessoa.ImprimirDadosPessoal();
primeiraPessoa.ImprimirAumento();
primeiraPessoa.ImprimirSalarioComAumento();
primeiraPessoa.ImprimirDescontos();
primeiraPessoa.ImprimirSalacioComDescontos();
console.log("------------------------------------------------");

var primeiraPessoa = new Pessoa("Ellen", 1992, "Brasileira", "rua k, 123, abobora", 3500.00);
primeiraPessoa.ImprimirDadosPessoal();
primeiraPessoa.ImprimirAumento();
primeiraPessoa.ImprimirSalarioComAumento();
primeiraPessoa.ImprimirDescontos();
primeiraPessoa.ImprimirSalacioComDescontos();
console.log("------------------------------------------------");

var primeiraPessoa = new Pessoa("Orion", 1992, "Brasileiro", "rua A, 321, abobora", 3000.00);
primeiraPessoa.ImprimirDadosPessoal();
primeiraPessoa.ImprimirAumento();
primeiraPessoa.ImprimirSalarioComAumento();
primeiraPessoa.ImprimirDescontos();
primeiraPessoa.ImprimirSalacioComDescontos();
