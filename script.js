function verificarPar(numero){
    if(numero % 2 === 0){
        console.log('par')
    }
    else{
        console.log('impar')
    }
}
verificarPar(4);

function calcularNumero(numero1,numero2){
    console.log( numero1 + numero2);
    console.log( numero1 - numero2 );
    console.log( numero1 * numero2 );
    console.log( numero1 / numero2 );
}

calcularNumero(10,2);

for(let i = 10; i > 0; i--){
    console.log(i)
}

let original = "JavaScript";
let invertido = original.split("").reverse().join("");
console.log(invertido);

function contaCaracter(palavra) {
    console.log(palavra.length);
}

contaCaracter("Professor");

let carro = {
    marca: "BMW",
    modelo: "320i",
    ano: 2020,
}
console.log(carro.modelo)

function mensagemPersonalizada(nome){
    console.log("olá, " + nome);
}
mensagemPersonalizada(prompt("Digite seu nome"));

function media(n1,n2,n3){
    console.log( (n1 + n2 + n3)/3);
}
media(10,20,30)

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i + " - Múltiplo de 3");
    } else {
        console.log(i + " - Não múltiplo de 3");
    }
}

function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("banana"));

function verificarSinal(num){
    if(num === 0){
        console.log('Zero')
    }
    else if (num < 0 ){
        console.log('Numero Negativo')
    }
    else(num > 0);{
        console.log('Numero Positivo')
    }
}
verificarSinal(4);

function converterTemperatura(){

    console.log("Converter temperatura")
    let temperatura = prompt ("Digite uma temperatura em Celsius para converter para Fahreinheit: ")
    console.log((temperatura * (9/5)) +32 )
}



function atividade14(){
    console.log("Substituir palavra Azul por Vermelho")
    let texto = prompt('Digite uma frase ou texto com a palavra azul');
    console.log(texto.replace(/azul/g, "vermelho"));
}
function atividade21(){

    console.log("Soma dos elementos de um Array")
    let valores = prompt("Digite numeros separados por vírgula: ").split
    (",").map(Number);

    console.log("Soma: ", valores.reduce((acc, val) => acc+val, 0))

}

function atividade24(){

    console.log("Capitalizar a primeira letra");
    let texto = prompt("Digite uma palavra: ")
    console.log(texto.charAt(0) . toUpperCase() + texto.slice(1))

}