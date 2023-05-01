//Tipo de dado
//Booleanos

//Conversão implícita
const numero = 456;
const numeroString = "456";
const numeroString1 = Number("456a");

console.log(numero === numeroString) //false. Ele testa valor e tipo de dado
console.log(numero == numeroString) //true. Ele testa apenas o valor

//Number()
//String()
console.log(numero + numeroString) //456456. Dessa forma, concatena
console.log(numero + Number(numeroString)) //912. Dessa, faz a soma como se fossem dois números.
console.log(numero + Number(numeroString1)) //NaN