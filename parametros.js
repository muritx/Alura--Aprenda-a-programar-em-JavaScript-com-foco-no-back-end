function soma(numero1, numero2) {
    return numero1 + numero2;
}

//console.log(soma(-500, 60))

//Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}.`
}

//console.log(nomeIdade(50, "Paulo"))

function multiplica(numero1 = 1, numero2 = 1) { //Passando o igual aqui, ele pega o parametro faltante e transforma em 1
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))
//Ao passar apenas um parametro, o resultado é NaN
//Boa prática é chamar poucos parametros para a função.