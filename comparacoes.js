//== (Comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto) //true
console.log(numero === texto) //false Pega os valores das variáveis E os tipos delas

// == só compara o valor
// === compara o valor e o tipo da va
//typeof - descobre o tipo de dado variável
console.log(typeof numero)
console.log(typeof texto)

// Conversa explícita
Number()
String()