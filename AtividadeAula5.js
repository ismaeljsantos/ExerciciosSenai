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
    constructor(nome, anoNascimento, nacionalidade, endedeco, salario, aumento, desconto){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.nacionalidade = nacionalidade;
        this.endedeco = endedeco;
        this.salario = salario;
        //const anoAtual = new Date().getFullYear();
        this.idade = this.CalcularIdade(this.anoNascimento);
        this.aumento = aumento;
        this.desconto = desconto;
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

    set _idade(idade){ 
  
        if(idade != idadeCal){

        }  }
    get _idade(){  return this.salario; }
    
    CalcularIdade(anoNascimento){
        const idade =  new Date().getFullYear() - anoNascimento;
        return idade;
    }
    CalcularPorcentagem(porcentagem){
        return this.salario * (porcentagem /100);
    }

    ImprimirDadosPessoal(){
        console.log(`Nome: ${this.nome}
Ano de Nascimento: ${this.anoNascimento}
Nacionalidade: ${this.nacionalidade}
Endereço: ${this.endedeco}
Salario: ${this.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
Idade: ${this.idade}`);

    }

    ImprimirAumento(){
        console.log(`Aumento de ${this.aumento}%:  ${this.CalcularPorcentagem(this.aumento).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    ImprimirSalarioComAumento(){
        
        console.log(`Salario atualizado com aumento: ${(this.salario + this.CalcularPorcentagem(this.aumento)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    ImprimirDescontos(){
        console.log(`Desconto de ${this.desconto}%: ${ this.CalcularPorcentagem(this.desconto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    ImprimirSalacioComDescontos(){
        console.log(`Salario atualizado com desconto: ${(this.salario + this.CalcularPorcentagem(this.desconto)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
    }
    
}

var primeiraPessoa = new Pessoa("Ismael", 1996, "Brasileiro", "rua da mota, sn, terra santa", 2500.00, 7.5, 27.3);
primeiraPessoa.ImprimirDadosPessoal();
primeiraPessoa.ImprimirAumento();
primeiraPessoa.ImprimirSalarioComAumento();
primeiraPessoa.ImprimirDescontos();
primeiraPessoa.ImprimirSalacioComDescontos();
console.log("------------------------------------------------");

// var primeiraPessoa = new Pessoa("Ellen", 1992, "Brasileira", "rua k, 123, abobora", 3500.00);
// primeiraPessoa.ImprimirDadosPessoal();
// primeiraPessoa.ImprimirAumento(7.5);
// primeiraPessoa.ImprimirSalarioComAumento(7.5);
// primeiraPessoa.ImprimirDescontos(27.3);
// primeiraPessoa.ImprimirSalacioComDescontos(27.3);
// console.log("------------------------------------------------");

// var primeiraPessoa = new Pessoa("Orion", 1992, "Brasileiro", "rua A, 321, abobora", 3000.00);
// primeiraPessoa.ImprimirDadosPessoal();
// primeiraPessoa.ImprimirAumento(7.5);
// primeiraPessoa.ImprimirSalarioComAumento(7.5);
// primeiraPessoa.ImprimirDescontos(27.3);
// primeiraPessoa.ImprimirSalacioComDescontos(27.3);
