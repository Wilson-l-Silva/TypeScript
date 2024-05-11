class Pessoa {
    // Propriedades públicas
    nome: string;
    idade: number;

    // Propriedades privadas
    private cpf: string;

    // Construtor
    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    // Método público para apresentar a pessoa
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos.`);
    }

    // Método privado para obter o CPF
    private obterCPF(): string {
        return this.cpf;
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("João", 30, "123.456.789-00");

// Chamando o método público para apresentar a pessoa
pessoa1.apresentar();

// Tentando acessar uma propriedade privada (isso resultará em um erro de compilação)
// console.log(pessoa1.cpf);

// Tentando chamar um método privado (isso resultará em um erro de compilação)
// console.log(pessoa1.obterCPF());
