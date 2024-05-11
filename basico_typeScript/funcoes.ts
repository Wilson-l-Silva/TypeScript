// Declaração de função padrão:
function soma(a: number, b: number): number {
    return a + b;
}


// Expressão de função:
const subtracao = function(a: number, b: number): number {
    return a - b;
};


// Arrow function:
const multiplicacao = (a: number, b: number): number => {
    return a * b;
};


// Funções de método em objetos:
const pessoa = {
    nome: "João",
    idade: 30,
    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

// No exemplo acima, apresentar() é um método que pertence ao objeto pessoa.

// Funções como parâmetros de outras funções:
function executarOperacao(a: number, b: number, operacao: (x: number, y: number) => number): number {
    return operacao(a, b);
}

const resultado = executarOperacao(5, 3, soma);
// Neste exemplo, executarOperacao é uma função que recebe dois números e uma função como argumentos. A função soma é passada como argumento para executarOperacao.