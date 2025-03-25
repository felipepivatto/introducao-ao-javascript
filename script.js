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