let x = "";
console.log(x);
x = "Texto da variável";

//DECLARAÇÃO DE FUNÇÃO

//1) Declara a função
function imprimeTexto(texto) {
    console.log(texto)
}

//2) Executa a função (1 ou + vezes)
imprimeTexto(x);
imprimeTexto(soma());

//Três formas de escrever funções

function soma() {
    return 2 + 2;
}

//console.log(soma())