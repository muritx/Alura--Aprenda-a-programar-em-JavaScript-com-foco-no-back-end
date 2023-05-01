//Boolean
const usuarioLogado = true
const contaPaga = false

//Truthy ou Falsy
//0 => False
//1 => True

console.log(0 == false) //true
console.log("" == false) //true
console.log(1 == true) //true

//undefined
//Em resumo, null é atribuído pelo programador quando deseja explicitamente indicar a ausência de valor,
//enquanto undefined é um valor padrão atribuído pelo JavaScript quando uma variável ou propriedade não tem valor definido.

//null => vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar) //undefined
console.log(varNull) //null

let numero = 3;
let texto = "Alura";

console.log(typeof numero) //number
console.log(typeof texto) //string

console.log(typeof minhaVar) //undefined
console.log(typeof varNull) //object. Ou seja, null é um objeto.