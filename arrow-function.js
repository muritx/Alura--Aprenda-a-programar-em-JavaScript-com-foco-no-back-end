function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
// => significa { return. Se tiver mais de uma linha, precisa sim do return
//apresentarArrow tem apenas um parametro = nome
//Sempre vem como const

const soma = (num1,num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução, mais de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9."
    } else {
        return num1 + num2;
    }
}

//Hoisting: Arrow function se comporta como expressão de função.