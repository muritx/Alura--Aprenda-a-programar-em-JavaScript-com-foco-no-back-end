//var
//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento; //Não é necessário dizer que é uma variável, o node já faz isso. Mas é boa prática sempre declarar a variável
//console.log(area)
//var area; //O JS varre primeiro quais var existem, podem estar em qualquer lugar do documento. Não existem muitas regras para a var

// let area;

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;

let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)